import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/page/Registration";
import Dashboard from "./components/page/InvestorDashboard";
import Login from "./components/page/Login";
import CafDashboard from "./components/page/CafDashboard";
import TerritoryDashboard from "./components/page/TerritoryDashboard";


export default function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup-investor' element={<RegistrationForm title="Investor" next="/" route="/signin-investor"/>} />
          <Route path='/signup-caf' element={<RegistrationForm title="CAF Admin" next="/caf-dashboard" route="/signin-caf"/>} />
          <Route path='/signup-territory' element={<RegistrationForm title="Territory Admin" next="/territory-dashboard" route="/signin-territory"/>} />
          <Route path='/signin-investor' element={<Login title="Investor" next="/" route="/signup-investor"/>} />
          <Route path='/signin-caf' element={<Login title="CAF Admin" next="/caf-dashboard" route="/signup-caf"/>} />
          <Route path='/signin-territory' element={<Login title="Territory Admin" next="/territory-dashboard" route="/signup-territory"/>} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/caf-dashboard' element={<CafDashboard />} />
          <Route path='/territory-dashboard' element={<TerritoryDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}