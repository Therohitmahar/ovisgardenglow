"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SingleProductWrapper = ({ productId, children }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${productId}`);
  };
  return <div onClick={handleClick}>{children}</div>;
};

export default SingleProductWrapper;
