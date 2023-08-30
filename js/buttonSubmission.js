document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("myForm");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;

		const responseData = {
			message: `Thank you, ${name}! Your email (${email}) has been received.`,
		};

		// Create a popup element
		const popup = document.createElement("div");
		popup.classList.add("popup");
		popup.textContent = responseData.message;

		// Append the popup to the body
		document.body.appendChild(popup);

		// Automatically remove the popup after a delay
		setTimeout(function () {
			popup.remove();
		}, 3000); // Remove after 3 seconds (adjust as needed)
	});
});
