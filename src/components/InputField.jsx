import React from "react";
import SearchIcon from "../assets/icons/Search.svg";

export default function InputField({
  placeholder,
  value,
  changeHandler,
  hideIcon,
  className,
  disabled,
  type,
  inputHandler,
  clickHandler,
}) {
  return (
    <div
      onClick={clickHandler ? clickHandler : null}
      className={`${
        className ? className : ""
      } bg-light shadow-input rounded-md flex gap-3 p-2 w-full overflow-hidden mb-5 md:mb-0`}
    >
      {!hideIcon && <img src={SearchIcon} className="w-4" />}
      <input
        onInput={inputHandler}
        disabled={disabled}
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        className="bg-transparent outline-none min-w-0 w-full"
      />
    </div>
  );
}
