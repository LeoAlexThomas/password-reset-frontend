import { isNil } from "lodash";
import React from "react";

const InputField = ({
  id,
  type,
  title,
  isRequired,
  name,
  value,
  onChange,
  placeholder,
  rightIcon,
  onRightIconClicked,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full  max-w-full sm:max-w-[500px] mx-auto">
      {!isNil(title) && (
        <p className="font-SubTitle text-base sm:text-lg font-bold text-black">
          {title} {isRequired ? <span className="text-red-400">*</span> : ""}
        </p>
      )}
      <div className="flex gap-2 border rounded-md bg-white items-stretch">
        <input
          id={id}
          type={type}
          name={name}
          required={isRequired}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`p-4 pr-0 w-full font-body text-base font-medium outline-none bg-white rounded-md `}
        />
        {!isNil(rightIcon) && (
          <div
            className="bg-secondary p-4 self-center"
            onClick={onRightIconClicked}
          >
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
