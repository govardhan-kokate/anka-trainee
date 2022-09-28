const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
	e.preventDefault();
	checkInputs();
});
document.getElementById('email').focus();
function checkInputs() {
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
if(emailValue != ''&& passwordValue != ''){

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
