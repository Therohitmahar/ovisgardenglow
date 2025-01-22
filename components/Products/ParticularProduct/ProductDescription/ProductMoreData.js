import Footer from "@/components/Footer/Footer";
import FeaturedTab from "@/components/HomePage/FeaturedProduct/FeaturedTab";
import React from "react";
import DescriptionAndKey from "./DescriptionAndKey";

const ProductMoreData = () => {
  return (
    <>
      <section className="more-product-data">
        <FeaturedTab allKey={["PRODUCT DETAIL", "DELIVERY AND RETURN"]} />
        <div className="description-and-key flex justify-center">
          <DescriptionAndKey>
            <p className="mb-3">
              This table decor piece features a whimsical astronaut figurine,
              designed to bring a sense of wonder and exploration to your space.
              Perfect for adding a unique touch to desks, shelves, or coffee
              tables, this astronaut decor is both playful and stylish.
            </p>
            <p className="font-extrabold	">Usage: </p>
            <ol>
              <li>
                Place on desks, bookshelves, coffee tables, or side tables to
                add an artistic flair.
              </li>
              <li>Perfect for home, office, or studio decor.</li>
            </ol>
          </DescriptionAndKey>
          <DescriptionAndKey title="Key features:">
            <ol>
              <li>1. Material: Made from durable, high-quality resin. </li>
              <li>
                2. Design: Detailed astronaut suit with a modern, minimalist
                aesthetic.{" "}
              </li>

              <li>
                3. The figurine often features the astronaut in various poses
                such as sitting, standing, or floating.
              </li>
              <li>
                4. Finish: Matte or glossy finish, available in various colors
                (e.g., white, gold, silver). Size: Compact size, typically
                ranging from 6 to 12 inches in height.
              </li>
              <li>
                5. Versatility: Suitable for home, office, or kids room decor.
              </li>
            </ol>
          </DescriptionAndKey>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductMoreData;
