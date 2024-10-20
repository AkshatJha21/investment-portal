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
          <Route path='/signup' element={<RegistrationForm />} />
          <Route path='/signin-investor' element={<Login title="Investor" route="/"/>} />
          <Route path='/signin-caf' element={<Login title="CAF Admin" route="/caf-dashboard"/>} />
          <Route path='/signin-territory' element={<Login title="Territory" route="/territory-dashboard" />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/caf-dashboard' element={<CafDashboard />} />
          <Route path='/territory-dashboard' element={<TerritoryDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}