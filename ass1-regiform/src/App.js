import "./App.css";
import { useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
 import { useState } from "react";

const App = () => {
  const [selectedDate,setSelectedDate] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
  });
  console.log(errors);
  const onSubmit = (data) => console.log(data);
 
  return (
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Registration Form</h2>
        <div className="form-group">
          <label className="form-label">Firstname</label>
          {/* ref={register({required:true,})}*/}
          <input placeholder="Firstname" {...register('firstname', { required: true, minLength: 2, })} name="firstname" />
          <small className="invalid">{errors.firstname?.type === "required" && <p>First name is required.</p>}</small>
          <small className="invalid">{errors.firstname?.type === "minLength" && <p>Please enter minimun 2 char.</p>}</small>
        </div><br />
        <div className="form-group">
          <label className="form-label">Lastname</label>
          <input name="lastname" placeholder="Lastname" {...register('lastname', { required: true, minLength: 2, })} />
          <small className="invalid">{errors.lastname?.type === "required" && <p>Last name is required.</p>}</small>
          <small className="invalid">{errors.lastname?.type === "minLength" && <p>Please enter minimun 2 char.</p>}</small>
        </div><br />
        <label className="form-label">Date Of Birth</label>
        {/* <ReactDatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)} type="date" dateFormat='dd/MM/yyyy'/> */}
      <input selected={selectedDate} onChange={date=>setSelectedDate(date)} type="date" name="dateofbirth" dateFormat='dd/MM/yyyy' placeholder="DateOfBirth" {...register('dateofbirth', { required: true, })} /> 

        <small className="invalid">{errors.dateofbirth?.type === "required" && <p>Birth date is required.</p>}</small>

        <div className="form-group">
          <label className="form-label">Gender</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              name="gender"
              {...register('gender', { required: true, })}
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
              {...register('gender', { required: true, })}
            />
            <label>Female</label>
          </div>
              <small className="invalid">{errors.gender?.type === "required" && <p>Gender is required.</p>}</small>
        </div>

        <div className="form-group">
          <label>Select Role </label>
          <select name="selectstream" className="form-control" {...register('selectstream', { required: true, })}>
            <option value="">Select Stream</option>
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
            <option value="Manager">Manager</option>
            <option value="Team Leader">Team Leader</option>
          </select>
          <small className="invalid">{errors.selectstream?.type === "required" && <p>Please select your Role.</p>}</small>
        </div>

        <div className="form-group">
          <label className="form-label">Skills</label>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="Java" type="checkbox" id="java" {...register('skill', { required: true, })} />
            <label>Java</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="NodeJS" type="checkbox" id="nodejs" {...register('skill', { required: true, })} />
            <label>NodeJS</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="React" type="checkbox" id="react" {...register('skill', { required: true, })} />
            <label>React</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="Android" type="checkbox" id="android" {...register('skill', { required: true, })} />
            <label>Android</label>
          </div>
          <small className="invalid">{errors.skill?.type === "required" && <p>Please select your skill.</p>}</small>
        </div>
        <div className="form-group">
          <label className="form-label">About Employee </label>
          <input rows="3" id="textarea" name="bio" placeholder="Tell us about you" {...register('bio', { required: true, })} />

          <small className="invalid">{errors.bio?.type === "required" && <p>Write something about you.</p>}</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;