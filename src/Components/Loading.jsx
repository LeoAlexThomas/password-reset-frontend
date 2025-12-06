import React from "react";

const Loading = ({ showFullScreen }) => {
  return (
    <div
      className={`flex flex-col gap-6 justify-center items-center ${
        showFullScreen ? "h-screen top-1/2" : ""
      }`}
    >
      <i className="fa-solid fa-spinner fa-spin-pulse text-primary fa-2xl"></i>
      <p className="text-lg font-medium text-center text-black">Loading</p>
    </div>
  );
};

export default Loading;
