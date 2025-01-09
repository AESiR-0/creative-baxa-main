"use client";
import React from "react";

interface BhaiLogProps {
  title: string;
  names: string[];
  bgColor?: string; // Background color
  textColor?: string; // Text color
  highlightColor?: string; // Highlighted name background color
  highlightTextColor?: string; // Highlighted name text color
}

const BhaiLog: React.FC<BhaiLogProps> = ({
  title,
  names,
  bgColor = "bg-secondary",
  textColor = "text-tertiary",
  highlightColor = "bg-primary",
  highlightTextColor = "text-tertiary",
}) => {
  return (
    <section className={`${bgColor} ${textColor} py-8`}>
      <div className="container mx-auto px-20">
        {/* Section Header */}
        <h2 className="text-5xl font-bold mb-10">
          {title} Bhailog <span className="text-primary">!</span>
        </h2>

        {/* Names List */}
        <div className="flex max-w-5xl flex-wrap gap-y-3 gap-x-7">
          {names.map((name, index) => (
            <div
              key={index}
              className={`  rounded-md  text-2xl`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BhaiLog;
