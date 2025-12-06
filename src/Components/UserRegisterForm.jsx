import React, { useState } from "react";
import InputField from "./FormComponents/InputField";
import FormTitle from "./FormTitle";
import PrimaryButton from "./PrimaryButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useApi from "../Hooks/makeApiCalls";
import { toast } from "react-toastify";

const UserRegisterForm = ({ onLoginPressed }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const { makeApiCall } = useApi();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await makeApiCall({
      method: "POST",
      url: "/auth/register",
      data: {
        name: userName,
        email: userEmail,
        password,
      },
    });
    if (!response) {
      return;
    }
    toast.success(response.message ?? "Successfully done");
    // Resetting field values after the api call success
    setUserName("");
    setUserEmail("");
    setPassword("");
  };

  return (
    <form
      className="flex flex-col gap-4 items-center"
      onSubmit={handleRegister}
    >
      <FormTitle title="REGISTER" />
      <InputField
        isRequired={true}
        name="name"
        placeholder="Enter your name"
        type="text"
        value={userName}
        onChange={setUserName}
        title="Name"
      />
      <InputField
        isRequired={true}
        name="email"
        placeholder="Enter your email"
        type="email"
        value={userEmail}
        onChange={setUserEmail}
        title="Email"
      />
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
      <PrimaryButton buttonLabel="REGISTER" type="submit" />
      <p className="text-sm font-medium text-center">
        Already have an account,{" "}
        <span
          onClick={onLoginPressed}
          className="text-primary font-bold cursor-pointer"
        >
          Login
        </span>
      </p>
    </form>
  );
};

export default UserRegisterForm;
