const patterns = {
	password: /^[\w@-]{6,}$/,
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
	date: /^([\d]{4})\S([\d]{2})\S([\d]{2})$/,
}

export default patterns;

