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

    // Configurar transporter con SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true para puerto 465, false para otros
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

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
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor intenta de nuevo.' },
      { status: 500 }
    );
  }
}
