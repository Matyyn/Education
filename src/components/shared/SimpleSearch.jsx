import React from "react";
import search from "../../assets/icons/Search.svg";
const Search = ({ text }) => {
  return (
    <div className="flex gap-4">
      <div className="w-[293px] h-10 px-4 ml-4 py-2 rounded-lg shadow-md justify-start items-center gap-3 inline-flex ">
        <img src={search} width="25px" />
        <div className="w-auto h-auto justify-center items-center flex">
          <input
            className="w-full h-auto relative text-left text-slate-400 text-sm font-normal font-['Inter'] leading-normal outline-none"
            placeholder={text}
            style={{ background: "transparent" }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
