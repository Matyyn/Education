import React from "react";
import Search from "../../components/shared/Search";
import Table from "../../components/table/PrivilagesTable";
const Privilege = () => {
  const data = [
    {
      id: 1,
      student: "Student Name",
      teacher: "John Doe",
      course: "Mathematics",
      material: {
        image: "mathematics-image-url.jpg",
        text: "Mathematics material text",
      },
      dueDate: "2022-12-31",
      amount: 100,
      paymentStatus: "Paid",
    },
    {
      id: 2,
      student: "Student Name",
      teacher: "Jane Smith",
      course: "History",
      material: {
        image: "history-image-url.jpg",
        text: "History material text",
      },
      dueDate: "2022-12-31",
      amount: 200,
      paymentStatus: "Unpaid",
    },
  ];

  return (
    <div className=" bg-[#FFF] w-full h-full p-4 rounded-xl ">
      <div className="flex   sm:flex-col md:flex-row  lg:flex-row  xl:flex-row justify-between">
        <Search text={"Search"} />
      </div>
      <Table Data={data} />
    </div>
  );
};

export default Privilege;
