import Image from "next/image";
import React from "react";
import astronaut from "../../../public/assets/images/astronaut.png";
import StarHalf, { Star } from "@/public/assets/svg/Stars";
import ColorSwitcher from "./ColorSwitcher";
import { QuantityIncreaseBtn } from "@/components/Products/ParticularProduct/TypesSwitch";

const SingleCartItem = () => {
  const dummy = {
    id: "P001",
    name: "Astronaut",
    category: "Table Decor",
    price: 1450.0,
    originalPrice: 1750.0,
    image: "deer2", // Replace with stock image link
    stars: 5,
  };
  return (
    <section className="single-cart-item flex shadow-sm">
      <div className="cart-item-image-wrapper">
        <Image src={astronaut} alt="cart-item" height={"150px"} />
      </div>
      <div className="cart-item-details flex flex-col justify-center">
        <p className="text-12px font-bold">{dummy.name}</p>
        <p className="text-12px">({dummy.category})</p>

        <p className="flex stars-wrapper mb-4">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </p>
        <ColorSwitcher />
      </div>
      <div className="price-and-quantity self-end ml-auto ">
        <QuantityIncreaseBtn />
        <div className="price-tag-cart mt-5 text-15px text-right">
          <p className="price">₹{dummy.originalPrice}.00</p>
        </div>
      </div>
    </section>
  );
};

export default SingleCartItem;
