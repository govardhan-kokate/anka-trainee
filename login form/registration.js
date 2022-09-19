const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const mobileno = document.getElementById('mobileno');
const stream = document.getElementById('stream');
const radioButton = document.getElementById('radio-button');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const mobilenoValue = mobileno.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	

	if(firstnameValue === '') {
		setErrorFor(firstname, 'firstname cannot be blank');
	} else if(firstnameValue.length < 2){
		setErrorFor(firstname, 'firstname should contain more than 2 characters');
	} else if (!isText(firstnameValue)) {
		setErrorFor(firstname, 'Not a valid name');
	} else {
		setSuccessFor(firstname);
	}

    if(lastnameValue === '') {
		setErrorFor(lastname, 'lastname cannot be blank');
	} else if (!isText(lastnameValue)) {
		setErrorFor(lastname, 'Not a valid name');
	} else {
		setSuccessFor(lastname);
	}
	
    if(mobilenoValue === '') {
		setErrorFor(mobileno, 'mobile no. cannot be blank');
	} else if(mobilenoValue.length != 10){
        setErrorFor(mobileno, 'mobile no. must contain 10 numbers');
    }else{
		setSuccessFor(mobileno);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if(passwordValue.length < 8){
		setErrorFor(password, 'Password cannot less than 8 characters');
	}else if(passwordValue.length > 25){
		setErrorFor(password, 'Password cannot more than 25 characters');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else if(password2Value.length < 8){
		setErrorFor(password2, 'Password cannot less than 8 characters');
	}else if(password2Value.length > 25){
		setErrorFor(password2, 'Password cannot more than 25 characters');
	}else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isText(firstname){
	return /[a-zA-z]/.test(firstname);
}
function isText(lastname){
	return /[a-zA-z]/.test(lastname);
}