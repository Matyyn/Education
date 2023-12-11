import React from "react";
import Button from "../../components/button/SmallModalButton";
import Image from "../../assets/images/admin/Courses.png";
function BackgroundImage({ Course }) {
  return (
    <>
      <div
        className="h-40 bg-cover w-full bg-center bg-no-repeat rounded-lg p-4"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className="flex items-center">
          <h1 className="text-4xl text-white font-bold mr-2">
            {Course.courseName}
          </h1>
          <img
            className="object-contain w-12 h-12 rounded-full mr-2"
            src={Course.image}
          />
          <Button buttonText="Assign Course" color="teal-600" />
        </div>
        <div className="flex flex-row gap-4">
          <p className="text-white w-1/2 text-sm mt-2">{Course.description}</p>
          <div className="flex flex-col mt-2">
            <text className="text-center text-sm font-bold text-white ">
              Courses Taught
            </text>
            <text className="text-center  text-white ">
              {Course.teachingCountriesCount}
            </text>
          </div>
          <div className="flex flex-col mt-2">
            <text className="text-center text-sm font-bold text-white ">
              Teachers
            </text>
            <text className="text-center text-white ">
              {Course.numberOfTeachers}
            </text>
          </div>
          <div className="flex flex-col mt-2">
            <text className="text-center text-sm font-bold text-white ">
              Students
            </text>
            <text className="text-white text-center">
              {Course.numberOfStudents}
            </text>
          </div>
        </div>
      </div>
      <text className="font-semibold my-2 text-lg">Course Picture</text>
      <div
        className="bg-green h-60 w-1/3 rounded-md bg-cover bg-center bg-no-repeat rounded-lg p-4"
        style={{
          backgroundImage:
            'url("https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2FCourses.png?alt=media&token=cf2801e6-fce1-4357-b918-d4a78306bbd8https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2FCourses.png?alt=media&token=cf2801e6-fce1-4357-b918-d4a78306bbd8")',
        }}
      ></div>
    </>
  );
}

export default BackgroundImage;
