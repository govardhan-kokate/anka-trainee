

  const form = document.getElementById("form");
  const user = document.getElementById("user");
  const last = document.getElementById("last");
  const pass = document.getElementById("pass");
  const pass2 = document.getElementById("pass2");
  const email1 = document.getElementById("email2");
  const telephone = document.getElementById("telephone");
  const male = document.getElementById("male");
  const female = document.getElementById("female");
 
  form.addEventListener ('submit', (e) => {
    e.preventDefault();
    validation();
  })


function validation(){
    const userInput = user.value.trim();
    const lastInput = last.value.trim();
    const passInput = pass.value.trim();
    const pass2Input = pass2.value.trim();
    const email1Input = email1.value.trim();
    
    
    if(userInput === ""){
        alert("please enter first name");
        
    }else{
        console.log("successfull");
        
    }
    if(lastInput === ""){
        alert("please enter last name");
    }
    else{
        console.log("successfull")
    }
    if(passInput === ""){
        alert("please enter password")
    }
    else{
        console.log("successfull")
    }
    if(pass2Input === ""){
        alert("please enter conformpassword")
    }
    else
    {
        console.log("successfull")
    }
    if(email1Input == ""){
        alert("please enter emailaddres")
    }
    else{
        console.log("successfull")
    }
    


    
    

    
        



 


// const obj= {
//     'user': user,
//     'lastname': lname,
//     'password01':password,
//     'password02':password2,
//     'email01': Email1,
//     'namber01':number,
//     'male01': male1,
//     'female01':female1,  
     
// }
}

async function checked(){
console.log(obj);

  let res = await axios.post('http://localhost:3000/registraction',obj);
  let data = res.data;
  console.log(data);
   alert ("registered complete");
}