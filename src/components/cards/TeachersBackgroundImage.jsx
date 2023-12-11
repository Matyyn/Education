import React from "react";
import Button from "../../components/button/ModalButton";
import Image from "../../assets/images/admin/Courses.png";
function BackgroundImage({ Course }) {
  return (
    <>
      <div
        className="h-40 bg-cover bg-center bg-no-repeat rounded-lg p-4"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className="flex items-center">
          <h1 className="text-4xl text-white font-bold mr-4">
            {Course.courseName}
          </h1>
          <div className="flex flex-row">
            <text className="font-semibold text-4xl mr-2 text-[#fff]">
              254.50
            </text>
            <text className="font-semibold text-2xl mr-2 mt-2 text-[#A1A5B7]">
              KWD
            </text>
          </div>
          <Button buttonText="Upload File" className="border-red-500" />
          <Button buttonText="Live Meeting" className="border-green-500" />
          <Button buttonText="Face to Face" className="border-yellow-500" />
        </div>
        <div className="flex flex-row gap-4 mt-6">
          <p className="text-white w-1/2 text-sm ">{Course.description}</p>
          <div className="flex flex-col ">
            <text className="text-center text-sm font-bold text-white ">
              No. of Students
            </text>
            <text className="text-center  text-white ">
              {Course.numberOfStudents}
            </text>
          </div>
          <div className="flex flex-col ">
            <text className="text-center text-sm font-bold text-white ">
              Videos
            </text>
            <text className="text-center text-white ">{Course.videos}</text>
          </div>
          <div className="flex flex-col ">
            <text className="text-center text-sm font-bold text-white ">
              PDF Files
            </text>
            <text className="text-white text-center">{Course.pdfFiles}</text>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackgroundImage;
