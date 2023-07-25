document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const jsonData = {};

		formData.forEach((value, key) => {
			jsonData[key] = value;
		});

		fetch("YOUR_SERVER_ENDPOINT", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(jsonData),
		})
			.then((response) => {
				if (response.ok) {
					alert("Form submitted successfully!");
					form.reset();
				} else {
					alert("Form submission failed. Please try again later.");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				alert("An error occurred. Please try again later.");
			});
	});
