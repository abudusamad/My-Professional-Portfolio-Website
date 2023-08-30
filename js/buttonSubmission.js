document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("myForm");
	const responseDiv = document.getElementById("response");

	form.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent the default form submission behavior

		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;

		// Process the form data (you can replace this with your own logic)
		const responseData = {
			message: `Thank you, ${name}! Your email (${email}) has been received.`,
		};

		// Display the response
		responseDiv.textContent = responseData.message;
	});
});
