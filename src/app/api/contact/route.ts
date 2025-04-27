// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json(); // Parse the request body

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Basic email format validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
    }

    // Check for missing environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    console.log('Email User:', emailUser); // Debugging line to check the email user
    console.log('Email Pass:', emailPass); // Debugging line to check the email password
    if (!emailUser || !emailPass) {
      return NextResponse.json({ message: 'Missing email credentials in environment variables.' }, { status: 500 });
    }

    // Set up the transporter for sending emails
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL
      service: 'Gmail',
      auth: {
        user: emailUser, // Your email address
        pass: emailPass, // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: emailUser,
      to: emailUser, // Send email to the same address (you can change this)
      subject: `New message from ${name} <${email}>`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
