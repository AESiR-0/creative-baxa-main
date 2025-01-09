import React from "react";
import Title from "../title";

export default function MummyKasam() {
  return (
    <div className="bg-secondary text-tertiary w-screen">
      <div className="self-start ">
        <Title text="Mummy Kasam" color="white" />
      </div>
      <div className=" flex items-center  justify-center flex-col  h-[75vh]">
        <p className="leading-snug max-w-5xl text-center text-4xl font-normal">
          With our Meta Ads UCP got <span className="text-[#80D3FF]">66%</span>.
          more traction on their page North Tandoor saw a 25% increase in{" "}
          <span className="text-[#80D3FF]"> Swiggy/Zomato Sales </span>{" "}
          <span className="text-[#80D3FF]"> GrandDad Jokes </span>
          garnered a total of 200k views and All Events had a  <span className="text-[#80D3FF]">50ft long flex</span> on
          their App Launch Event!
        </p>
      </div>
    </div>
  );
}
