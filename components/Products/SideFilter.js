"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import PrimaryBtn from "../resuable/Buttons/PrimaryButton";
import RangeSelector from "../resuable/RangeSelector/RangeSelector";
import SecondaryBtn from "../resuable/Buttons/SecondaryButton";

const SideFilter = () => {
  const categoryArr = {
    "Table Decor": [
      ["Deer Mafia", ""],
      ["Astronaut", ""],
      ["Chilling Astronaut", ""],
      ["Crazy Bunny", ""],
      ["White Horse", ""],
    ],
    "All Products": [""],
  };
  const shopByArr = {
    Material: [
      ["Bronze", 10],

      ["Oak wood", 20],

      ["Stainless metal", 11],
      ["Titanium", 11],
      ["Alloy", 11],
      ["Ceramic", 11],
    ],
    "All Products": [""],
    Price: [],
    Size: [
      ["S", 41],
      ["M", 20],
      ["L", 11],
    ],
  };
  const categoryKeys = Object?.keys(categoryArr);
  const shopByKeys = Object?.keys(shopByArr);
  return (
    <div className="side-filter">
      <div className="single-accordion">
        <h5 className="uppercase title">Category</h5>
        <ListItems arr={categoryKeys} categoryArr={categoryArr} />
      </div>
      <div className="single-accordion">
        <h5 className="uppercase title">shop by</h5>
        <ListItems arr={shopByKeys} categoryArr={shopByArr} />
      </div>
    </div>
  );
};

export default SideFilter;

const ListItems = ({ arr, categoryArr }) => {
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();
  const [showFilter, setShowFilter] = useState({});
  const handleRangeChange = ({ min, max }) => {
    setMinVal(min);
    setMaxVal(max);
    // Update your product list or perform other actions based on the price range
  };
  return (
    <>
      {arr?.map((el) => (
        <div className="wrap" key={el}>
          <div className="flex justify-between sub-category">
            <h6 className="">{el}</h6>

            <div
              className="relative cursor-pointer"
              onClick={() => {
                setShowFilter((prev) => ({ ...prev, [el]: !showFilter?.[el] }));
              }}
            >
              {/* <span
                className="absolute"
                style={{
                  transition: "0.4s",
                  rotate: showFilter?.[el] ? "90deg" : "",
                  transform: showFilter?.[el]
                    ? "translate(,100%)"
                    : "translate(-100%,0)",
                }}
              >
                {/* <Minus /> */}
              {/* {showFilter?.[el] == true ? <Minus /> : <Plus />} 
              </span> */}
              <span
                className="absolute"
                style={{ transform: "translate(-100%,0)" }}
              >
                {/* <Minus /> */}
                {showFilter?.[el] == true ? <Minus /> : <Plus />}
              </span>
            </div>
          </div>
          {showFilter?.[el] == true && (
            <>
              {el === "Price" ? (
                <>
                  <div className="flex justify-between range-container flex-col">
                    <RangeSelector
                      min={0}
                      max={3000}
                      onChange={handleRangeChange}
                    />
                  </div>
                  <ul className="flex justify-between price-btn">
                    <SecondaryBtn cursor="cursor-default">
                      ₹{minVal} - ₹{maxVal}
                    </SecondaryBtn>
                    <PrimaryBtn>Apply</PrimaryBtn>
                  </ul>
                </>
              ) : (
                <ul className="flex flex-col">
                  {categoryArr?.[el]?.map((el, i) => (
                    <li
                      key={i}
                      className={`${
                        i == 0 ? "is-active" : ""
                      } flex justify-between`}
                    >
                      <span>{el?.[0]}</span>
                      {el?.[1] && <span className="ml-auto">({el?.[1]})</span>}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
};
