import React from "react";

// eslint-disable-next-line react/prop-types
export default function MainWrapper({ children, className }) {
  return (
    <div
      className={`bg-white px-4 py-5 mb-10 rounded-xl ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
