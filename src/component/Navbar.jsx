import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "../datasource/navlinks";
import { userLogout } from "./Api/Api";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

function Navbar() {
  const {admin}=useSelector((state)=>state.adminProfile)
  const navigate=useNavigate();
const dispatch=useDispatch()
const handleUserLogout =async ()=>{

  const res = await userLogout();
  console.log('res',res.data.message)
  alert(res?.data?.message)
  window.localStorage.removeItem('token')
  dispatch({
    type:'resetProfile'
  })
  navigate("/Signup")

}


  return (
    <div className="main-containner shadow-sm">
      <span>
        LMS
        <sub style={{ color: " rgb(104, 122, 122)", marginLeft: "10px" }}>
          Learning Management System
        </sub>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-journal-arrow-down"
        viewBox="0 0 16 16"
        style={{marginRight:'18rem'}}
      >
        <path
          fill-rule="evenodd"
          d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"
        />
        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
      </svg>
      {/* <img src="https://getvectorlogo.com/wp-content/uploads/2019/05/lms-lernen-mit-system-vector-logo.png" width="128" height="50"/> */}

      <div className="NavLink">
        {NavLink?.map((link) => {
         

          return(
          <>
          <Link to={link.path}>{link.title}</Link>
          
                    </>
         )
          
        })}
{
  admin?.role=="admin" && <Link to="/Dashboard">Dashboard</Link> 
}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bell-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-power"
          onClick={handleUserLogout}
          viewBox="0 0 16 16"
        >
          <path d="M7.5 1v7h1V1h-1z" />
          <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
