import React, { useState } from "react";
import SettingsCard from "../../../components/cards/SettingsCard";
import Pen from "../../../assets/icons/Pen.svg";
import EditComponent from "../../../components/admin/form/EditSettings";

const SystemManagement = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <div className="bg-[#FFF] w-full h-full p-4 rounded-xl relative">
          <h1 className="text-lg font-semibold mb-4">Edit Details</h1>
          <EditComponent />
        </div>
      ) : (
        <div className="bg-[#FFF] w-full h-full p-4 rounded-xl relative">
          <h1 className="text-lg font-semibold mb-4">System Management</h1>
          <SettingsCard />
          <div
            className="absolute top-0 right-0 p-4 flex-row flex p-4 mr-2"
            onClick={handleEditClick}
          >
            <img src={Pen} alt="Pen" className="mr-4 h-5 w-5" />
            <span className="text-[#178582] font-semibold text-md">Edit</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemManagement;
