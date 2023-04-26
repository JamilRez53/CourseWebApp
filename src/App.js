import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserAuth from './components/UserAuth';
import Signup from './components/SignUp';
import UserDetails from './components/UserDetails';
import AdminAuth from './components/AdminAuth';
import AdminSignup from "./components/AdminSignup";
import Admin from "./components/Admin";
import Questions from './components/Questions';
import Topics from './components/Topics';
function App() {
  const islogged = window.localStorage.getItem("loggedIn");
  const isAdminLogged = window.localStorage.getItem("loggedIn");
  return (
    
    <Router>
    <div className="App">
      <Routes>
     <Route path="/" element={islogged==="true" ? <UserDetails/>:<UserAuth/>}/>
     <Route path="/sign-up" element={<Signup />} />
     <Route path="/UserDetails" element={<UserDetails />} />
     <Route path="/admin" element={isAdminLogged==="true" ? <Admin/>:<AdminAuth/>}/>
     <Route path="/adminDetails" element={<Admin/>}/>
     <Route path="/admin-signup" element={<AdminSignup/>}/>
     <Route path="/adminDetails/topics" element={<Topics/>}/>
     <Route path="/adminDetails/Questions" element={<Questions/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
