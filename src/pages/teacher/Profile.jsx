import React from "react";
import TeacherDetailsCard from "../../components/cards/TeacherDetails";
import CoursesCard from "../../components/cards/CoursesCard";
import Back from "../../assets/icons/Back.svg";
import Pen from "../../assets/icons/Pen.svg";
import { useNavigate } from "react-router-dom";
function TeacherDetail() {
  const navigate = useNavigate();
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-4">
        <div
          className="flex items-center space-x-4"
          onClick={() => {
            navigate("/admin/dashboard");
          }}
        >
          <img src={Back} alt="back" className="h-5 w-5" />

          <h1 className="text-md font-semibold text-teal-600">My Profile</h1>
        </div>

        <button
          className="bg-transparent flex items-center mr-2"
          onClick={() => {
            /* Handle edit button click here */
          }}
        >
          <img
            src={Pen}
            alt="Edit"
            className="h-5 w-5 cursor-pointer text-teal-600 mr-2"
          />
          <span className="text-md font-semibold text-teal-600">Edit</span>
        </button>
      </div>
      <div className="flex space-x-4 bg-white-200">
        <div className="w-2/6">
          <TeacherDetailsCard />
        </div>
        <div className="w-4/6">
          <CoursesCard />
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
