import { ChevronRight } from "lucide-react";
import Image from "next/image";

const SingleShowcase = ({ title = "", desc = "", image = "" }) => {
  return (
    <div className="single-showcase">
      <div className="showcase-image-container">
        <Image
          className="showcase-image mx-auto	"
          src={image}
          alt="Show image"
          width={100}
          height={100}
        />
      </div>

      <p className="show-case-title">{title}</p>
      <p className="show-case-desc">{desc}</p>
      <ViewMoreBtn />
    </div>
  );
};

export default SingleShowcase;
export const ViewMoreBtn = () => (
  <button className="view-more-btn flex items-center">
    View more <ChevronRight />
  </button>
);
