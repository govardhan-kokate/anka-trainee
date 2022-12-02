import './App.css';
import PatientRegi from './Forms/Patient/PatientRegi';
import DoctorRegi from './Forms/Doctor/DoctorRegi';
import BabyRegi from './Forms/Baby/BabyRegi';
import Header from './NavBar/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
   
    <DoctorRegi/>
    <PatientRegi/>
    <BabyRegi/>
 
    <Footer/>
    </div>
  );
}

export default App;
