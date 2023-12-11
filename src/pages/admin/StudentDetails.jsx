import React from "react";
import StudentsDetailsCard from "../../components/cards/StudentsDetailsCard";
import TeachersCard from "../../components/cards/TeachersCard";
import Back from "../../assets/icons/Back.svg";
import Button from "../../components/button/ModalButton";
import Pen from "../../assets/icons/Pen.svg";
import BuyIcon from "../../assets/icons/Buy.svg";
import { useNavigate } from "react-router-dom";
import AssignIcon from "../../assets/icons/Assign.svg";

function TeacherDetail() {
  const navigate = useNavigate();
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-4 sm:flex-col md:flex-row  lg:flex-row  xl:flex-row ">
        <div
          className="flex items-center space-x-4"
          onClick={() => {
            navigate("/admin/students");
          }}
        >
          <img src={Back} alt="back" className="h-5 w-5" />

          <h1 className="text-md font-semibold text-teal-600">
            Student Details
          </h1>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            buttonText="Buy Material"
            icon={BuyIcon}
            textColor="teal-600"
          />
          <Button
            buttonText="Assign Meetings"
            icon={AssignIcon}
            textColor="teal-600"
          />
          <Button buttonText="Edit Profile" icon={Pen} textColor="teal-600" />
        </div>
      </div>

      <div className="flex bg-white flex-col sm:flex-col md:flex-row lg:flex-row p-2 rounded-lg">
        <div className="lg:w-1/3 md:full sm:w-full">
          <StudentsDetailsCard />
        </div>
        <div className="lg:w-2/3 md:full sm:w-full">
          <TeachersCard />
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
