const nodemailer = require("nodemailer");
require("dotenv").config()
exports.mailSender = async (email, title, body, name) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    });

    let info = await transporter.sendMail({
      from: `"VEDANT GUPTA/PORTFOLIO" <${process.env.MAIL_USER}>`, 
      to: `${email}`,
      subject: `${title}`, 
      html: `${body}`, 
      name:`${name}`
    });
    console.log(info.response);
    return info;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

