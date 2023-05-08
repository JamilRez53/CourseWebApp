import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserAuth from './components/user/UserAuth';
import Signup from './components/user/SignUp';
import UserDetails from './components/user/UserDetails';
import AdminAuth from './components/admin/authComponents/AdminAuth';
import AdminSignup from "./components/admin/authComponents/AdminSignup";
import Admin from "./pages/Admin/Admin";
import Questions from './pages/Admin/Questions';
import Topics from './pages/Admin/Topics';
import Tutorials from './pages/Admin/Tutorials';
import UpdateTopics from './components/admin/TopicsComponent/UpdateTopics';
import ViewTopics from './components/admin/TopicsComponent/ViewTopics';
function App() {
  const islogged = window.localStorage.getItem("loggedIn");
  const isAdminLogged = window.localStorage.getItem("adminloggedIn");
  return (
    
    <Router>
    <div className="App">
      <Routes>
     <Route path="/" element={islogged==="true" ? <UserDetails/>:<UserAuth/>}/>
     <Route path="/sign-up" element={<Signup />} />
     <Route path="/UserDetails" element={<UserDetails />} />
     <Route path="/admin" element={isAdminLogged==="true" ? <Admin/>:<AdminAuth/>}/>
     <Route path="/admin-signup" element={<AdminSignup/>}/>
     <Route path="/topics" element={<Topics/>}/>
     <Route path="/Questions" element={<Questions/>}/>
     <Route path="/Tutorials" element={<Tutorials/>}/>
     <Route path="/editTopics/:id" element={<UpdateTopics/>}/>
     <Route path="/viewTopics/:id" element={<ViewTopics/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
