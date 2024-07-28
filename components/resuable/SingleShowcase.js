import Image from "next/image";

const SingleShowcase = ({ title = "", desc = "", image = "" }) => {
  return (
    <div className="single-showcase">
      <div className="showcase-image-container">
        <Image
          className="showcase-image"
          src={image}
          srcset=""
          alt="Show image"
          // width={100}
          // height={100}
        />
      </div>

      <p className="show-case-title">{title}</p>
      <p className="show-case-desc">{desc}</p>
    </div>
  );
};

export default SingleShowcase;
