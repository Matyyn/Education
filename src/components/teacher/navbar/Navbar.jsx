import React, { useRef, useState } from "react";
import NotificationIcon from "../../../assets/icons/Notification.svg";
import DownArrow from "../../../assets/icons/Check-arrow.svg";
import ProfileIcon from "../../../assets/images/customer/home-testimonial-user.png";
import ProfileDropdown from "./ProfileDropdown";
import InputField from "../../InputField";
import Dropdown from "../../Dropdown";
import NotificationsDropdown from "./NotificationsDropdown";

const Navbar = () => {
  const [showNotificationsDropdown, setshowNotificationsDropdown] =
    useState(false);
  const [showProfileDropDown, setshowProfileDropDown] = useState(false);
  const [showProfileSideModal, setshowProfileSideModal] = useState(false);
  const [dark, setdark] = useState(false);
  const [langOpts, setlangOpts] = useState([
    { name: "AR", value: "Arabic" },
    { name: "ENG", value: "English" },
  ]);
  const [currLang, setcurrLang] = useState(langOpts[0]);
  const [showLangDrop, setshowLangDrop] = useState(false);
  const [showNotDrop, setshowNotDrop] = useState(false);
  const [notifications, setnotifications] = useState({
    unread: 4,
    notifications: [
      {
        text: "Congratulate Sam for work update 🎉",
        date: Date.now(),
      },
      {
        text: "Teacher has been Added",
        date: Date.now(),
      },
    ],
  });

  return (
    <>
      <div className="shadow-nav bg-white flex justify-between w-full relative py-2 rounded-lg items-center gap-5 px-5 z-10">
        <InputField placeholder={"Search"} className={"!w-[30%]"} />

        <div className="flex justify-end items-center gap-5">
          <label
            className={`relative inline-flex items-center cursor-pointer rounded-2xl bg-gray-2`}
          >
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className={`theme-toggler peer-checked:after:translate-x-full after:content-[''] after:absolute after:transition-all`}
            ></div>
          </label>
          <div className="relative">
            <div
              className="cursor-pointer w-10 h-10 flex justify-center items-center bg-zinc-200 rounded-[35px] shadow"
              onClick={() => setshowLangDrop(true)}
            >
              <p className="text-xs">{currLang.name}</p>
            </div>
            {showLangDrop && (
              <Dropdown
                setshowDropdown={setshowLangDrop}
                options={langOpts}
                setvalue={setcurrLang}
                className={"!w-48"}
              />
            )}
          </div>
          <ProfileDropdown
            setopen={setshowProfileDropDown}
            setshowProfileSideModal={setshowProfileSideModal}
            open={showProfileDropDown}
            onclose={() => setshowProfileDropDown(false)}
          />
          <NotificationsDropdown
            notifications={notifications}
            setnotifications={setnotifications}
            onclose={() => setshowNotDrop(false)}
            open={showNotDrop}
          />
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setshowNotDrop(true);
            }}
          >
            <img src={NotificationIcon} className="h-[24px] w-[24px]" />
            <p className="absolute text-white bg-red-500 rounded-full px-1 text-xs left-3 top-[-6px]">
              {notifications.unread == 0 ? "" : notifications.unread}
            </p>
          </div>

          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setshowProfileDropDown(true)}
          >
            <div className="flex flex-col">
              <p className="text-right text-zinc-500 text-sm font-normal font-['Inter'] leading-[21px]">
                John Doe
              </p>
              <p className="text-right text-stone-400 text-xs font-normal font-['Inter'] leading-[18px]">
                Teacher
              </p>
            </div>
            <img src={DownArrow} />
          </div>

          <div>
            <img src={ProfileIcon} className="h-[50px] w-[50px] rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
