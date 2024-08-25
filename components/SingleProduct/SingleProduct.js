/* eslint-disable @next/next/no-img-element */
import StarHalf, { Star } from "@/public/assets/svg/Stars";
import React from "react";

const SingleProduct = ({
  productTitle = "Devil Dear",
  productCategory = "Table Decor",
  noOfStarts = [1, 1, 1, 1, 0.5],
  price = 1900,
}) => {
  return (
    <div className="single-product flex flex-col items-center">
      <img
        src="https://www.shopaccino.com/images/decor-banner.png"
        alt="Product image"
        className="single-product-image"
      />
      <div className="single-product-details flex flex-col ">
        <div>
          <p className="capitalize text-center">{productTitle}</p>
          <span>({productCategory})</span>
        </div>
        <div className="star-container flex text-center justify-center">
          {noOfStarts?.map((el) => {
            return <>{el == 1 ? <Star /> : <StarHalf />}</>;
          })}
        </div>
        <div className="product-price text-center">₹{price}</div>
      </div>
    </div>
  );
};

export default SingleProduct;
