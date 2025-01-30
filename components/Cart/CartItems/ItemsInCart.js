import React from "react";
import SingleCartItem from "./SingleCartItem";

const ItemsInCart = () => {
  const arr = [1, 2, 3];
  return (
    <div className="items-in-cart flex flex-col">
      {arr?.map((el, index) => (
        <SingleCartItem key={index} />
      ))}
    </div>
  );
};

export default ItemsInCart;
