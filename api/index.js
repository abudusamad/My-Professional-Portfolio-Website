// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config();
const express = require("express");
const dbUri = process.env.DB_URI;
const apiKey = process.env.API_KEY;

app.post("/send-email", (req, res) => {
	const { name, email, message } = req.body;

	// Replace these options with your own email credentials
	
	const mailOptions = {
		from: "your_email@example.com",
		to: "abudusamed@gmail.com", // Replace with your personal email address
		subject: "Contact Form Submission",
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error:", error);
			res.status(500).json({ message: "Error sending email." });
		} else {
			console.log("Email sent:", info.response);
			res.status(200).json({ message: "Email sent successfully." });
		}
	});
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
