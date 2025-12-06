import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRegisterAndLogin from "./Components/UserRegisterAndLogin";
import ForgotPassword from "./Pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import ResetPassword from "./Pages/ResetPassword";

const App = () => {
  return (
    <div className="font-body">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserRegisterAndLogin />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
