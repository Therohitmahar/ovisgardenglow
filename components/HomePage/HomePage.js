import React from "react";
import coverImage from "../../public/assets/images/coverImage.jpg";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
const HomePage = () => {
  return (
    <div className="home-page flex  relative flex-col">
      <Image src={coverImage} alt="cover" srcset="" className="cover-image" />
      <Navbar />
    </div>
  );
};

export default HomePage;
