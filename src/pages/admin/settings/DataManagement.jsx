import React, { useState } from "react";
import StudentFields from "../../../components/admin/form/StudentFields";

const DataManagement = () => {
  const [showStudentFields, setShowStudentFields] = useState(false);

  const handleCreateFieldsClick = () => {
    setShowStudentFields(true);
  };

  return (
    <div className="bg-[#FFF] w-full h-screen-1/2 p-4 rounded-xl relative">
      <h1 className="text-md font-semibold mb-4">CUSTOM INPUT FIELDS</h1>
      {showStudentFields ? (
        <StudentFields />
      ) : (
        <div className="flex justify-center items-center">
          <button
            className="text-black font-semibold py-4 px-6 w-1/2 h-60 rounded-md border-dotted border-4 border-blue-500"
            onClick={handleCreateFieldsClick}
          >
            Create Input Fields for Students
          </button>
        </div>
      )}
    </div>
  );
};

export default DataManagement;
