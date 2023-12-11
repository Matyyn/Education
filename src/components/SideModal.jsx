import React, { useState } from "react";

import ModalWrapper from "./ModalWrapper";

export default function SideModal({ children, open, onclose, title }) {
  return (
    <ModalWrapper open={open}>
      <div
        className={`w-[400px] max-w-[100vw] h-screen bg-white relative px-4 py-4 sidebar overflow-scroll float-right ${
          open ? "animate-sidebar-open" : "animate-sidebar-close"
        }`}
      >
        <div className="flex justify-between items-center mb-7 z-10 relative">
          <div
            onClick={onclose}
            className="rounded-full px-[12px] py-[7px] cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.8)",
              boxShadow: "0px 4px 10px 0px #0000001A",
            }}
          >
            <p className="text-gray-500 opacity-80 text-sm font-bold">X</p>
          </div>
          <p className="font-semibold text-lg">{title}</p>
          <p></p>
        </div>

        {children}
      </div>
    </ModalWrapper>
  );
}
