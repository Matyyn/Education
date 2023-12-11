import React, { useState } from "react";
import Arrow from "../assets/icons/Check-arrow.svg";

export default function SelectInput({ options }) {
  const [selected, setselected] = useState(options[0]);
  const [showDropdown, setshowDropdown] = useState(false);

  return (
    <div>
      <div
        className="flex gap-7  cursor-pointer items-center "
        onClick={() => setshowDropdown(!showDropdown)}
      >
        <p>{selected.name}</p>
        <img src={Arrow} />
        {/* <p className="rotate-[180deg]">^</p> */}
      </div>
      {showDropdown && (
        <div className="absolute bg-white rounded-lg z-50">
          <p className="border-b pl-2 pr-14 py-2 capitalize cursor-default">
            {options[0].name}
          </p>
          {options.map((option, index) => {
            if (index != 0)
              return (
                <p
                  onClick={() => {
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
