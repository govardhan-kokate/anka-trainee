// import { useState } from "react";
import "./App.css";
// import Registration from "./components/Registration";

const App = () => {
 return(
  <div className="App">
    <header className="App-header">
     <form>
      <label>
        First Name:
        <input name="firstname"/>
      </label>
      <div>
        <button>Submit</button>
      </div>
     </form>
    </header>
  </div>
 )
};

export default App;
