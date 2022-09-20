const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const mobileno = document.getElementById('mobileno');
const strm = document.getElementsByName('strm[]');
let stream= document.getElementById('stream');
let streamValue = stream.value;
const radioButton = document.getElementsByName('radio-button');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
	
	//let form = {"firstname":firstnameValue,"lastname":lastnameValue}
	//const playLoad = new FormData(form);
	const formData = new FormData();
	formData.append('firstname',firstname.value);
	formData.append('lastname',lastname.value);
	formData.append('mobileno',mobileno.value);

		//console.log(...playLoad);
		fetch('http://localhost:3000/form', {
			method: 'PUT',
			body: formData
		})
		.then((response) => response.json())
		.then(data => console.log(data))
		.catch(err => console.log(err));

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

	i=0;
		if(radioButton[i].checked){
		console.log("Gender: "+radioButton[i].value);
		}else if(radioButton[i+1].checked){
		console.log("Gender: "+radioButton[i+1].value);
		}else if(radioButton[i+2].checked){
			console.log("Gender: "+radioButton[i+2].value);
		}else{
			alert("select gender");
		}


	if(stream.value == 0){
		alert("select one stream");
	}else{
		console.log(stream.value);
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


/*
const url = "http://localhost:3000/form";
const formEl = document.querySelector("form");
formEl.addEventListener("submit",async (e) => {
	e.preventDefault();
	const formData = new FormData(formEl);
	const formDataSerialized = Object.fromEntries(formData);
	const jsonObject = {
		...formDataSerialized
	};
	try{
		const response = await fetch(url, {
			method : "POST",
			body : JSON.stringify(jsonObject),
		});
		const json = await response.json();
		console.log(json);
	} catch(e) {
		console.error(e);
		alert("there is an error");
	}
});*/
