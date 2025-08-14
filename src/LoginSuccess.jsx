
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    navigate("/new-pt/"); 
  };

  return (
    <div className="wrapper">
      <h1>Login Successful </h1>
      <p>Welcome! You are now logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginSuccess;
