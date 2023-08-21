import patterns from "./patterns.js";

class Validator{
	isEmail(email){
		return patterns.email.test(email);
	};
	
	isDate(date){
		return patterns.date.test(date);
	};
	
	isPassword(password){
		return patterns.password.test(password);
	};
};

export default Validator;