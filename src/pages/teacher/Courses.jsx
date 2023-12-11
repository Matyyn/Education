import React from "react";
import InputField from "../../components/InputField";
import GroupAccordian from "../../components/teacher/Accordion";
import RightArrow from "../../assets/icons/RightArrow.svg";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const courses = [
    { name: "Physics", materials: 12 },
    { name: "Math", materials: 10 },
    { name: "Chemistry", materials: 8 },
  ];

  return (
    <div className="bg-white px-4 py-5 mb-5 rounded-xl">
      <div className="mb-10">
        <div className="justify-between flex w-[100%]">
          <div>
            <div className="flex">
              <h1 className="font-bold text-lg">Teaching Courses</h1>
              <div className="ml-1 ">
                <div className="px-2 py-1 text-sm font-normal rounded-full text-center text-emerald-500 bg-emerald-100/60 ">
                  0{courses.length}
                </div>
              </div>
            </div>
            <div className="mb-10">
              <p className="text-gray-500">
                All the courses you are teaching currently
              </p>
            </div>
          </div>
          <div className="w-[35%]">
            <InputField placeholder={"Search Courses"} />
          </div>
        </div>
        <div className="flex flex-wrap justify-around">
          {courses.map((course, index) => (
            <div
              key={index}
              className="w-[30%] h-20 justify-between bg-[#f8f8f8] rounded flex p-3 "
            >
              <div>
                <h1 className="pt-2 pl-2 font-bold">{course.name}</h1>
                <p className="pl-2 text-xs font-semibold text-gray-500">
                  {course.materials} Materials
                </p>
              </div>
              <div
                className="font-bold mr-4 justify-center items-center "
                onClick={() => {
                  navigate("/teacher/details");
                }}
              >
                <p className="mt-4  bg-[#F1F1F2] rounded p-2">
                  <img src={RightArrow} className="h-4 w-4" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%]">
        <div className="flex justify-between mb-4">
          <div>
            <h1 className="p-2 font-bold">Newly Added Courses</h1>
          </div>
          <div className="w-[35%]">
            <InputField placeholder={"Search Courses"} />
          </div>
        </div>
        <GroupAccordian />
      </div>
    </div>
  );
};

export default Courses;
