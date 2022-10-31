import { useState } from "react";
import "./App.css";
import Registration from "./components/Registration";

const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [bio, setBio] = useState("");
  const [gender,setGender] = useState("");
  const [selectstream,setStream] = useState("");
  const [skills,setSkills] = useState([]);

  const setCheckBox =(e)=>{
  const skill=e.target.value;
  if(skills.includes(skill)){
    let newSkills=skills.filter((val)=>val !== skill);
    setSkills([...newSkills]);
  }else{
    setSkills([...skills,skill]);
  }
  };

  const onChangeHandler=(e)=>{
    const val=e.target.value;

    switch(e.target.name){
      case "firstname":
      setFirstname(val);
      break;
      case "lastname":
      setLastname(val);
      break;
      case "bio":
        setBio(val);
        break;
        case "gender":
      setGender(val);
      break;
      case "selectstream":
        setStream(val);
        break;
        case "skills":
          setSkills(val);
          break;
        default:
          alert("Error");
        
    }
    // if(e.target.name === 'firstname'){
    //  setFirstname(e.target.value);
    // }else if(e.target.name === 'lastname'){
    //   setLastname(e.target.value);
    // }
    // else if(e.target.name === 'bio'){
    //  setBio(e.target.value);
    // }
  };

  const handleSubmit = () => {
    // e.preventDafault();

     console.log(firstname + " - " + lastname + " - " +bio+ " - " +gender+ " - " + selectstream+ " - " + skills);

    // const userObj={firstname,lastname,bio,gender,selectstream,skills};
    // alert(JSON.stringify(userObj));
    
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <label className="form-label">Firstname</label>
        <Registration name="firstname" value={firstname} onChange={onChangeHandler} placeholder="Firstname" />
        <label className="form-label">Lastname</label>
        <Registration name="lastname" value={lastname}   onChange={onChangeHandler}   placeholder="Lastname" />
        <label className="form-label">Date Of Birth</label>
        <input type="date" name="dateofbirth" placeholder="DateOfBirth" />

        <div className="form-group">
          <label className="form-label">Gender</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              name="gender"
            />
            <label>Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              value="female"
              name="gender"
            />
            <label>Female</label>
          </div>
        </div>

        <div className="form-group">
          <label>Select Role </label>
          <select name="selectstream" onChange={onChangeHandler} className="form-control">
            <option value="">Select Stream</option>
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
            <option value="Manager">Manager</option>
            <option value="Team Leader">Team Leader</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Skills</label>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="Java" onChange={setCheckBox} type="checkbox" id="java" />
            <label>Java</label>
          </div>
           <div className="form-check">
            <input className="form-check-input" name="skill" value="NodeJS" onChange={setCheckBox} type="checkbox" id="nodejs" />
            <label>NodeJS</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="React" onChange={setCheckBox} type="checkbox" id="react" />
            <label>React</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="Android" onChange={setCheckBox} type="checkbox" id="android" />
            <label>Android</label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">About Employee </label>
          <textarea rows="3" id="textarea" name="bio" value={bio}  onChange={onChangeHandler}   placeholder="Tell us about you" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
