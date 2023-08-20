import Validator from "./validator.js";
import patterns from "./patterns.js";

document.querySelector('form').addEventListener('submit', event =>{
	event.preventDefault();
	
	const validator = new Validator();

	const emailValid = validator.isEmail(formEmail.value);
	const passwordValid = validator.isPassword(formPassword.value);
	const confirmPasswordValid = validator.isPassword(formConfirmPassword.value);
	const dateValid = validator.isDate(formDate.value);

	let errorMessage;

	function showErr(field, errText){
		const err = document.createElement('span');
		field.after(err);
		err.textContent = errText;
	}

	if(!emailValid){
		 errorMessage = 'Invalid email. ';
		 showErr(formPassword, errorMessage);
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
