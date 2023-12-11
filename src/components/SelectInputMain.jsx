/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from "react";
import Arrow from "../assets/icons/Check-arrow.svg";
import useClickOutside from "../hooks/useClickOutside";

export default function SelectInpuMain({
  options,
  defaultValue,
  className,
  setvalue,
}) {
  const [selected, setselected] = useState(defaultValue);
  const [showDropdown, setshowDropdown] = useState(false);

  const ref = useRef(null);

  useClickOutside(ref, () => setshowDropdown(false));

  return (
    <div className="relative whitespace-nowrap">
      <div
        className={`flex justify-between cursor-pointer items-center bg-custom-light-2 p-2 rounded-lg border gap-3 ${
          className ? className : ""
        }`}
        onClick={() => setshowDropdown(!showDropdown)}
      >
        <p>{selected.name}</p>
        <img src={Arrow} />
      </div>
      {showDropdown && (
        <div
          ref={ref}
          className="absolute bg-white rounded-lg z-50 w-full"
          style={{ boxShadow: "0px 4px 10px 0px #0000001A" }}
        >
          <p className="border-b pl-2 pr-14 py-2 capitalize cursor-default">
            {defaultValue.name}
          </p>

          {options.map((option, index) => {
            return (
              <p
                onClick={() => {
                  setvalue(option);
                  setselected(option);
                  setshowDropdown(false);
                }}
                className="pl-2 pr-14 py-2 capitalize cursor-pointer hover:text-custom-green-1 hover:bg-custom-light-2 transition-all"
              >
                {option.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
