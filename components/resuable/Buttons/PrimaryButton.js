import React from "react";

const PrimaryBtn = (props) => {
  const { children, variant = "" } = props || {};
  return (
    <button
      {...props}
      style={{
        backgroundColor:
          variant == "grey" ? "#F6F6F6" : variant == "red" ? "#CE0000" : "",
      }}
      className={`${props?.className} primary-btn ${variant}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
