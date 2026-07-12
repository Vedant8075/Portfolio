const nodemailer = require("nodemailer");
require("dotenv").config()
exports.mailSender = async (senderEmail, subject, message, senderName) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port:process.env,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    });

    let htmlBody = `
      <p><strong>Name:</strong> ${senderName}</p>
      <p><strong>Email:</strong> ${senderEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    let info = await transporter.sendMail({
      from: `"VEDANT GUPTA/PORTFOLIO" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: `${senderName} <${senderEmail}>`,
      subject: subject,
      html: htmlBody,
    });
    console.log(info.response);
    return info;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

