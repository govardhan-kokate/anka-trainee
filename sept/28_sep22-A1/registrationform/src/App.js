import { useState } from "react";
import "./App.css";
import Registration from "./components/Registration";

const App = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    // gender: "",
    dateofbirth: "",
    // selectrole: "",
    // checkskills: "",
  });

  const [bio, setBio] = useState("");

  const onChangeHandler=(e)=>{
  if(e.target.name === "bio"){
    setBio(e.target.value);
  }
  };


  // const data = new FormData(e.target)
  // console.log(data);

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "firstname",
      errorMessage: "Firstname should be valid",
      label: "Firstname",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "lastname",
      errorMessage: "Lastname should be valid",
      label: "Lastname",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    // {
    //   id:3,
    //   name:"gender",
    //   type:"text",
    //   placeholder:"gender",
    //   // function selectGender(e){
    //   //   if(e.name.value===""){
    //   //     console.log("gender cant be empty");
    //   //   }
    //   //   }
    //   errorMessage:"please select gender",
    //   label:"gender",
    //   required:true
    // },
    {
      id: 4,
      name: "dateofbirth",
      type: "date",
      placeholder: "dateofbirth",
      errorMessage: "select dob",
      label: "Date of birth",
      required: true,
    },
    {
      id: 4,
      name: "aboutemployee",
      type: "date",
      placeholder: "aboutemployee",
      errorMessage: "select dob",
      label: "About Employee",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  const handleSubmit = (e) => {
    e.preventDafault();
    console.log(bio);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        {inputs.map((input) => (
          <Registration
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* <Registration name="firstname" placeholder="Firstname" />
     <Registration name="lastname" placeholder="Lastname"/>
     <Registration name="gender" placeholder="Gender"/>
     <Registration name="dateofbirth" placeholder="DateOfBirth"/> */}

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
          <select className="form-control">
            <option value="">Select Country</option>
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
            <option value="Manager">Manager</option>
            <option value="Team Leader">Team Leader</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Skills</label>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="Java" type="checkbox" id="java" />
            <label>Java</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="NodeJS" type="checkbox" id="nodejs" />
            <label>NodeJS</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="React" type="checkbox" id="react" />
            <label>React</label>
          </div>
          <div className="form-check">
            <input className="form-check-input"name="skill" value="Android" type="checkbox" id="android" />
            <label>Android</label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">About Employee </label>
          <textarea rows="3" id="textarea" placeholder="Tell us about you" onChange={onChangeHandler}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
