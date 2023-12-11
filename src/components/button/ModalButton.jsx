import React, { Fragment, useState } from "react";
import TeacherForm from "../admin/form/Form";
import MeetingsModal from "../admin/form/Meetings/MeetingsModal";
import AddStudent from "../admin/form/StudentForm";
import AssignCourse from "../admin/form/AssignCourse";
import UploadFileForm from "../teacher/forms/UploadFileForm";
import Create from "../teacher/forms/CreateSection";
import BuyMaterial from "../admin/form/BuyMaterial";
import UploadFile from "../admin/form/UploadFile";
import CoursesForm from "../admin/form/CoursesForm";
import AssignMeeting from "../admin/form/AssignMeetings";
import LiveMeetingForm from "../teacher/forms/FacetoFaceForm";
import FacetoFace from "../teacher/forms/FacetoFaceForm";
import { Dialog, Transition } from "@headlessui/react";
const Button = ({ buttonText, icon, color, textColor, borderColor }) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div onClick={() => openModal()} className="cursor-pointer">
        {icon ? (
          <div onClick={() => openModal()} className="cursor-pointer">
            <button
              className={`w-[170px] h-10 px-3 py-[9px] bg-${color} rounded-md inline-flex items-center justify-center border ${
                borderColor ? `border-${borderColor}` : "border-gray-300"
              } ${
                textColor ? `text-${textColor}` : "text-white"
              } text-sm font-semibold font-inter leading-14px text-center gap-2`}
            >
              {icon && <img src={icon} alt="icon" className="h-4 w-4" />}
              {buttonText}
            </button>
          </div>
        ) : (
          <button
            className={`w-[150px] h-10 mr-4 px-3 py-[9px] bg-${color} rounded-md inline-flex items-center justify-center gap-5 border ${
              borderColor ? `border-${borderColor}` : "border-gray-300"
            } ${
              textColor ? `text-${textColor}` : "text-white"
            } text-sm font-semibold font-inter leading-14px text-center`}
          >
            {buttonText}
          </button>
        )}
      </div>
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
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-black bg-opacity-30 " />
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
                  <h3 className="text-lg font-medium leading-6 text-gray-900 ">
                    {buttonText}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-700  dark:hover:text-gray-300"
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

                {buttonText === "Meetings" ? (
                  <MeetingsModal />
                ) : buttonText === "Upload" ? (
                  <UploadFile />
                ) : buttonText === "Upload File" ? (
                  <UploadFileForm />
                ) : buttonText === "Add New Student" ? (
                  <AddStudent />
                ) : buttonText === "Add New Course" ? (
                  <CoursesForm />
                ) : buttonText === "Assign Course" ? (
                  <AssignCourse />
                ) : buttonText === "Buy Material" ? (
                  <BuyMaterial />
                ) : buttonText === "Face to Face" ? (
                  <FacetoFace />
                ) : buttonText === "Live Meeting" ? (
                  <LiveMeetingForm />
                ) : buttonText === "Assign Meetings" ? (
                  <AssignMeeting />
                ) : buttonText === "Create" ? (
                  <Create />
                ) : (
                  <TeacherForm />
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Button;
