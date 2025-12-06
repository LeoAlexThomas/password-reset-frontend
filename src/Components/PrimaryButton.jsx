import React from "react";

const PrimaryButton = ({
  buttonLabel,
  onClick,
  type,
  fullWidth,
  isDisabled,
}) => {
  return (
    <button
      className={`bg-primary text-white text-base font-medium rounded-md w-full max-w-full ${
        fullWidth ? "" : "sm:max-w-[200px]"
      } p-2 ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonLabel}
    </button>
  );
};

export default PrimaryButton;
