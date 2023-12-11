import React from "react";
import Search from "../../components/shared/Search";
import Table from "../../components/table/TeacherTrasactionsTable";
const Transactions = () => {
  const data = [
    {
      id: 1,
      student: "Student 1",
      country: "Country 1",
      teacher: "John Doe",
      course: "Mathematics",
      material: {
        image: "mathematics-image-url.jpg",
        text: "Mathematics material text",
      },
      amount: 100,
      dueDate: "2022-12-31",
      paymentStatus: "Paid",
      amountGained: 122748,
    },
    {
      id: 2,
      student: "Student 2",
      country: "Country 2",
      teacher: "Jane Smith",
      course: "History",
      material: {
        image: "history-image-url.jpg",
        text: "History material text",
      },
      amount: 200,
      dueDate: "2022-12-31",
      paymentStatus: "Unpaid",
      amountGained: 122748,
    },
  ];
  return (
    <div className=" bg-[#FFF] w-full h-full p-4 rounded-xl ">
      <div className="flex justify-between">
        <Search text={"Search"} />
      </div>
      <Table Data={data} />
    </div>
  );
};

export default Transactions;
