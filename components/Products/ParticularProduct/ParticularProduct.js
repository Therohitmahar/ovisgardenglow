import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import ProductDetail from "./ProductDetail";
import ProductMoreData from "./ProductDescription/ProductMoreData";

const ParticularProduct = () => {
  return (
    <section className="particular-product-page">
      <Navbar blackClass="black" />
      <ProductDetail />
      <ProductMoreData />
    </section>
  );
};

export default ParticularProduct;
