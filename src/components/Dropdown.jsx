import React, { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const Dropdown = ({
  setshowDropdown,
  defaultValue,
  options,
  setvalue,
  className,
  optClassName,
}) => {
  const ref = useRef(null);

  useClickOutside(ref, () => setshowDropdown(false));

  return (
    <div
      ref={ref}
      className={`absolute bg-white rounded-lg z-50 w-full ${
        className ? className : ""
      }`}
      style={{ boxShadow: "0px 4px 10px 0px #0000001A" }}
    >
      {defaultValue && (
        <p className="text-sm border-b pl-2 pr-14 py-2 capitalize cursor-default">
          {defaultValue.name}
        </p>
      )}
      <div className="flex flex-col p-2">
        {options.map((option, index) => {
          return (
            <p
              onClick={() => {
                setvalue(option);
                setshowDropdown(false);
              }}
              className={`text-sm p-2 rounded-lg capitalize cursor-pointer hover:text-custom-green-1 hover:bg-custom-light-2 transition-all hover:bg-green-2 hover:text-green ${
                optClassName ? optClassName : ""
              }`}
            >
              {option.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
