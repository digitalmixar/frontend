import React from "react";

const CloseIcon = (props) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 17L47 47"
        stroke="#F1E9FC"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M47 17L17 47"
        stroke="#F1E9FC"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default CloseIcon;
