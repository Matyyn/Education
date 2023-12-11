import React, { useState } from "react";
import smallArrowleft from "../../assets/icons/SmallArrowleft.svg";
import smallArrowright from "../../assets/icons/SmallArrowRight.svg";

const recordsPerPage = 10;
const Table = ({ Data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Data.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentData = Data.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage,
  );
  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-md font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Teacher
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-md font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Course
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-md font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Material
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-md font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-md font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Payment Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-700">
                  {currentData.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-4 text-sm font-normal whitespace-nowrap">
                        {item.teacher}
                      </td>
                      <td className="px-4 py-4 text-sm font-normal whitespace-nowrap">
                        {item.course}
                      </td>
                      <td className="px-4 py-4 text-sm font-normal whitespace-nowrap">
                        <div className="flex justify-left">
                          <img
                            src={item.material.image}
                            className="object-cover w-6 h-6 border-2 border-white rounded-full shrink-0"
                          />
                          <span className="text-gray-800">
                            {item.material.text}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-normal whitespace-nowrap">
                        {item.amount} KWD
                      </td>
                      <td className="px-4 py-4 text-sm font-normal whitespace-nowrap">
                        <div
                          className={`inline px-3 py-1 text-sm font-medium rounded-full gap-x-2 text-center ${
                            item.paymentStatus === "Unpaid"
                              ? "text-red-500"
                              : "text-emerald-500"
                          } ${
                            item.paymentStatus === "Unpaid"
                              ? "bg-red-100/60"
                              : "bg-emerald-100/60"
                          } `}
                        >
                          {item.paymentStatus}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 sm:flex sm:items-center sm:justify-between ">
        <div className="text-md text-gray-500 dark:text-gray-400 font-medium">
          Total Records: {Data.length}
        </div>
        <div className="flex justify-center mt-2">
          <button
            className="px-4 py-2 mx-1 rounded-full bg-gray-200 text-white"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={smallArrowleft} />
          </button>
          <div className="flex justify-center px-3">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`mx-1 rounded-full ${
                  currentPage === index + 1
                    ? "px-3 py-1 bg-black text-white text-sm font-bold"
                    : "px-3 py-1 bg-gray-200 text-black text-sm"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className="px-4 py-2 mx-1 rounded-full bg-gray-200 text-white"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={smallArrowright} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Table;
