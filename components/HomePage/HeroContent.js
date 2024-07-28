import React from "react";
import SearchBar from "./SearchBar";

const HeroContent = () => {
  return (
    <div className="hero-content flex flex-col">
      <h1>Make your interior more minimalistic & modern</h1>
      <p>
        Turn your room with panto into a lot more minimalist <br /> and modern
        with ease and speed
      </p>
      <SearchBar />
    </div>
  );
};

export default HeroContent;
