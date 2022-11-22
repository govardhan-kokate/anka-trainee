import CreateEmployee from '../src/components/CreateEmployee';
import EmployeeTable from '../src/components/EmployeeTable';
import ResponsiveAppBar from './components/Routing/Nav';
import {Route,Routes} from  'react-router';


import './App.css';
function App() {
  return (
    <div className="App">
       {/* <CreateEmployee /> */}
      {/* <div><EmployeeTable/> </div> */}
      <ResponsiveAppBar/>
      <Routes>
         <Route path="CreateEmployee" element={<CreateEmployee/>} />
         <Route path="EmployeeTable" element={<EmployeeTable/>} /> 
      </Routes>
    </div>
  );
}

export default App;
