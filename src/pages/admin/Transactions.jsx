import React from "react";
import Search from "../../components/shared/Search";
import Table from "../../components/table/TrasactionsTable";
const Transactions = () => {
  const data = [
    {
      id: 1,
      teacher: "John Doe",
      course: "Mathematics",
      material: {
        image: "mathematics-image-url.jpg",
        text: "Mathematics material text",
      },
      amount: 100,
      paymentStatus: "Paid",
    },
    {
      id: 2,
      teacher: "Jane Smith",
      course: "History",
      material: {
        image: "history-image-url.jpg",
        text: "History material text",
      },
      amount: 200,
      paymentStatus: "Unpaid",
    },
  ];
  return (
    <div className=" bg-[#FFF] w-full h-full p-4 rounded-xl ">
      <div className="flex sm:flex-col md:flex-row  lg:flex-row  xl:flex-row justify-between ">
        <Search text={"Search"} />
      </div>
      <Table Data={data} />
    </div>
  );
};

export default Transactions;
