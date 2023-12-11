import React, { useState } from "react";
import SunIcon from "../../../assets/icons/sun.svg";

export default function MatchesHistory({
  upcomingMatches,
  setupcomingMatches,
}) {
  return (
    <div>
      <p className="text-lg font-bold">Upcoming Matches</p>
      <div className="flex gap-[2%] flex-wrap">
        {upcomingMatches.map((hist) => (
          <div className="w-[90%] md:w-[49%] lg:w-[32%] mt-3 rounded-lg p-4 py-5 cursor-pointer flex items-center text-white bg-custom-blue-2 justify-center gap-4 relative">
            <div className="absolute right-3 top-5 flex items-center gap-2">
              <p className="text-sm font-extrabold">{hist.weather}</p>
              <img src={SunIcon} />
            </div>
            <p className="text-md font-bold mt-3">{hist.team}</p>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm">{hist.type}</p>
              <p className="text-gray-400 text-sm">{hist.date}</p>
              <p className="text-gray-400 text-sm">{hist.time}</p>
            </div>
            <p className="text-md font-bold mt-3">{hist.opponent}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
