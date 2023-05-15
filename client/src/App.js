import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserAuth from './components/user/userAuthComponents/UserAuth';
import Signup from './components/user/userAuthComponents/SignUp';
import UserDetails from './components/user/UserDetails';
import AdminAuth from './components/admin/authComponents/AdminAuth';
import AdminSignup from "./components/admin/authComponents/AdminSignup";
import Admin from "./pages/Admin/Admin";
import Questions from './pages/Admin/Questions';
import Topics from './pages/Admin/Topics';
import Tutorials from './pages/Admin/Tutorials';
import UpdateTopics from './components/admin/TopicsComponent/UpdateTopics';
import ViewTopics from './components/admin/TopicsComponent/ViewTopics';
import UpdateQuestions from './components/admin/QuestionComponents/UpdateQuestions'
import UpdateTutorials from './components/admin/TutorialComponent/UpdateTutorials';
import AddTopics from './components/admin/TopicsComponent/AddTopics';
import ViewTutorials from './components/admin/TutorialComponent/ViewTutorials';
import ViewDetails from './components/user/userTopicsComponents/ViewDetails';
import User from './pages/User/User';
function App() {
  const islogged = window.localStorage.getItem("loggedIn");
  const isAdminLogged = window.localStorage.getItem("adminloggedIn");
  return (
    
    <Router>
    <div className="App">
      <Routes>
     <Route path="/" element={islogged==="true" ? <UserDetails/>:<UserAuth/>}/>
     <Route path="/sign-up" element={<Signup />} />
     <Route path="/User" element={<User/>} />
     <Route path="/admin" element={isAdminLogged==="true" ? <Admin/>:<AdminAuth/>}/>
     <Route path="/admin-signup" element={<AdminSignup/>}/>
     <Route path="/topics" element={<Topics/>}/>
     <Route path="/Questions" element={<Questions/>}/>
     <Route path="/Tutorials" element={<Tutorials/>}/>
     <Route path="/addTopics" element={<AddTopics/>}/>
     <Route path="/editTopics/:id" element={<UpdateTopics/>}/>
     <Route path="/viewTopics/:id" element={<ViewTopics/>}/>
     <Route path="/editQuestions/:id" element={<UpdateQuestions/>}/>
     <Route path="/editTutorials/:id" element={<UpdateTutorials/>}/>
     <Route path="/viewTutorials/:id" element={<ViewTutorials/>}/>
     <Route path="/viewDetails/:id" element={<ViewDetails/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
