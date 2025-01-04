import React from "react";
import LoginImg from "../../assets/Login/LoginImg.gif";
import LoginDetails from "./LoginDetails";

const Login = () => {
  return (
    <div className="flex items-center">
      {/* Left Section: Login Image */}
      <div className="w-[70%]">
        <img src={LoginImg} alt="Login Illustration" className="w-full" />
      </div>

      {/* Right Section: Login Form */}
      <div className="w-[30%]">
        <LoginDetails />
      </div>
    </div>
  );
};

export default Login;
