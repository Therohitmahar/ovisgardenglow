import React from "react";
import coverImage from "../../public/assets/images/coverImage.jpg";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import HeroContent from "./HeroContent";
import FeaturedProduct from "./FeaturedProduct";
import ShowcaseProduct from "./ShowcaseProduct";
import { WhyChooseUs } from "../WhyChooseUs/WhyChooseUs";
import Footer from "../Footer/Footer";
const HomePage = () => {
  return (
    <div className="home-page flex  relative flex-col">
      <div className="image-container">
        <Image src={coverImage} alt="cover" srcset="" className="cover-image" />
        <div className="fade-effect" />
      </div>
      <Navbar />
      <HeroContent />
      <ShowcaseProduct />
      <FeaturedProduct />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HomePage;
