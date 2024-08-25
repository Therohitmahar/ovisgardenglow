import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import Navbar from "../Navbar/Navbar";
import HeroContent from "../HomePage/HeroContent";
import SideFilter from "./SideFilter";

const Products = () => {
  const arr = Array?.from({ length: 10 });
  return (
    <div className="all-products-wrapper flex w-full justify-center">
      <Navbar blackClass="black" />
      <aside>
        <SideFilter />
      </aside>
      <div className="all-products flex flex-wrap">
        {arr?.map((el) => (
          <>
            <SingleProduct />
          </>
        ))}
      </div>
    </div>
  );
};

export default Products;
