import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { useNavigate } from "react-router-dom";
// import Moment from "react-moment";
import { Switch } from "@headlessui/react";
import Notification from "../../button/Notification";

export default function NotificationsDropdown({
  open,
  onclose,
  notifications,
  setnotifications,
}) {
  const navigate = useNavigate();
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const TimeNow = `${hours}:${minutes} ${ampm}`;
  const notificationRef = useRef();

  useClickOutside(notificationRef, onclose);
  const [enabled, setenabled] = useState(true);

  const handleReadAll = () => {
    setnotifications({
      ...notifications,
      unread: 0,
    });
  };

  return (
    <>
      <div
        ref={notificationRef}
        className={`absolute top-12  sm:right-56 w-[350px] bg-white rounded-lg overflow-hidden shadow-nav ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center p-3">
          <p className="text-gray-600 text-md font-medium font-['Inter']">
            Notification
          </p>
          {notifications.unread > 0 && (
            <div className="w-[55px] h-5 px-[9px] py-px bg-indigo-500 bg-opacity-10 rounded-[17px] justify-start items-center gap-[3px] inline-flex">
              <p className="text-center text-indigo-500 text-xs font-semibold font-['Inter'] leading-[18px]">
                {notifications.unread} New
              </p>
            </div>
          )}
        </div>
        <hr className="text-[#E9EAF0B2]" />
        <div className="flex flex-col gap-1">
          {notifications.notifications.map((not) => (
            <>
              <div className="p-3">
                <div className="flex gap-2">
                  <img src={not.image} className="w-[35px] h-[35px]" />
                  <div className="flex flex-col">
                    <p className="text-sm">{not.text}</p>
                    <p className="text-sm">{TimeNow}</p>
                    {/* <Moment fromNow className="text-gray-3 text-sm">
                      {not.date}
                    </Moment> */}
                  </div>
                </div>
              </div>
              <hr className="text-gray-2" />
            </>
          ))}
        </div>
        <div className="flex justify-between items-center p-3">
          <p className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-[21px]">
            Notification Alert
          </p>
          <Switch
            checked={enabled}
            onChange={setenabled}
            className={`${enabled ? "bg-teal-600" : "bg-inactive"}
          relative inline-flex h-[24px] w-[42px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`mt-[3px] ${
                enabled ? "translate-x-5" : "translate-x-1"
              }
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
        <hr className="text-gray-2" />
        <div className="flex justify-center p-[20px]">
          {/* <TransparentButton
            text={"Read All Notifications"}
            disabled={notifications.unread == 0}
            className={"bg-inactive text-white border-none w-full text-sm"}
            clickHandler={handleReadAll}
          /> */}
          <Notification />
        </div>
      </div>
    </>
  );
}
