import { useEffect, useRef, useState } from "react";

export const useComponentVisible = (initialIsVisible) => {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef([]);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    let foundRef =
      ref.current && ref.current.find((cur) => cur?.contains(event.target));
    if (!foundRef) {
      setIsComponentVisible(false);
    }
    // if (
    //   ref.current &&
    //   !ref.current[0]?.contains(event.target) &&
    //   !ref.current[1]?.contains(event.target)
    // ) {
    //   setIsComponentVisible(false);
    // }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
};
