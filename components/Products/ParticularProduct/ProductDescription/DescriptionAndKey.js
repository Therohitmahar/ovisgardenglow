import React from "react";

const DescriptionAndKey = ({ title = "Description", children = "" }) => {
  return (
    <section className="reusable-description">
      <h4>{title}</h4>
      <div className="description-text">{children}</div>
    </section>
  );
};

export default DescriptionAndKey;
