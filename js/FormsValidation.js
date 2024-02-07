document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const message = document.getElementById("message").value;

		const formData = { name, email, message };

		fetch("/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				alert(data.message); // Display server response to the user
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	});
