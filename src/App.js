import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "./Home";
import {Register} from "./Register";
import {Login} from "./Login";
import {RegisterEmployer} from "./Register-Employer";
import {EmployerLogin} from "./Employer-Login";
import {EmployeeDashboard} from "./Account/Employee/EmployeeDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Register/>} path='/Register'/>
          <Route element={<Login/>} path='/Login'/>
          <Route element={<RegisterEmployer/>} path='/Register-Employer'/>
          <Route element={<EmployerLogin/>} path='/Employer-Login'/>
          <Route element={<EmployeeDashboard/>} path='/User'/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
