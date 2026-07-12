const nodemailer = require("nodemailer");
require("dotenv").config();

exports.mailSender = async (senderEmail, subject, message, senderName) => {
  try {
    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, // smtp-relay.brevo.com
      port: Number(process.env.MAIL_PORT), // 587
      secure: Number(process.env.MAIL_PORT) === 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log("✅ SMTP Connected");

    // Email body
    const htmlBody = `
      <h2>📩 New Portfolio Contact Form Submission</h2>

      <p><strong>Name:</strong> ${senderName}</p>
      <p><strong>Email:</strong> ${senderEmail}</p>

      <p><strong>Message:</strong></p>

      <div style="padding:12px;border-left:4px solid #4F46E5;background:#f5f5f5;">
        ${message.replace(/\n/g, "<br>")}
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Vedant Gupta Portfolio" <${process.env.MAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: `${senderName} <${senderEmail}>`,
      subject: `Portfolio Contact: ${subject}`,
      html: htmlBody,
    });

    console.log("✅ Email Sent:", info.messageId);

    return info;
  } catch (error) {
    console.error("❌ Mail Error:", error);
    throw error;
  }
};