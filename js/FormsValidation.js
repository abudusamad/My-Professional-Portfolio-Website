// contact.js

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const formData = new FormData(contactForm);

	fetch("/send-email", {
		method: "POST",
		body: formData,
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data); // Log the server response, you can handle it differently based on your needs
		})
		.catch((error) => {
			console.error("Error:", error);
		});
});
