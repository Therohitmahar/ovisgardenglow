import React from "react";
import SingleShowcase from "../resuable/SingleShowcase";
import astronaut from "../../public/assets/images/astronaut.png";
function ShowcaseProduct() {
  return (
    <div className="showcase-product flex text-black justify-center items-center">
      <SingleShowcase
        title="Astronaut"
        desc="Upgrade your space with our modern hanging light, featuring sleek lines, energy-efficient LED lighting, and adjustable height."
        image={astronaut}
      />
      <MiddleProduct />
      <SingleShowcase />
    </div>
  );
}

export default ShowcaseProduct;

const MiddleProduct = () => {
  return <div>ShowcaseProduct</div>;
};
