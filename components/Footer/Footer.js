import WhatsappIcon from "@/public/assets/svg/WhatsappIcon";
import { linksData } from "@/public/Variables/FooterLinkVariables";
import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr />
      <FooterLinks />
      <hr />

      <CopyRight />
    </footer>
  );
};

export default Footer;

const CopyRight = () => {
  return (
    <div className="copy-right mx-auto flex justify-between">
      <div className="copy-right-text">
        Ovis Garden glow © Copyright 2020, Inc. All rights reserved
      </div>
      <div className="social-links flex">
        <Link href={"https://www.instagram.com/garden_glow04/"} target="_blank">
          <Instagram strokeWidth={1.5} />
        </Link>
        <Link href="https://wa.me/9892024557" target="_blank">
          <WhatsappIcon />
        </Link>
      </div>
    </div>
  );
};

export const toKebabCase = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "and");
};

const FooterLinks = () => {
  return (
    <div className="footer-links flex justify-evenly ">
      {linksData.map((section, index) => (
        <div key={index} className="">
          <h3 className="">{section.title}</h3>
          <ul className="">
            {section.links.map((link, linkIndex) => {
              const kebabCaseRoute = toKebabCase(link);
              return (
                <li key={linkIndex} className="cursor-pointer">
                  <Link href={`about/${kebabCaseRoute}`}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};
