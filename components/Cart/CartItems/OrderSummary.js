import PrimaryBtn from "@/components/resuable/Buttons/PrimaryButton";
import React from "react";

const OrderSummary = () => {
  return (
    <section className="order-summary flex flex-col">
      <div className="header">
        <h6 className="headingTitle cart-header" style={{}}>
          ORDER SUMMARY
        </h6>
        <p className="text-12px text-[#7E7F7C] ">
          Apply your monthly voucher to get more discount!
        </p>
      </div>
      <div className="calculation-cart">
        <div className="flex justify-between mb-18px">
          <p className="text-12px">Subtotal</p>
          <p className="text-12px">₹1,800.0</p>
        </div>
        <div className="flex justify-between mb-18px">
          <p className="text-12px">Shipping</p>
          <p className="text-12px">₹0.0</p>
        </div>
        <div className="flex justify-between mb-18px">
          <p className="text-12px">Total</p>
          <p className="text-12px">₹1,800.0</p>
        </div>
      </div>
      <div className="proceed-to-checkout">
        <PrimaryBtn className="w-full text-center">
          PROCEED TO CHECKOUT
        </PrimaryBtn>
      </div>
    </section>
  );
};

export default OrderSummary;
