import React from "react";

const Button = ({
  buttonText,
  color,
  textColor,
  borderColor,
  borderWidth,
  icon,
  iconAlt,
}) => {
  const isRightArrow =
    iconAlt === "smallArrowRight" || buttonText.toLowerCase() === "next";
  const hasIcon = !!icon;

  return (
    <button
      style={{ borderColor: borderColor, borderWidth: borderWidth }}
      className={`w-[150px] h-10 px-3 py-[9px] bg-${color} ${
        textColor ? `text-${textColor}` : "text-white"
      } rounded-md inline-flex items-center justify-center gap-2 text-sm font-semibold font-inter leading-14px text-center`}
    >
      {hasIcon && !isRightArrow && (
        <img src={icon} alt="Icon" className="w-4 h-4 mr-1" />
      )}
      {buttonText}
      {hasIcon && isRightArrow && (
        <img src={icon} alt="Icon" className="w-4 h-4 ml-1" />
      )}
    </button>
  );
};

export default Button;
