import Logo from "@/public/assets/images/Logo";
import React from "react";

const LogoComponent = () => {
  return (
    <div className="logo-container flex flex-col">
      <div className="flex items-end gap-2">
        <span>Ovis</span>
        <Logo />
      </div>
      <div className="flex">Garden Glow</div>
    </div>
  );
};

export default LogoComponent;
