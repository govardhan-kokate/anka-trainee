import './App.css';
import PatientRegi from './Forms/Patient/PatientRegi';
import DoctorRegi from './Forms/Doctor/DoctorRegi';
import BabyRegi from './Forms/Baby/BabyRegi';
import Header from './NavBar/Header';
import Footer from './Footer/Footer';
import Home from './LandingPage/Home';
import DoctorLogin from './Forms/Doctor/DoctorLogin'
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import NewBornHistory from './Forms/Baby/NewBornHistory';
import PregnancyHistory from './Forms/Patient/PregnancyHistory';
import AboutUs from './LandingPage/AboutUs';
import Report from './LandingPage/Report';
import ContactUs from './LandingPage/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>    
      <Route path="/" element={<Header/>} />
   <Route path="/DoctorRegi" element={<DoctorRegi />} />
   <Route path="/BabyRegi" element={<BabyRegi />} />
   <Route path="/DoctorLogin" element={<DoctorLogin/>} />
   <Route path="/Dashboard" element={<Dashboard/>} />
   <Route path="/PatientRegi" element={<PatientRegi />} />
   <Route path="/NewBornHistory" element={<NewBornHistory/>} />
   <Route path="PregnancyHistory" element={<PregnancyHistory/>} />

   <Route path="/Home" elemet={<Home/>}  /> 
   <Route path="/AboutUs" element={<AboutUs/>} />
   <Route path="/ContactUs" element={<ContactUs/>} />
   <Route path="/Report" element={<Report/>}/>

   <Route path="/Footer" element={<Footer/>} />
   
    </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
