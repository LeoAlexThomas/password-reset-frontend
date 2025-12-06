import { MdErrorOutline } from "react-icons/md";

const ErrorMessage = ({ message, showFullScreen }) => {
  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center  ${
        showFullScreen ? "h-screen top-1/2" : ""
      }`}
    >
      <MdErrorOutline className="text-error w-10 h-10" />
      <p className="font-SubTitle text-base font-bold text-center text-error">
        {message ?? "Something went wrong"}
      </p>
    </div>
  );
};

export default ErrorMessage;
