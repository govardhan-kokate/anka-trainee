import CreateEmployee from '../src/components/CreateEmployee'
import EmployeeTable from '../src/components/EmployeeTable'

import './App.css';
function App() {
  return (
    <div className="App">
       <CreateEmployee />
      <div><EmployeeTable/> </div>
    </div>
  );
}

export default App;
