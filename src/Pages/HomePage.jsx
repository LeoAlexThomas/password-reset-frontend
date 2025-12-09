import { useState } from "react";
import UserLogin from "../Components/UserLogin";
import UserRegister from "../Components/UserRegister";

const HomePage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleShowLogin = (val) => {
    setShowLoginForm(val);
  };

  if (showLoginForm) {
    return <UserLogin onRegisterPressed={() => handleShowLogin(false)} />;
  }

  return <UserRegister onLoginPressed={() => handleShowLogin(true)} />;
};

export default HomePage;
