  
import { useState } from 'react';
import './App.css';
import Registration from './components/Registration';


const App = () => {
  const [values,setValues] = useState({
    firstname:"",
    lastname:""
  });


  // const data = new FormData(e.target)
  // console.log(data);
 

  const inputs = [
    {
      id:1,
      name:"firstname",
      type:"text",
      placeholder:"firstname",
      label:"firstname"
    },
    {
      id:2,
      name:"lastname",
      type:"text",
      placeholder:"lastname",
      label:"lastname"
    },
    {
      id:3,
      name:"gender",
      type:"text",
      placeholder:"gender",
      label:"gender"
    },
    {
      id:4,
      name:"dateofbirth",
      type:"text",
      placeholder:"dateofbirth",
      label:"dateofbirth"
    }
  ]


  const handleSubmit=(e)=>{
e.preventDafault();

  };

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>  
     <Registration name="firstname" placeholder="Firstname" />
     <Registration name="lastname" placeholder="Lastname"/>
     <Registration name="gender" placeholder="Gender"/>
     <Registration name="dateofbirth" placeholder="DateOfBirth"/>
     <button>Submit</button>
     </form> 
    </div>
  );
}

export default App;
