const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
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
	
if(emailValue != '' && isEmail(emailValue) && passwordValue != '' && passwordValue.length >= 8 && passwordValue.length <= 25){

    const emailInput = document.querySelector('#email').value;
	const pwdInput = document.querySelector('#password').value;

	const object = {
		email: emailInput,
		password: pwdInput
	};

fetch('http://localhost:3000/user')
  .then(res => res.json())
	.then(data => {
		data.forEach(function(user) {

			const userInfo = JSON.stringify(user);
			const databaseInfo = JSON.stringify(object);

			if(user.email === object.email && user.password === object.password){
				console.log('success');
				alert("Successfully Loged In!!");
				location.replace("homepage.html");
			}else {
				console.log('error');
			}
		});
	})
	.catch(error => console.log('error'));
}else{
	return 0;
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
