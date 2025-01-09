import React from "react";
import Image from "next/image";
import bluePaint from "@/public/static/logo/baxa_paint_blue.svg";

export default function Hero() {
  return (
    <div
      style={{ background: "url('/static/section/home/hero_about.jpg')" }}
      className={` text-tertiary w-screen h-screen bg-no-repeat bg-center`}
    >
      <div className="w-full h-full px-20 pb-20  justify-end flex flex-col">
        <h1 className="text-4xl flex flex-col items-start justify-center max-w-xl  font-bold  leading-[1] ">
          <span>
            {" "}
            A comedian, a writer, and a designer walk into a bar. They come out
            with{" "}
            <span className="text-primary">
              an incomplete joke and a startup.
            </span>{" "}
          </span>
        </h1>
        <br />
      </div>
    </div>
  );
}
