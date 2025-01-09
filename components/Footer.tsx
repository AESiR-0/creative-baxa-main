import Link from "next/link";
import React from "react";

const navLinks = [
  {
    title: "About us",
    link: "/about",
  },
  {
    title: "Kaam Dhaam",
    link: "/work",
  },
  {
    title: "Sampark",
    link: "/#sampark",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const socialLinks = [
  { title: "Instagram", link: "https://instagram.com/creativebaxa" },
  { title: "LinkedIn", link: "https://linkedin.com" },
  { title: "Privacy Policy", link: "/policies" },
  { title: "Careers", link: "https://hiring.creativebaxa.com" },
];

export default function Footer({ bg }: { bg: string }) {
  return (
    <div
      className={` bg-${bg} uppercase p-10 md:p-20 ${
        bg === "secondary" ? "text-tertiary" : "text-secondary"
      } `}
    >
      <div className="flex flex-col gap-12">
        {/* Heading Section */}
        <div className="">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl text-center md:text-left">
            Let's turn your <br />
            <span className="font-reenieBeanie"> business </span> into <br />a{" "}
            <span className="text-primary">brand</span>.
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row justify-between py-3 items-start lg:items-center gap-10">
          {/* Address and Contact */}
          <div className="text-center lg:text-left">
            <div className="mb-5">
              <h3 className="text-2xl">Drop in for a coffee</h3>
              <span className="lowercase text-xl text-[#808080] block sm:inline">
                address
              </span>
            </div>
            <div className="">
              <h3 className="text-2xl">Say hello</h3>
              <span className="lowercase text-xl text-[#808080] block sm:inline">
                hello@creativebaxa.com
              </span>
            </div>
          </div>

          {/* Navigation and Social Links */}
          <div className="grid gap-10 sm:gap-20 items-start justify-center sm:grid-cols-2 w-full lg:w-auto">
            {/* Navigation Links */}
            <div className="flex flex-col items-center lg:items-end">
              {navLinks.map((item, index) => (
                <div className="pb-2" key={index}>
                  <Link
                    className="text-xl text-[#808080] hover:text-primary transition"
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center lg:items-start">
              {socialLinks.map((item, index) => (
                <div className="pb-2" key={index}>
                  <Link
                    className="text-xl text-[#808080] hover:text-primary transition"
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
