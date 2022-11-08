import { useState } from 'react';

import './App.css';

function App() {



const [form,setForm] = useState({
  firstname:'',
  lastname:'',
  description:'',
  selectstream:'Developer',
   skill:'',
   gender:'',

});


const onChange=(e)=>{
  const {value,name,type,checked} = e.target;

  setForm((state)=>({
    ...state,
     //[name]:value
    [name]:type === 'checkbox' ? checked:value
    }));
} 


const showData=()=>{
console.log('Form: ',form);
}

const onSubmit=(e)=>{
  showData();

  e.preventDefault();
}

  return (
    <div className="App">
     <header className="App-header">
     <form onSubmit={onSubmit}>
      <label>
        First Name:
        <input onChange={onChange} name="firstname" value={form.firstname}/>
      </label>
      <hr/>
      <label>
       Last Name:
        <input onChange={onChange} name="lastname" value={form.lastname}/>
      </label>
      
      <hr/>
      <label>
      Employee Information:
        <textarea onChange={onChange} name="description" value={form.description}/>
      </label> 
      
      <hr/>
       <label>
        Gender:
        <div className="form-group">
          <div className="form-check">
            <input onChange={onChange}
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              name="gender"
            />
            <label>Male</label>
          </div>
          <div className="form-check">
            <input onChange={onChange}
              className="form-check-input"
              type="radio"
              id="female"
              value="female"
              name="gender"
            />
            <label>Female</label>
          </div>
        </div>
       </label>
      <hr/>

      <label>
     Select stream:
       <select onChange={onChange} value={form.selectstream} name="selectstream">
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
            <option value="Manager">Manager</option>
            <option value="Team Leader">Team Leader</option> 
       </select>
      </label> 

      <hr/>
 
      <label>
        Skills:
        <div name="skill" value={form.skill}>
        <div className="form-check">
            <input className="form-check-input" name="skill" value="Java" onChange={onChange} type="checkbox" id="java" />
            <label>Java</label>
          </div>
           <div className="form-check">
            <input className="form-check-input" name="skill" value="NodeJS" onChange={onChange} type="checkbox" id="nodejs" />
            <label>NodeJS</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="React" onChange={onChange} type="checkbox" id="react" />
            <label>React</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="skill" value="Android" onChange={onChange} type="checkbox" id="android" />
            <label>Android</label>
            </div>
            </div>
      </label>
      <div>
        

      <button>Submit</button>
      </div>
     </form>
     </header>
    </div>
  );
}

export default App;
