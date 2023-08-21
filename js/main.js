import Validator from "./validator.js";
<<<<<<< HEAD

const validator = new Validator();

function showErr(field, errText){
	const err = document.createElement('span');
	field.after(err);
	err.textContent = errText;
}

form.addEventListener('submit', event =>{
	event.preventDefault();
	
	
=======
import patterns from "./patterns.js";

document.querySelector('form').addEventListener('submit', event =>{
	event.preventDefault();
	
	const validator = new Validator();
>>>>>>> 3ec8d6a23554844bc6247e2a3528022ca6a7850b

	const emailValid = validator.isEmail(formEmail.value);
	const passwordValid = validator.isPassword(formPassword.value);
	const confirmPasswordValid = validator.isPassword(formConfirmPassword.value);
	const dateValid = validator.isDate(formDate.value);

	let errorMessage;

<<<<<<< HEAD


	if(!emailValid){
		 errorMessage = 'Invalid email. ';
		 showErr(formEmail, errorMessage);
=======
	function showErr(field, errText){
		const err = document.createElement('span');
		field.after(err);
		err.textContent = errText;
	}

	if(!emailValid){
		 errorMessage = 'Invalid email. ';
		 showErr(formPassword, errorMessage);
>>>>>>> 3ec8d6a23554844bc6247e2a3528022ca6a7850b
	}

	if(!passwordValid){
		errorMessage = 'Invalid password.';
		showErr(formPassword, errorMessage);
	}

	if(!confirmPasswordValid){
		errorMessage = 'Invalid confirm password.';
		showErr(formConfirmPassword, errorMessage);
	}

	if(!dateValid){
		errorMessage = 'Invalid date.';
		showErr(formDate, errorMessage);
	}
})
