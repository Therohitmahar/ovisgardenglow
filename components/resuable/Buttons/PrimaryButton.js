import React from "react";

const PrimaryBtn = ({ children, variant = "" }) => {
  return (
    <button
      style={{ backgroundColor: variant == "red" ? "#CE0000" : "" }}
      className="primary-btn"
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
