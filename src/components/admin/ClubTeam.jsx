import React from "react";
import { useNavigate } from "react-router-dom";

export default function ClubTeam({ team }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/clubs/${team._id}`)}
      className="w-[90%] sm:w-[49%] lg:w-[23%] mt-3 rounded-lg p-4 cursor-pointer"
      style={{
        boxShadow: "0px 3.8947367668151855px 9.736842155456543px 0px #00000026",
      }}
    >
      <p className="font-bold text-xl">{team.name}</p>
      <p className="text-sm mb-4">Total {team.playersCount} Players</p>
      <p className="text-sm text-custom-green-1 font-bold">Edit</p>
    </div>
  );
}
