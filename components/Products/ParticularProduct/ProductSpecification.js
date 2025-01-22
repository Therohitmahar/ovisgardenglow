import PrimaryBtn from "@/components/resuable/Buttons/PrimaryButton";
import StarHalf, { Star } from "@/public/assets/svg/Stars";
import React from "react";
import TypesSwitch, { QuantityIncreaseBtn } from "./TypesSwitch";

const ProductSpecification = () => {
  return (
    <div className="particular-product-specification flex flex-col">
      <h1 className="specification-title">ASTRONAUT (TABLE DECORE)</h1>
      <div className="star-and-reviews flex items-center">
        <div className="stars-wrapper flex">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>
        <PrimaryBtn variant={"red"}>ON SALE</PrimaryBtn>
        <div className="flex">
          <p className="total-sold text-12px text-grey flex items-center">
            261 products sold
          </p>
          <p className="total-sold text-12px text-grey">
            3,1k products watched
          </p>
        </div>
      </div>
      <hr />
      <TypesSwitch className="mb-32px" />
      <TypesSwitch />
      <hr />
      <div className="flex quantity-and-price mb-32px justify-between">
        <QuantityIncreaseBtn />
        <div className="price flex">
          <p className="wrong-price">₹600.0</p>
          <p className="right-price">₹400.3</p>
        </div>
      </div>
      <div className="flex">
        <PrimaryBtn className=" mr-18px">BUY NOW</PrimaryBtn>
        <PrimaryBtn className="" variant="grey">
          ADD TO CART
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default ProductSpecification;
