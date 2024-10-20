import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/page/Registration";
import Dashboard from "./components/page/Dashboard";
import Navbar from "./components/page/AuthNavbar";
import Login from "./components/page/Login";


export default function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<RegistrationForm />} />
          <Route path='/signin-investor' element={<Login title="Investor" />} />
          <Route path='/signin-caf' element={<Login title="CAF Admin" />} />
          <Route path='/signin-territory' element={<Login title="Territory" />} />
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}