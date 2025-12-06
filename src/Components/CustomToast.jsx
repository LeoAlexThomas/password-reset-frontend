import { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

const CustomToast = ({ toastId, message, isWarningToast, onToastClose }) => {
  useEffect(() => {
    const toast = document.getElementById(toastId);
    toast.classList.add(
      isWarningToast ? "bg-amber-200" : "bg-green-200",
      "visible",
      "transform",
      isWarningToast ? "-translate-y-10" : "translate-y-6",
      "transition",
      "duration-300",
      "ease-in-out"
    );

    setTimeout(() => {
      toast.classList.remove(
        "visible",
        "transform",
        "translate-y-full",
        "transition",
        "duration-300",
        "ease-in-out"
      );
      toast.classList.add("invisible");
      onToastClose();
    }, 3000);
  }, []);

  return (
    <div
      className="flex gap-3 items-center fixed bottom-10 left-4 sm:left-2/4 xl:left-2/3 right-4 sm:right-10 shadow-[0px_0px_10px_1px_#00000036] p-4 rounded-xl sm:w-full max-w-none sm:max-w-96"
      id={toastId}
    >
      {isWarningToast ? (
        <IoWarningOutline className="w-6 h-6" />
      ) : (
        <FaRegCheckCircle className="w-6 h-6" />
      )}
      <p className="text-base font-medium">{message}</p>
    </div>
  );
};

export default CustomToast;
