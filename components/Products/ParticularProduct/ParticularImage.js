import React from "react";
import astronaut from "../../../public/assets/images/astronaut.png";
import Image from "next/image";
const ParticularImage = () => {
  return (
    <section className="particular-image-wrapper relative">
      <div className="image-backdrop-ball"></div>
      <Image src={astronaut} alt="image" />
    </section>
  );
};

export default ParticularImage;
