import { HiOutlineEmojiSad } from "react-icons/hi";

const EmptyMessage = ({ message, showFullScreen }) => {
  return (
    <div
      className={`flex justify-center p-4 items-center flex-col h-full ${
        showFullScreen ? "h-screen top-1/2 left-1/2 -translate-y-1/2 my-40" : ""
      }`}
    >
      <HiOutlineEmojiSad className="w-8 h-8 text-error " />
      <p className="font-SubTitle font-medium text-lg text-center text-black">
        {message}
      </p>
    </div>
  );
};

export default EmptyMessage;
