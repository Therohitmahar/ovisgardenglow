"use client";
import React, { useState } from "react";

const FeaturedTab = () => {
  const [activeTab, setActiveTab] = useState("All");
  const allKey = ["All", "ON SALE", "Wall", "Table Decor"];
  return (
    <div className="flex justify-center align-middle tabs-array text-12px">
      {allKey?.map((el, i) => (
        <div
          className={`single-tab cursor-pointer ${
            activeTab == el ? "active" : ""
          }`}
          key={i}
          onClick={() => setActiveTab(el)}
        >
          {el}
        </div>
      ))}
    </div>
  );
};

export default FeaturedTab;
