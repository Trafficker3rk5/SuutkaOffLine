import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  console.log('=== Iniciando API de contacto ===');

  try {
    // Leer body
    const body = await request.json();
    const { name, email, message } = body;

    console.log('Datos recibidos:', { name, email, messageLength: message?.length });

    // Validar campos
    if (!name || !email || !message) {
      console.error('Campos faltantes:', { name: !!name, email: !!email, message: !!message });
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Leer variables de entorno
    const config = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
    };

    console.log('Variables de entorno leídas:', {
      host: config.host || 'FALTANTE',
      port: config.port || 'FALTANTE',
      secure: config.secure || 'FALTANTE',
      user: config.user || 'FALTANTE',
      passExists: !!config.pass,
      from: config.from || 'FALTANTE',
      to: config.to || 'FALTANTE',
    });

    // Validar que existan TODAS las variables
    const missing: string[] = [];
    if (!config.host) missing.push('SMTP_HOST');
    if (!config.port) missing.push('SMTP_PORT');
    if (!config.user) missing.push('SMTP_USER');
    if (!config.pass) missing.push('SMTP_PASS');
    if (!config.from) missing.push('SMTP_FROM');
    if (!config.to) missing.push('SMTP_TO');

    if (missing.length > 0) {
      console.error('Variables SMTP faltantes:', missing);
      return NextResponse.json(
        {
          error: 'El servidor no está configurado correctamente. Contacta al administrador.',
          debug: `Variables faltantes: ${missing.join(', ')}`
        },
        { status: 500 }
      );
    }

    // Configurar transporter
    const transportConfig = {
      host: config.host!,
      port: parseInt(config.port!),
      secure: config.secure === 'true',
      auth: {
        user: config.user!,
        pass: config.pass!,
      },
      tls: {
        rejectUnauthorized: false,
      },
    };

    console.log('Configuración del transporter:', {
      host: transportConfig.host,
      port: transportConfig.port,
      secure: transportConfig.secure,
      user: transportConfig.auth.user,
    });

    const transporter = nodemailer.createTransport(transportConfig);

    // Verificar conexión
    console.log('Verificando conexión SMTP...');
    try {
      await transporter.verify();
      console.log('✅ Conexión SMTP verificada');
    } catch (verifyError: any) {
      console.error('❌ Error al verificar conexión SMTP:', {
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command,
      });
      throw verifyError;
    }

    // Preparar email
    const mailOptions = {
      from: `"Formulario Suutka" <${config.from}>`,
      to: config.to,
      replyTo: email,
      subject: `Nuevo contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje desde Suutka</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    console.log('Enviando email...', {
      from: mailOptions.from,
      to: mailOptions.to,
      replyTo: mailOptions.replyTo,
    });

    // Enviar email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado exitosamente:', info.messageId);

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Error en API de contacto:', {
      name: error.name,
      message: error.message,
      code: error.code,
      errno: error.errno,
      syscall: error.syscall,
      address: error.address,
      port: error.port,
      command: error.command,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        error: 'Error al enviar el mensaje',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
