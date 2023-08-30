const form = document.getElementById("myForm");
document.addEventListener("DOMContentLoaded", function () {
	const responseDiv = document.getElementById("response");
	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;

		const responseData = {
			message: "Thank you, ${name}! Your email (${email}) has been received.",
		};

		responseDiv.textContent = responseData.message;
	});
});
