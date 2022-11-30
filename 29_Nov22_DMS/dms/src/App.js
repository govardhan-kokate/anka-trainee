import './App.css';
import PatientRegi from './Forms/Patient/PatientRegi';
import DoctorRegi from './Forms/Doctor/DoctorRegi';
import BabyRegi from './Forms/Baby/BabyRegi';

function App() {
  return (
    <div className="App">
    <DoctorRegi/>
    <PatientRegi/>
    <BabyRegi/>
    </div>
  );
}

export default App;
