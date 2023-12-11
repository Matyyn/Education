import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewAllCourses from "./ViewAllCourses";
import smallArrowleft from "../../assets/icons/SmallArrowleft.svg";
import smallArrowright from "../../assets/icons/SmallArrowRight.svg";

const recordsPerPage = 10;
const Table = ({ teachersData }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(teachersData.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentData = teachersData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage,
  );
  let [selectedCourse, setSelectedCourse] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal(course) {
    setSelectedCourse(course);
    setIsOpen(true);
  }
  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-3 focus:outline-none">
                          <span>TEACHER NAME</span>
                          <svg
                            className="h-3"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0.1"
                            />
                            <path
                              d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0.1"
                            />
                            <path
                              d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0.3"
                            />
                          </svg>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        COUNTRY
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        COURSES
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        STUDENTS REGISTERED
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        STATUS
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-700  justify-center">
                    {currentData.map((teacher, index) => (
                      <tr key={index}>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          <div
                            className="flex justify-left cursor-pointer"
                            onClick={() => {
                              navigate("/admin/teacher-details");
                            }}
                          >
                            {teacher.name}
                          </div>
                        </td>

                        <td className="px-12 py-4 text-sm   text-center font-medium whitespace-nowrap ">
                          <div className="inline px-3 py-1 text-sm  font-normal rounded-full  gap-x-2   ml-6">
                            {teacher.country}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                          <div className="flex items-center justify-center">
                            {teacher.courses.map((course, courseIndex) => (
                              <div
                                key={courseIndex}
                                onClick={() => openModal(teacher.courses)}
                                className="cursor-pointer"
                              >
                                <img
                                  src={course.image}
                                  className="object-cover w-6 h-6  border-2 border-white rounded-full shrink-0"
                                />
                              </div>
                            ))}
                            <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
                              +{teacher.courses.length}
                            </p>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                          <div className="flex items-center justify-center">
                            {teacher.students.map((student, studentIndex) => (
                              <img
                                key={studentIndex}
                                className="object-cover w-6 h-6  border-2 border-white rounded-full shrink-0"
                                src={student.avatar}
                              />
                            ))}
                            <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
                              +{teacher.students.length}
                            </p>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap text-center">
                          <div
                            className={`inline px-3 py-1 text-sm font-normal rounded-full gap-x-2 text-center ${
                              teacher.status === "Deactivated"
                                ? "text-red-500"
                                : "text-emerald-500"
                            } ${
                              teacher.status === "Deactivated"
                                ? "bg-red-100/60"
                                : "bg-emerald-100/60"
                            } `}
                          >
                            {teacher.status}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap flex items-center justify-center text-center">
                          <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010-1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010-1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010-1.5z"
                              />
                            </svg>
                          </button>
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
            Total Records: {teachersData.length}
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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0" onClose={closeModal}>
          <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-black bg-opacity-30 dark:bg-opacity-50" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full  max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-2xl shadow-xl ">
                <Dialog.Title
                  as="div"
                  className="flex justify-between items-center"
                >
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    View All Courses
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-700 dark:text-gray-600 "
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </Dialog.Title>

                <div className="mt-2">
                  <ViewAllCourses courseDetails={selectedCourse} />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Table;
