import React from "react";
import UserLoginForm from "./UserLoginForm";

const UserLogin = ({ onRegisterPressed }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch h-screen bg-back">
      <div className="p-4 w-full h-full content-center self-end sm:self-center">
        <UserLoginForm onRegisterPressed={onRegisterPressed} />
      </div>
      <div className="w-full hidden sm:block ">
        <img
          src="/images/login.webp"
          alt="signup"
          className="w-full h-4/5 sm:h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default UserLogin;
