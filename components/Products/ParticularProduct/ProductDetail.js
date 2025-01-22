import React from "react";
import ProductSpecification from "./ProductSpecification";
import ParticularImage from "./ParticularImage";

const ProductDetail = () => {
  return (
    <div className="particular-product-detail flex justify-evenly">
      <ParticularImage />
      <ProductSpecification />
    </div>
  );
};

export default ProductDetail;
