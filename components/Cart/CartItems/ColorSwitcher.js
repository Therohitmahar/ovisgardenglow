"use client";
import React, { useState } from "react";

const ColorSwitcher = ({ arr = ["red", "blue", "green"] }) => {
  const [selectedColor, setSelectedColor] = useState(arr[0]);
  return (
    <div className="color-switcher-container flex">
      {arr?.map((el, index) => (
        <div
          style={{ backgroundColor: el }}
          onClick={() => setSelectedColor(el)}
          className={`color-switcher ${el} 
          ${selectedColor === el ? "active" : ""}
          `}
          key={index}
        />
      ))}
    </div>
  );
};

export default ColorSwitcher;
