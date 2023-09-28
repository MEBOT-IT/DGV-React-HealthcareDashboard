
import './App.css'

import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import {  Route, Routes } from "react-router-dom";

import DoctorsPage from './Data/DoctorsPage';
import MedicineDashboard from './components/MedicineDashboard';
import RoomAllotment from './components/RoomAllotment';
import Patients from './components/Patients';
import Login from './Login';


function App() {
  
  

  return(
    
    <div className="App">
      <div className="AppGlass1">
       
        {/* <Router> */}
          
          <Routes>
            <Route path="/" exact element={<Login/>}/> 
            <Route path="/home" exact element={<><Sidebar/>
         <MainDash/> 
         <RightSide/></>}/> 
       
         <Route path="/home/Doctors" exact element={<DoctorsPage/>}/>
        <Route path="/home/Medicines" exact element={<MedicineDashboard/>}/> 
        <Route path="/home/patients" exact element={<Patients/>}/> 
       
        <Route path="/home/Room" exact element={<RoomAllotment/>}/> 
        
         <Route path="/" exact element={<Login/>}/>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/" exact element={<Login/>}/> 

          </Routes>
         
        {/* </Router> */}
       

        {/* <PatientList/> */}
        
      </div>
    </div>
  
 )
}

export default App;

