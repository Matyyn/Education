import React from "react";
import VideoCall from "../../assets/icons/VideoCall.svg";
import PDF from "../../assets/icons/PDF.svg";
import StudentsMeetings from "../StudentsMeetings";
const StudentDetails = () => {
  return (
    <div className="flex flex-col max-h-120 w-full">
      <h1 className="text-2xl font-bold text-left p-4">UI/UX</h1>
      <div className="flex flex-row flex-wrap justify-between p-2 ">
        <div className="w-[210px] h-40 bg-[#005B59] rounded-lg p-4 flex flex-col">
          <div className="bg-[#F8F8F8] rounded-full w-8 h-8 flex items-center justify-center">
            <text className="text-sm text-[#337C7A] font-normal">KWD</text>
          </div>
          <text className="text-sm text-[#fff] font-normal mt-2">
            234.55 KWD
          </text>
          <text className="text-sm text-[#fff] font-normal mt-2">
            Total Subscribed Amount
          </text>
        </div>
        <div className="w-[210px] h-40 bg-[#434343] rounded-lg p-4 flex flex-col">
          <div className="bg-[#F8F8F8] rounded-full w-8 h-8 flex items-center  justify-center">
            <img src={VideoCall} className="w-6 h-6" />
          </div>
          <text className="text-sm text-[#fff] font-normal mt-2">12</text>
          <text className="text-sm text-[#fff] font-normal mt-2">
            Video Materials
          </text>
        </div>
        <div className="w-[210px] h-40 bg-[#BFA181] rounded-lg p-4 flex flex-col">
          <div className="bg-[#F8F8F8] rounded-full w-8 h-8 flex items-center justify-center">
            <img src={PDF} className="w-6 h-6" />
          </div>
          <text className="text-sm text-[#fff] font-normal mt-2">9</text>
          <text className="text-sm text-[#fff] font-normal mt-2">
            PDF Materials
          </text>
        </div>
      </div>
      <StudentsMeetings />
    </div>
  );
};

export default StudentDetails;
