import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InputField from "../Components/FormComponents/InputField";
import PrimaryButton from "../Components/PrimaryButton";
import useApi from "../Hooks/makeApiCalls";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");

  const { isLoading, makeApiCall } = useApi();

  useEffect(() => {
    const mail = searchParams.get("email");
    if (!mail) {
      return;
    }
    setEmail(mail);
  }, [searchParams]);

  const handleGetResetLink = async (e) => {
    e.preventDefault();
    const response = await makeApiCall({
      method: "POST",
      url: "/auth/getResetLink",
      data: { email },
    });
    // Check for the response is null, If null there is error it'll be handle in 'makeApiCall' method itself
    if (!response) {
      return;
    }
    // Showing Success toast message
    toast.success(response.message);
  };

  return (
    <div className="h-screen bg-back p-4 ">
      <form
        className="w-full flex flex-col gap-4 sm:gap-6 items-center justify-center  max-w-[500px] p-4 mx-auto"
        onSubmit={handleGetResetLink}
      >
        <div>
          <h4 className="font-Title text-lg sm:text-3xl font-bold text-center">
            FORGOT PASSWORD
          </h4>
          <p className="text-sm sm:text-base text-center mt-2">
            Please enter mail id to send reset password link
          </p>
        </div>
        <InputField
          isRequired={true}
          name="email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={setEmail}
          title="Email"
        />

        <PrimaryButton
          buttonLabel="GET RESET LINK"
          type="submit"
          fullWidth={true}
          isDisabled={isLoading}
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
