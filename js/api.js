const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: "YOUR_EMAIL_SERVICE_PROVIDER",
		auth: {
			user: "YOUR_EMAIL_ADDRESS",
			pass: "YOUR_EMAIL_PASSWORD",
		},
	});

	const mailOptions = {
		from: "YOUR_EMAIL_ADDRESS",
		to: "TARGET_EMAIL_ADDRESS",
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
