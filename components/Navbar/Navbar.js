import { ChevronDown, Heart, ShoppingCart, User } from "lucide-react";
import React from "react";
import LogoComponent from "./LogoComponent";

const Navbar = () => {
  return (
    <section className="navbar flex justify-between absolute w-full items-center">
      <LogoComponent />
      <div className="nav-menu w-1/3">
        <ul className="nav-list uppercase flex w-70 justify-evenly text-white">
          <li>Home</li>
          <li className="flex items-center">
            Shop <ChevronDown />
          </li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="cart-and-profile  text-white flex w-1/5 justify-between">
        <div className="cart cursor-pointer flex justify-between gap-1">
          <ShoppingCart /> <span>1</span>
        </div>
        <div className="cursor-pointer heart">
          <Heart />
        </div>
        <div className="cursor-pointer profile capitalize text-white flex">
          <User /> <span>login / Register</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
