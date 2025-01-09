import React from "react";
import BestKaam from "@/components/sections/work/section_1";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const Page = () => {
  return (
    <div>
      <div className="md:pb-32 bg-secondary">
        <Navbar
          pages={[
            { title: "Home", link: "/" },
            { title: "Humare Baarein Mein", link: "/about" },
          ]}
        />
      </div>
      <BestKaam />
      <Footer bg="teritary" />{" "}
    </div>
  );
};

export default Page;
