import React from "react";
import Navbar from "../Navbar/Navbar";
import CartStepper from "./Stepper/CartStepper";
import { WhyChooseUs } from "../WhyChooseUs/WhyChooseUs";
import Footer from "../Footer/Footer";
import CartItems from "./CartItems/CartItems";

const Cart = () => {
  return (
    <section className="cart ">
      <Navbar blackClass="black" />
      <div className="pt-142px">
        <CartStepper />
        <CartItems />
        <WhyChooseUs />
        <Footer />
      </div>
    </section>
  );
};

export default Cart;
