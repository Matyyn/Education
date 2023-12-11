import React from "react";
import Arrow from "../assets/icons/Arrows.svg";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center gap-10 w-full mt-4">
      <button className="bg-black p-2 rounded-lg">
        <img src={Arrow} />
      </button>
      <button className="bg-black p-2 rounded-lg">
        <img src={Arrow} className="rotate-[180deg]" />
      </button>
    </div>
  );
}
