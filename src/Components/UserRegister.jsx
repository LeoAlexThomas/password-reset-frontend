import React from "react";
import UserRegisterForm from "./UserRegisterForm";

const UserRegister = ({ onLoginPressed }) => {
  return (
    <div className="flex gap-4 justify-between items-stretch h-screen bg-back">
      <div className="w-full  hidden sm:block">
        <img
          src="/images/signup.webp"
          alt="signup"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="p-4 w-full self-center content-center">
        <UserRegisterForm onLoginPressed={onLoginPressed} />
      </div>
    </div>
  );
};

export default UserRegister;
