"use client";
import { usePathname, useParams } from "next/navigation";
import React from "react";
const AboutPage = () => {
  const pathname = useParams();

  return <div>{pathname?.name}</div>;
};

export default AboutPage;
