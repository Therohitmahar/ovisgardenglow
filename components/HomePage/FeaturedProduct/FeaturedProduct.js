import React from "react";
import FeaturedTab from "./FeaturedTab";
import { FeaturedProducts } from "@/public/Variables/variables";
import SingleProduct from "@/components/SingleProduct/SingleProduct";

const FeaturedProduct = () => {
  return (
    <div className="featured-product">
      <h6 className="headingTitle">BESTSELLER PRODUCTS</h6>
      <FeaturedTab />
      <div className="product-container flex flex-wrap">
        {FeaturedProducts.map((product, index) => (
          <SingleProduct
            key={product.id}
            productId={product.id}
            el={product}
            price={product?.price}
            imgSrc={product?.image?.src}
            hideCategory={true}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
