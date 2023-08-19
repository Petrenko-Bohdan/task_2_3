// const inputs = document.querySelectorAll('input')
// const form = document.getElementById('form')
// const formButton = document.getElementById('formButton')

const patterns = {
	password: /^[\w@-]{6,}$/,
	confirmPassword: /^[\w@-]{6,}$/,
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
	date: /([\d]{2})\S([\d]{2})\S([\d]{4})/,
}


document.querySelector('form').addEventListener('submit', event =>{
	event.preventDefault();
	
	const validator = new Validator()

	const emailValid = validator.isEmail(emailInput.value);

	let errorMessage;

	if(!emailValid){
		errorMessage='a'
	}
})

class Validator{

		isEmail(email){
			return patterns.email.test(email);
		};
	
		isDate(date){
			return patterns.date.test(date);
		};
	
		checkPassword(password){
			return patterns.password.test(password);
		};
}




// function validate(field, regex){
// 	console.log(regex.test(field.value));
// }


// inputs.forEach((input)=>{
// 	input.addEventListener('input',(e)=>{
// 		validate(e.target, patterns[e.target.attributes.name.value]);
// 	})
// })


// function validate(form){
// 	form.querySelectorAll('input').forEach(input => {
// 		// console.log(input);
// 	});
// }

// document.getElementById('form').addEventListener("submit", function(event){
// 	event.preventDefault();

	
// 	validate(this);
// })

// document.addEventListener('DOMContentLoaded', function(){
// 	const form = document.getElementById('form');
// 	form.addEventListener('submit', event =>{
// 		event.preventDefault();
// 		validate(this)
// 	})
// })


// class validator{

// 	isEmail();

// 	isDate();

// 	checkPassword();
// }

// console.log(validator.checkPassword());

// function logSubmit() {
//   console.log("a"):
// }


// form.addEventListener('submit', event =>{
// 	event.preventDefault();
// 	console.log(event.srcElement.querySelectorAll('input'));
// })

// 18.08

// inputs.forEach((input)=>{
// 	input.addEventListener('keyup', event =>{
// 		console.log(event.target.attributes.id.value);
// 	})
// })