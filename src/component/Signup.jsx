import React, { useState } from "react";
import { userSignup, userLogin } from "./Api/Api";
import Textbox from "./common/Textbox";
import {useCookies} from 'react-cookie'
import backimg from "../asstes/images/backimg.png";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [isSignup, setIsSignup] = useState(false);
  const [cookie,setCookie]=useCookies(["token"])
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(user);
  const navigate = useNavigate();

  const footertext = {
    login: " Dont have an account",
    signup: " Already have an account",
  };

  const handlChange = (event) => {
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleClick = async () => {
    const res = await userSignup(user);

    console.log("res", res.data);
    if (res.data.success) {
      alert(res.data.message);
      setIsSignup(true);
    }
  };

  const handleClicktwo = async () => {
    const res = await userLogin(user);
    console.log("ressss", res.data);
    JSON.stringify(res.data.token);
    window.localStorage.setItem("token", res.data.token);
    alert(res.data.token)
    setCookie(res.data.token)
    if (res.data.success) {
      alert(res.data.message);
    }
    navigate("/")
  };

  return (
    <div className="signupwraper">
      <div className="back-ime">
        <img src={backimg} width="500" height="600" />
      </div>
      <div className="signup w-25 shadow mx-auto mt-5 p-4 text-center" style={{borderRadius:"20px"}}>
        <h4>{isSignup ? "Login Here" : "Signup Here"}</h4>

        {!isSignup && (
          <Textbox
            name="name"
            placeholder="Username"
            handlChange={handlChange}
          />
        )}

        <Textbox placeholder=" Email" name="email" handlChange={handlChange} />
        <Textbox
          placeholder=" Password"
          name="password"
          handlChange={handlChange}
        />
        {isSignup ? (
          <button className="btn btn-primary" onClick={handleClicktwo}>
            Login
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleClick}>
            Signup
          </button>
        )}
        <p>
          {isSignup ? footertext.login : footertext.signup}{" "}
          <span onClick={() => setIsSignup(!isSignup)} className="text-primary">
            {isSignup ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
