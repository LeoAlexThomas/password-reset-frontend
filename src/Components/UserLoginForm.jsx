import React, { useState } from "react";
import InputField from "./FormComponents/InputField";
import FormTitle from "./FormTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import useApi from "../Hooks/makeApiCalls";
import { tokenName } from "../Utils/common";
import { toast } from "react-toastify";

const UserLoginForm = ({ onRegisterPressed }) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { makeApiCall } = useApi();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    // To prevent page to reload
    e.preventDefault();
    const response = await makeApiCall({
      method: "POST",
      url: "/auth/login",
      data: {
        email: userEmail,
        password,
      },
    });
    if (!response) {
      return;
    }
    const token = response.data?.token;
    if (!token) {
      toast.error("Token not found");
      return;
    }
    localStorage.setItem(tokenName, token);
    toast.success("Successfully logged in");
  };

  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={handleLogin}>
      <FormTitle title="LOGIN" />
      <InputField
        isRequired={true}
        name="email"
        placeholder="Enter your email"
        type="email"
        value={userEmail}
        onChange={setUserEmail}
        title="Email"
      />
      <div className="w-full mx-auto">
        <InputField
          isRequired={true}
          name="password"
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={setPassword}
          title="Password"
          rightIcon={
            showPassword ? (
              <FaEyeSlash className="text-accent h-6 w-6" />
            ) : (
              <FaEye className="text-accent h-6 w-6" />
            )
          }
          onRightIconClicked={handleShowPassword}
        />
        <div className="w-full max-w-full sm:max-w-[500px] mx-auto mt-2 ">
          <p className="text-end font-bold text-primary">
            <Link
              to={
                isEmpty(userEmail)
                  ? "/forgotPassword"
                  : `/forgotPassword?email=${userEmail}`
              }
            >
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
      <PrimaryButton buttonLabel="LOGIN" type="submit" />
      <p className="text-sm font-medium text-center object-cover">
        Don't have an account,{" "}
        <span
          onClick={onRegisterPressed}
          className="cursor-pointer text-primary font-bold"
        >
          {" "}
          Register
        </span>
      </p>
    </form>
  );
};

export default UserLoginForm;
