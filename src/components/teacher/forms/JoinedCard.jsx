import React, { useState } from "react";
import checked from "../../../assets/icons/Checked.svg";
import Button from "../../button/Button";

function JoinedCard() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500 mt-15 ">
        <img src={checked} alt="" />
      </div>
      <div className="mt-4 mb-4 flex flex-col justify-center items-center text-center">
        <p className="text-black">
          Your Request to Join "Physics" has been sent. Please wait for Admin's
          Approval.
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
  ) : null;
}

export default JoinedCard;
