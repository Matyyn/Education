import React, { useEffect, useRef, useState } from "react";
import ProfileImg from "../../../assets/images/customer/home-testimonial-user.png";
import SignoutIcon from "../../../assets/icons/Signout.svg";
import ProfileIcon from "../../../assets/icons/Profile-2.svg";
import HelpIcon from "../../../assets/icons/Help.svg";
import FAQIcon from "../../../assets/icons/Faq.svg";
import useClickOutside from "../../../hooks/useClickOutside";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown({
  open,
  onclose,
  setshowProfileSideModal,
  setopen,
}) {
  const navigate = useNavigate();

  const profileDropRef = useRef();

  useClickOutside(profileDropRef, onclose);

  return (
    <>
      <div
        ref={profileDropRef}
        className={`absolute top-[8vh] sm:right-20 w-[279px] bg-white rounded-lg ${
          open ? "block" : "hidden"
        }`}
        style={{
          boxShadow: "0px 5px 25px 0px #0000001A",
        }}
      >
        <div className="flex items-center gap-5 p-3">
          <img src={ProfileImg} className="h-[70px] w-[70px] rounded-full" />
          <div className="flex flex-col">
            <p className="text-slate-900 text-md font-semibold font-['Inter'] leading-[18px]">
              John Doe
            </p>
            <p className="text-gray-400 text-sm font-semibold font-['Inter'] leading-none">
              Teacher
            </p>
          </div>
        </div>
        <hr className="text-[#E9EAF0B2]" />
        <div
          className="p-3 py-3 flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setopen(false);
            setshowProfileSideModal(true);
            navigate("/teacher/profile");
          }}
        >
          <img src={ProfileIcon} />
          <p className="text-gray-500 text-sm font-semibold font-['Inter'] leading-none">
            Profile
          </p>
        </div>
        <div
          className="p-3 py-3 flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setopen(false);
            setshowProfileSideModal(true);
          }}
        >
          <img src={HelpIcon} />
          <p className="text-gray-500 text-sm font-semibold font-['Inter'] leading-none">
            Help
          </p>
        </div>
        <div
          className="p-3 py-3 flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setopen(false);
            setshowProfileSideModal(true);
          }}
        >
          <img src={FAQIcon} />
          <p className="text-gray-500 text-sm font-semibold font-['Inter'] leading-none">
            FAQs
          </p>
        </div>
        <hr className="text-[#E9EAF0B2]" />
        <div
          className="p-3 py-3 flex items-center gap-3 cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          <img src={SignoutIcon} />
          <p className="text-gray-500 text-sm font-semibold font-['Inter'] leading-none">
            Sign Out
          </p>
        </div>
      </div>
    </>
  );
}
