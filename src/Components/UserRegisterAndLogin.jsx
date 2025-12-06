import React, { useState } from "react";
import UserRegister from "./UserRegister";
import UserLogin from "./UserLogin";

const UserRegisterAndLogin = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleShowLogin = (val) => {
    setShowLoginForm(val);
  };

  if (showLoginForm) {
    return <UserLogin onRegisterPressed={() => handleShowLogin(false)} />;
  }

  return <UserRegister onLoginPressed={() => handleShowLogin(true)} />;
};

export default UserRegisterAndLogin;
