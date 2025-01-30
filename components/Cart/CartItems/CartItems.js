import React from "react";
import ItemsInCart from "./ItemsInCart";
import OrderSummary from "./OrderSummary";

const CartItems = () => {
  return (
    <section className="flex cart-items justify-center">
      <ItemsInCart />
      <div className="divider-div" />
      <OrderSummary />
    </section>
  );
};

export default CartItems;
