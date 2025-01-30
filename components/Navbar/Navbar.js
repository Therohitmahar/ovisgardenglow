import { ChevronDown, Heart, ShoppingCart, User } from "lucide-react";
import React from "react";
import LogoComponent from "./LogoComponent";
import Link from "next/link";

const Navbar = ({ blackClass = "" }) => {
  // const windowName = windo;

  return (
    <section
      className={`navbar flex justify-between absolute w-full items-center ${blackClass}`}
    >
      <LogoComponent />
      <div className="nav-menu w-1/3">
        <ul className="nav-Linkst uppercase flex w-70 justify-evenly text-white">
          <Link href="/">Home</Link>
          <Link className="flex items-center" href="/products">
            Shop <ChevronDown />
          </Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/about-us"}>About Us</Link>
        </ul>
      </div>
      <div
        className={`cart-and-profile ${
          blackClass ? "text-[#2F302C]" : "text-white"
        } flex w-1/5 justify-between`}
      >
        <div className="cart cursor-pointer flex justify-between gap-1">
          <Link className="flex items-center" href="/cart">
            <ShoppingCart /> <span>1</span>
          </Link>
        </div>
        <div className="cursor-pointer heart">
          <Heart />
        </div>
        <div
          className={`cursor-pointer profile capitaLinkze ${
            blackClass ? "text-[#2F302C]" : "text-white"
          }  flex`}
        >
          <User /> <span>login / Register</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
