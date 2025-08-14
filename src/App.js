import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import ForgotPassword from "./ForgotPassword";
import LoginSuccess from "./LoginSuccess";

function App() {
  return (
    <Routes>
      <Route path="/Project-Jeevak/" element={<Auth />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/success" element={<LoginSuccess />} />
    </Routes>
  );
}

export default App;
