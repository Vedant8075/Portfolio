const express = require("express");
const cors = require("cors");
const {mailSender} = require("./mailSender"); 
require("dotenv").config();

const app = express();
app.use(express.json()); 
const allowedOrigins = [
    "http://localhost:5173",
    "https://vedantgupta.me",
    "https://www.vedantgupta.me"
];

app.use(cors({
    origin: allowedOrigins,
    credentials:true
}));     
app.post("/api/send-email", async (req, res) => {
  const { senderEmail, subject, message, senderName } = req.body;

  try {
    await mailSender(senderEmail, subject, message);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));