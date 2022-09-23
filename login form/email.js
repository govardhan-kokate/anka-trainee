const form = document.getElementById('form');
const email = document.getElementById('email-email');
const password = document.getElementById('password-email');
const password2 = document.getElementById('password2-email');
document.getElementById('password-email').disabled = true;
document.getElementById('password2-email').disabled = true;
document.getElementById("next").disabled = true;
let objId;
let objFname;
let objLname;
let objMobno;
let objGender;
let objStream;
let objEmail;
let objPass;

form.addEventListener('submit', e => {
	e.preventDefault();
	checkPassword();
});

function checkInputs() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if (emailValue != '' && isEmail(emailValue)) {

		const emailInput = document.querySelector('#email-email').value;
		let object = {
			email: emailInput
		};

		fetch('http://localhost:3000/user')
			.then(res => res.json())
			.then(data => {
				data.forEach(function (user) {

					const userInfo = JSON.stringify(user);
					const databaseInfo = JSON.stringify(object);

					if (user.email == object.email) {
						console.log('success');
						document.getElementById('password-email').disabled = false;
						document.getElementById('password2-email').disabled = false;
						document.getElementById("next").disabled = false;
						objId = user.id;
						objFname = user.firstname;
						objLname = user.lastname;
						objMobno = user.mobileno;
						objGender = user.gender;
						objStream = user.stream;
						objEmail = user.email;
						objPass = user.password;

						checkPassword();

					} else {
						console.log('error');
					}
				});
			})
			.catch(error => console.log('error'));
	} else {
		return 0;
	}
}

async function checkPassword() {
	// trim to remove the whitespaces
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    console.log(objId,  objFname)

	if (passwordValue == password2Value && isPassword(passwordValue)) {
		const forgotData = {
			id: objId,
			firstname: objFname,
			lastname: objLname,
			mobileno: objMobno,
			gender: objGender,
			stream: objStream,
			email: objEmail,
			password: password.value
		};
		
		let res = await axios.put('http://localhost:3000/user/'+objId, forgotData);
		let data = res.data;
		console.log(data);
		console.log("Updated Successfully!!");
		location.replace("login.html");
		return 0;
	} else {
		console.log("//////////////////////");
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

function isPassword(password1) {
	return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,25}$/.test(password1);
}