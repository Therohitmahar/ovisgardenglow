import React from "react";
import { features } from "./variables";

export const WhyChooseUs = () => {
  return (
    <div className="why-choose-us flex flex-col items-center">
      <h6>why choose us</h6>
      <div className="flex why-container flex-wrap justify-between">
        {features?.map((el) => (
          <SingleWhyUs el={el} key={el.title} />
        ))}
      </div>
    </div>
  );
};

const SingleWhyUs = ({ el }) => {
  return (
    <div className="flex flex-col justify-center items-center single-why ">
      <div>{el?.icon}</div>
      <h6>{el.title}</h6>
      <p>{el.description}</p>
    </div>
  );
};
