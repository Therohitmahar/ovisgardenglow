import { BestSellerProducts } from "@/public/Variables/variables";
import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const BestSellerProduct = () => {
  return (
    <div className="best-seller-product mx-auto">
      <h6 className="headingTitle">BESTSELLER PRODUCTS</h6>
      <hr />
      <div className="flex best-seller-product-flex">
        {BestSellerProducts?.map((el) => {
          return (
            <SingleProduct
              key={el?.id}
              el={el}
              price={el?.price}
              imgSrc={el?.image?.src}
              productId={el?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellerProduct;
const SingleBestSeller = ({ el }) => {
  return <div className="bg-white p-4 rounded-md shadow-md"></div>;
};
