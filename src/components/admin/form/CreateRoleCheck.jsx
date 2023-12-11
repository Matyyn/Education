import React from "react";
import roleIcon from "../../../assets/icons/Role.svg";
import Button from "../../button/Button";

const CreateRoleCheck = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-white ">
      <div className="bg-[#F7F7F7] rounded-full p-5">
        <img src={roleIcon} alt="Role Icon" className="w-20 h-20" />
      </div>
      <text className="font-semibold my-2">
        Are you sure about to create this Role?
      </text>
      <div className="flex justify-center items-center space-x-4">
        <Button buttonText="Cancel" color="teal-600" />
        <Button buttonText="Confirm" color="teal-600" />
      </div>
    </div>
  );
};

export default CreateRoleCheck;
