import React from "react";
import SingleShowcase, { ViewMoreBtn } from "../resuable/SingleShowcase";
import astronaut from "../../public/assets/images/astronaut.png";
import flowerWas from "../../public/assets/images/flowerWas.png";
import restingHand from "../../public/assets/images/restingHand.png";

import Image from "next/image";
function ShowcaseProduct() {
  return (
    <div className="showcase-product flex text-black justify-center items-center">
      <SingleShowcase
        title="Astronaut"
        desc="Upgrade your space with our modern hanging light, featuring sleek lines, energy-efficient LED lighting, and adjustable height."
        image={astronaut}
      />
      <MiddleProduct />
      <SingleShowcase
        title="Resting Head Decor"
        desc="a stylish and aesthetic addition to any room, with its Unique design and eye catching Decor creating the ultimate table experience."
        image={restingHand}
      />
    </div>
  );
}

export default ShowcaseProduct;

const MiddleProduct = () => {
  return (
    <div className="middle-product flex items-center flex-col">
      <div className="content text-center flex flex-col items-center">
        <p className="show-case-title">Square Pot Marble </p>
        <p className="show-case-desc text-center">
          Introducing our newest Pot, the perfect combination of style. Designed
          to elevate your living space and provide ultimate View.
        </p>
        <Image src={flowerWas} height={225} width={226} />
        <ViewMoreBtn />
      </div>
    </div>
  );
};
