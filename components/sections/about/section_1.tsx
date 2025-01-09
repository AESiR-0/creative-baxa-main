import React from "react";
import Image from "next/image";
import bluePaint from "@/public/static/logo/baxa_paint_blue.svg";

export default function Hero() {
  return (
    <div
      style={{ background: "url('/static/section/hero/update/nitya.png')" }}
      className={` text-tertiary w-screen h-screen bg-no-repeat bg-center`}
    >
      <div className="w-full h-full px-20 pt-28 justify-center flex flex-col">
        <h1 className="text-9xl flex flex-col items-start justify-center max-w-lg  font-semibold lowercase leading-[0.75] ">
          A comedian, a writer, and a designer walk into a bar. They come out
          with an incomplete joke and a startup.
          <span className="pt-4 text-[#80D3FF]">
            <Image alt="logo" src={bluePaint} height={400} width={400} />{" "}
          </span>
        </h1>
        <br />
        <h4 className="text-xl">
          We turn businesses into brands that people{" "}
          <span className="text-[#80D3FF]">love</span>.
        </h4>
      </div>
    </div>
  );
}
