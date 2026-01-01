import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar variables de entorno SMTP
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM', 'SMTP_TO'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
      console.error('Variables SMTP faltantes:', missingVars);
      return NextResponse.json(
        { error: 'Configuración de correo incompleta. Contacta al administrador.' },
        { status: 500 }
      );
    }

    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const isSecure = process.env.SMTP_SECURE === 'true';

    console.log('Configuración SMTP:', {
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: isSecure,
      user: process.env.SMTP_USER,
    });

    // Configurar transporter con SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: isSecure, // true para puerto 465 (SSL), false para 587 (TLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // No fallar en certificados autofirmados o no válidos
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2',
      },
      debug: true, // Habilitar logging detallado
      logger: true, // Habilitar logger
    });

    // Verificar conexión SMTP antes de enviar
    console.log('Verificando conexión SMTP...');
    await transporter.verify();
    console.log('Conexión SMTP verificada exitosamente');

    // Configurar el email
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM}>`, // Remitente (tu correo)
      to: process.env.SMTP_TO, // Destinatario (tu correo de negocio)
      replyTo: email, // Email del cliente para responder
      subject: `Nuevo mensaje de contacto de ${name} - Suutka`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #003E73;">Nuevo mensaje de contacto - Suutka</h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #003E73;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://suutka.com'}" style="color: #00C4CF;">
              suutka.com
            </a>
          </p>
        </div>
      `,
      text: `
Nuevo mensaje de contacto - Suutka

Nombre: ${name}
Email: ${email}

Mensaje:
${message}
      `.trim(),
    };

    // Enviar el email
    console.log('Enviando email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado exitosamente:', info.messageId);

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error detallado al enviar email:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        error: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
