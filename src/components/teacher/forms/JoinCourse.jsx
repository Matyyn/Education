import React, { useState } from "react";
import FormsInput from "../../shared/FormsInputField";
import Button from "../../button/Button";
import checked from "../../../assets/icons/Checked.svg";

function JoinCourseForm() {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = () => {
    setIsJoined(true);
  };

  const handleClose = () => {
    setIsJoined(false);
  };

  return (
    <div className="max-w-3xl w-full bg-white shadow-lg rounded-md p-4">
      {isJoined ? (
        <>
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-green-500 mt-15 flex items-center justify-center">
              <img src={checked} alt="" />
            </div>
            <div className="mt-4 mb-4 flex flex-col justify-center items-center text-center">
              <p className="text-black">
                Your Request to Join "Physics" has been sent. Please wait for
                Admin's Approval.
              </p>
              <p className="text-black">Thanks</p>
            </div>
            <Button
              buttonText="Okay"
              textColor={"green"}
              borderColor={"teal"}
              borderWidth={1}
              className="mr-2 mt-2"
              type="submit"
              onClick={handleClose}
            />
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="courseName"
                className="block text-sm font-medium text-gray-700"
              >
                Course Name
              </label>
              <FormsInput
                id="courseName"
                name="courseName"
                placeholder="Course Name"
                disabled
              />
            </div>
          </div>
          <div className="flex justify-end mt-4 gap-3">
            <Button
              buttonText="Cancel"
              textColor={"black"}
              borderColor={"#000"}
              borderWidth={1}
              className="mr-2"
            />
            <Button buttonText="Join" color={"teal-600"} onClick={handleJoin} />
          </div>
        </>
      )}
    </div>
  );
}

export default JoinCourseForm;
