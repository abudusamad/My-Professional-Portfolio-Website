const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: process.env.EMAIL_SERVICE_PROVIDER,
		auth: {
			user: process.env.EMAIL_ADDRESS,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_ADDRESS,
		to: process.env.TARGET_EMAIL_ADDRESS,
		subject: "New Contact Form Submission",
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error:", error);
			res
				.status(500)
				.json({ error: "An error occurred while sending the email." });
		} else {
			console.log("Email sent: " + info.response);
			res.sendStatus(200);
		}
	});
});

// Start the server
const port = 3000; // Replace with your desired port
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
