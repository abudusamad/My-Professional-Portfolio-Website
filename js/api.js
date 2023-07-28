// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
	const { name, email, message } = req.body;

	// Replace these options with your own email credentials
	const transporter = nodemailer.createTransport({
		service: "your_email_service_provider", // e.g., 'Gmail', 'Outlook', etc.
		auth: {
			user: "your_email@example.com",
			pass: "your_email_password",
		},
	});

	const mailOptions = {
		from: "your_email@example.com",
		to: "recipient@example.com", // Replace with the recipient's email address
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
