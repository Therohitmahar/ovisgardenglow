import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import Navbar from "../Navbar/Navbar";
import HeroContent from "../HomePage/HeroContent";
import SideFilter from "./SideFilter";
import PrimaryBtn from "../resuable/Buttons/PrimaryButton";

const Products = () => {
  const arr = Array?.from({ length: 10 });
  return (
    <div className="all-products-wrapper flex w-full justify-center">
      <Navbar blackClass="black" />
      <aside>
        <SideFilter />
      </aside>
      <div className="flex flex-col all-products-container">
        <div className="all-product-header">
          <h5 className="uppercase title">RESULT FOR “ TABLE DECOR ”</h5>
          <PrimaryBtn variant="red">ON SALE</PrimaryBtn>
        </div>
        <div className="all-products flex flex-wrap">
          {arr?.map((el, index) => (
            <>
              <SingleProduct productId={index} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
