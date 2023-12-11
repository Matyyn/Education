import React, { useState } from "react";
import SunIcon from "../../../assets/icons/sun.svg";
import { useNavigate } from "react-router-dom";
import InputField from "../../InputField";
import filterData from "../../../utils/filterData";

export default function MatchesHistory({ team, matchesHistory, showSearch }) {
  const navigate = useNavigate();

  const [searchValue, setsearchValue] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <p className="text-lg font-bold">Match Results</p>
        {showSearch && (
          <div className="lg:w-[30%]">
            <InputField
              changeHandler={(e) => {
                setsearchValue(e.target.value);
              }}
              value={searchValue}
              placeholder={"Search Match"}
            />
          </div>
        )}
      </div>
      <div className="flex gap-[2%] flex-wrap">
        {filterData({
          data: matchesHistory,
          searchCols: ["opponent"],
          searchValue,
        }).map((hist) => (
          <div
            className="w-[90%] md:w-[49%] lg:w-[32%] mt-3 rounded-lg p-4 cursor-pointer flex items-center text-white bg-custom-blue-2 justify-center gap-4 relative text-center"
            onClick={() => navigate(`/clubs/match/${hist._id}`)}
          >
            <div className="absolute right-3 top-4 flex items-center gap-2">
              <p className="text-sm font-extrabold">{hist.weather}</p>
              <img src={SunIcon} />
            </div>
            <p className="text-md font-bold">{team.name}</p>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm">{hist.type}</p>
              <p className="font-bold text-xl">{hist.finalScore}</p>
              <p className="text-gray-400 text-sm">{hist.date}</p>
            </div>
            <p className="text-md font-bold">{hist.opponent}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
