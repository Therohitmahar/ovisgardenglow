"use client";
import PrimaryBtn from "@/components/resuable/Buttons/PrimaryButton";
import React, { useState } from "react";

const TypesSwitch = ({ className = "" }) => {
  const sizeArr = ["long", "medium", "short"];
  const [selectedType, setSelectedType] = useState(sizeArr?.[0]);
  return (
    <div className={`types-switch flex flex-col ${className}`}>
      <p className="types-title">Type :</p>
      <div className="types-switcher flex">
        {sizeArr?.map((el) => (
          <PrimaryBtn
            key={el}
            className="capitalize"
            variant={el === selectedType ? "" : "grey"}
            onClick={(e) => setSelectedType(el)}
          >
            {el}
          </PrimaryBtn>
        ))}
      </div>
    </div>
  );
};

export default TypesSwitch;

export const QuantityIncreaseBtn = () => {
  return (
    <div className="flex">
      <PrimaryBtn variant="grey">-</PrimaryBtn>
      <PrimaryBtn variant="grey">Number: 1</PrimaryBtn>
      <PrimaryBtn variant="grey">+</PrimaryBtn>
    </div>
  );
};
