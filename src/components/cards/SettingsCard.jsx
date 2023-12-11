import React, { useState } from "react";

const SettingsCard = () => {
  const [isDisabled, setDisabled] = useState(true);
  return (
    <div className="flex flex-row w-full justify-between bg-white shadow-lg p-6">
      <div className="flex flex-col w-2/5">
        <label className="text-bold text-md" htmlFor="websiteName">
          Website Name
        </label>
        <input
          id="websiteName"
          className={`${
            isDisabled ? "opacity-75 cursor-not-allowed" : ""
          } w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300`}
          placeholder="Website Name"
          disabled={isDisabled}
        />
        <label className="text-bold text-md mt-3" htmlFor="websiteDescription">
          Website Description
        </label>
        <textarea
          id="websiteDescription"
          className={`${
            isDisabled ? "opacity-75 cursor-not-allowed" : ""
          } w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300`}
          placeholder="Hello, this is an education project"
          disabled={isDisabled}
        />
      </div>
      <div className="flex w-2/5 flex-col ">
        <label className="text-black text-lg font-bold">App Logo</label>
        <div className="flex flex-col bg-teal-600 items-center justify-center rounded-md">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2F2.png?alt=media&token=57be424f-357f-4730-8e50-ebdee240a5e8"
            alt="image"
            className="h-40 w-40 p-5"
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
