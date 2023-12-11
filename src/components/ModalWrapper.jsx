import React from "react";

export default function ModalWrapper({ children, open }) {
  return (
    <div
      className={`fixed h-screen w-screen z-50 top-0 left-0 ${
        open ? "" : "hidden"
      }`}
      style={{
        background: "rgba(0,0,0,0.4)",
      }}
    >
      {children}
    </div>
  );
}
