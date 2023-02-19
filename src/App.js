import { Navigate, Route, Routes } from "react-router-dom"; 
import "./App.css";                           
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./component/Signup";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Details from "./component/Details";
import Session from "./component/Session";
import Admin from "./component/Admin";
import Setting from "./component/common/Sidbar/Setting";
import Dasboard from "./component/common/Sidbar/Dasboard";
import Course from "./component/common/Sidbar/Course";
import AddCourse from "./component/common/Sidbar/AddCourse"; 
import Protected from "./component/protectedRout/Protected";
import axios from 'axios';
axios.defaults.withCredentials = true;                                                     

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Protected component={Home} />} />

        <Route path="/Details/:title" element={<Details />} />
        <Route path="/Details/:title/:slug" element={<Session />} />
        <Route path="/Signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Admin />}>
          <Route 
            exact
            path="/dashboard"
            element={<Navigate replace to="admin" />}
          />
          <Route exact path="admin" element={<Dasboard />} />
          <Route path="/dashboard/course" element={<Course />} />
          <Route path="/dashboard/setting" element={<Setting />} />
          <Route path="/dashboard/addcourse" element={<AddCourse />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
