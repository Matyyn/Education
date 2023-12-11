import React, { useState } from "react";
import filter from "../../assets/icons/Filter.svg";
import search from "../../assets/icons/Search.svg";

const Search = ({ text }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex gap-4">
      <div className="w-[293px] h-10 px-4 ml-4 py-2 rounded-lg shadow-md justify-start items-center gap-3 inline-flex ">
        <img src={search} width="25px" />
        <div className="w-auto h-auto justify-center items-center flex">
          <input
            className="w-full h-auto relative text-left text-slate-400 text-sm font-normal font-['Inter'] leading-normal outline-none"
            placeholder={text}
          ></input>
        </div>
      </div>
      <div
        className="w-12 h-10 p-2 bg-white rounded-lg shadow-md flex justify-center cursor-pointer"
        onClick={() => setShowFilter(!showFilter)}
      >
        <img src={filter} alt="Filter" />
      </div>
      {showFilter && (
        <div className="filter-bar mt-2 gap-4 flex">
          <div className="flex items-center gap-2">
            <label htmlFor="country" className="text-gray-400">
              {" "}
              Country:
            </label>
            <select name="country">
              <option value="all">Show All</option>
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="status" className="text-gray-400">
              Status:
            </label>
            <select name="status">
              <option value="all">Show All</option>
              <option value="status1">Status 1</option>
              <option value="status2">Status 2</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
