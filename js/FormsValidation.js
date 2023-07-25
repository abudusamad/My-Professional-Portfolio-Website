const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);

function validateName() {
	const nameValue = nameInput.value;
	nameInput.classList.toggle("invalid", nameValue.length < 3);
}

function validateEmail() {
	const emailValue = emailInput.value;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	emailInput.classList.toggle("invalid", !emailRegex.test(emailValue));
}

