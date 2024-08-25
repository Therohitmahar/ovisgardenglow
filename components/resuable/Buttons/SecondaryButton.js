import React from "react";

const SecondaryBtn = ({ children, cursor = "" }) => {
  return (
    <button className={`primary-btn secondary ${cursor}`}>{children}</button>
  );
};

export default SecondaryBtn;
