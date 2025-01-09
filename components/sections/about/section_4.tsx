"use client";
import React from "react";
import Link from "next/link";
interface PuraaneBhaiLogProps {
  title: string;
  names: string[];
  bgColor?: string; // Background color
  textColor?: string; // Text color
  highlightColor?: string; // Highlighted name background color
  highlightTextColor?: string; // Highlighted name text color
}

const PuraaneBhaiLog: React.FC<PuraaneBhaiLogProps> = ({
  title,
  names,
  bgColor = "bg-secondary",
  textColor = "text-tertiary",
  highlightColor = "bg-primary",
  highlightTextColor = "text-tertiary",
}) => {
  return (
    <section className={`${bgColor} ${textColor} py-8 my-5`}>
      <div className="container mx-auto px-20">
        {/* Section Header */}
        <h2 className="text-5xl font-bold mb-10">
          {title} PuraaneBhaiLog <span className="text-primary">{":)"}</span>
        </h2>

        {/* Names List */}
        <div className="flex max-w-5xl flex-wrap gap-y-3 gap-x-7">
          {names.map((name, index) => (
            <div key={index} className={`rounded-md text-2xl`}>
              {name}
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="max-w-5xl  text-2xl font-medium">
          We love to constantly challenge ourselves creatively to come up with
          fresh ideas and keep the imposter syndrome at bay. So, if you're stuck
          with a problem, we would be more than happy to make it ours!
          <br />
          <br />
          love,
          <br />
          Team Baxa
        </div>
      </div>
      <Link href={"/#contact"}>
        <button
          type="submit"
          className="bg-[#80D3FF] py-3 px-12 text-center my-5 mx-20 rounded-xl text-secondary font-semibold hover:bg-[#80D3FF] "
        >
          <span className="flex gap-5 text-xl">
            Get in touch
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </span>
        </button>
      </Link>
    </section>
  );
};

export default PuraaneBhaiLog;
