import React from "react";

const SingleStepper = ({ icon, title, subTitle, isActive }) => {
  return (
    <div className={`single-stepper flex flex-col justify-center items-center`}>
      <div
        className={`icon-wrapper text-[#2F302C] flex items-center justify-center ${
          isActive ? "active" : ""
        }`}
      >
        {icon}
      </div>
      <div className="stepper-title text-[#2F302C]">{title}</div>
      <div className="sub-title text-10px text-[#7E7F7C]">{subTitle}</div>
    </div>
  );
};

export default SingleStepper;
