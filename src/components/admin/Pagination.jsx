import React from "react";
import Arrow from "../../assets/icons/Check-arrow.svg";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
  textSize,
}) {
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 7;

    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    let endPage = Math.min(startPage + visiblePages - 1, totalPages);

    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };
  return (
    <nav>
      <ul className="justify-center flex items-center">
        <li className={`mx-3`}>
          <button
            className={`link-btn relative ${
              textSize
                ? `h-[${textSize}px] w-[${textSize}px] flex justify-center items-center`
                : "h-[30px] w-[30px]"
            } flex items-center gap-1 bg-custom-light-1 p-1 rounded-full ${
              currentPage === 1 ? "disabled" : "text-black fw-bold"
            }`}
            disabled={currentPage == 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[90deg]"
            >
              <path
                d="M12.4666 6.96659L8.46659 10.9666C8.33325 11.0999 8.19992 11.1666 7.99992 11.1666C7.79992 11.1666 7.66659 11.0999 7.53325 10.9666L3.53325 6.96659C3.26659 6.69992 3.26659 6.29992 3.53325 6.03325C3.79992 5.76659 4.19992 5.76659 4.46659 6.03325L7.99992 9.56659L11.5333 6.03325C11.7999 5.76659 12.1999 5.76659 12.4666 6.03325C12.7333 6.29992 12.7333 6.69992 12.4666 6.96659Z"
                fill="black"
              />
              <mask
                id="mask0_56_3685"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="3"
                y="5"
                width="10"
                height="7"
              >
                <path
                  d="M12.4666 6.96659L8.46659 10.9666C8.33325 11.0999 8.19992 11.1666 7.99992 11.1666C7.79992 11.1666 7.66659 11.0999 7.53325 10.9666L3.53325 6.96659C3.26659 6.69992 3.26659 6.29992 3.53325 6.03325C3.79992 5.76659 4.19992 5.76659 4.46659 6.03325L7.99992 9.56659L11.5333 6.03325C11.7999 5.76659 12.1999 5.76659 12.4666 6.03325C12.7333 6.29992 12.7333 6.69992 12.4666 6.96659Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_56_3685)">
                <rect y="0.5" width="16" height="16" fill="#4B4B4B" />
              </g>
            </svg>

            {/* <img src={Arrow} className="rotate-[90deg]" /> */}
          </button>
        </li>
        <div className="flex bg-custom-light-1 rounded-full">
          {generatePageNumbers().map((pageNumber) => (
            <li
              key={pageNumber}
              className={`duration-200 ${
                textSize
                  ? `h-[${textSize}px] w-[${textSize}px] flex justify-center items-center`
                  : "py-2 px-4"
              } ${
                currentPage === pageNumber
                  ? " bg-custom-green-1 rounded-full text-white"
                  : ""
              } `}
              onClick={() => handlePageChange(pageNumber)}
            >
              <button
                className={`page-link border-0 ${
                  currentPage === pageNumber ? "rounded fw-bold" : "text-dark"
                }`}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </div>

        <li className={`mx-3`}>
          <button
            className={`link-btn relative ${
              textSize
                ? `h-[${textSize}px] w-[${textSize}px] flex justify-center items-center`
                : "h-[30px] w-[30px]"
            } flex items-center gap-1 bg-custom-light-1 p-1 rounded-full ${
              currentPage === 1 ? "disabled" : "text-black fw-bold"
            }`}
            disabled={currentPage == totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[-90deg]"
            >
              <path
                d="M12.4666 6.96659L8.46659 10.9666C8.33325 11.0999 8.19992 11.1666 7.99992 11.1666C7.79992 11.1666 7.66659 11.0999 7.53325 10.9666L3.53325 6.96659C3.26659 6.69992 3.26659 6.29992 3.53325 6.03325C3.79992 5.76659 4.19992 5.76659 4.46659 6.03325L7.99992 9.56659L11.5333 6.03325C11.7999 5.76659 12.1999 5.76659 12.4666 6.03325C12.7333 6.29992 12.7333 6.69992 12.4666 6.96659Z"
                fill="black"
              />
              <mask
                id="mask0_56_3685"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="3"
                y="5"
                width="10"
                height="7"
              >
                <path
                  d="M12.4666 6.96659L8.46659 10.9666C8.33325 11.0999 8.19992 11.1666 7.99992 11.1666C7.79992 11.1666 7.66659 11.0999 7.53325 10.9666L3.53325 6.96659C3.26659 6.69992 3.26659 6.29992 3.53325 6.03325C3.79992 5.76659 4.19992 5.76659 4.46659 6.03325L7.99992 9.56659L11.5333 6.03325C11.7999 5.76659 12.1999 5.76659 12.4666 6.03325C12.7333 6.29992 12.7333 6.69992 12.4666 6.96659Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_56_3685)">
                <rect y="0.5" width="16" height="16" fill="#4B4B4B" />
              </g>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
