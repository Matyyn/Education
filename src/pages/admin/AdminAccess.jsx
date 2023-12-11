import React from "react";
import Search from "../../components/shared/Search";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/SmallModalButton";
import Plus from "../../assets/icons/Plused.svg";
import Table from "../../components/table/UsersTable";

const AdminAccess = () => {
  const navigate = useNavigate();
  const teachersData = [
    {
      id: 1,
      userName: {
        Name: "John Doe",
        image: "mathematics-image-url.jpg",
      },
      Role: "Accountant",
      emailAddress: "john@gmail.com",
      userStatus: "Active",
    },
    {
      id: 2,
      userName: {
        Name: "John Doe",
        image: "mathematics-image-url.jpg",
      },
      Role: "Accountant",
      emailAddress: "john@gmail.com",
      userStatus: "Active",
    },
    {
      id: 3,
      userName: {
        Name: "John Doe",
        image: "mathematics-image-url.jpg",
      },
      Role: "Accountant",
      emailAddress: "john@gmail.com",
      userStatus: "Active",
    },
  ];

  return (
    <div className=" bg-[#FFF] w-full h-full p-4 rounded-xl ">
      <div className="flex  flex-col sm:flex-col md:flex-row  lg:flex-row  xl:flex-row justify-between">
        <Search text={"Search"} />
        <div className="flex flex-row gap-2 mr-4">
          <Button buttonText="Assign Role" color="teal-600" icon={Plus} />
          <div
            className="flex justify-left"
            onClick={() => {
              navigate("/admin/create-roles");
            }}
          >
            <Button buttonText="Create Role" color="teal-600" icon={Plus} />
          </div>
        </div>
      </div>
      <Table teachersData={teachersData} />
    </div>
  );
};

export default AdminAccess;
