import React, { useState } from "react";
import LiveMeetingForm from "./LiveMeetingForm";
import FacetoFaceAccordian from "./FacetoFaceForm";

function App() {
  const [activeTab, setActiveTab] = useState("Live Meeting");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex w-full">
        <div className="p-4 flex flex-row items-start">
          <button
            className={`block text-left px-4 py-2 border-b ${
              activeTab === "Live Meeting" ? "bg-teal-500" : ""
            }`}
            onClick={() => handleTabChange("Live Meeting")}
          >
            Live Meeting
          </button>
          <button
            className={`block text-left px-4 py-2 ${
              activeTab === "Face to Face" ? "bg-teal-500" : ""
            }`}
            onClick={() => handleTabChange("Face to Face")}
          >
            Face to Face
          </button>
        </div>
      </div>

      <div className="w-full">
        {activeTab === "Live Meeting" ? (
          <LiveMeetingForm />
        ) : (
          <FacetoFaceAccordian />
        )}
      </div>
    </>
  );
}

export default App;
