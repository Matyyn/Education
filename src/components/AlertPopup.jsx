import React from "react";

import useAlert from "../hooks/useAlert";

export default function AlertPopup() {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <div
        className={`fixed top-0 left-0 text-center text-white w-screen p-2 z-50 ${
          type == "danger" ? "bg-red-400" : "bg-custom-green-1"
        }`}
      >
        {text}
      </div>
    );
  } else {
    return <></>;
  }
}
