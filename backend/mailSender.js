const nodemailer = require("nodemailer");

const mailSender = async (senderEmail, senderName, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 465,                   // Switch to port 465
      secure: true,                // Change this to true for port 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Put your NEW key here
      },
    });

    let info = await transporter.sendMail({
      from: `"${senderName || 'Portfolio'}" <vedantg663@gmail.com>`, 
      to: "vedantg663@gmail.com", 
      replyTo: senderEmail,       
      subject: title, 
      html: `<p>${body}</p>`, 
    });

    console.log("Email sent successfully: ", info.response);
    return info;
  } catch (error) {
    console.error("Mailer Error: ", error.message);
    throw error; 
  }
};

module.exports = mailSender;