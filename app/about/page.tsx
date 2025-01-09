import React from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/about/section_1";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/sections/about/section_2";
import BhaiLog from "@/components/sections/about/section_3";
import PuraaneBhaiLog from "@/components/sections/about/section_4";
const presentNames = [
  "Sahil Maity",
  "Aditya Modi",
  "Sagar Khatri",
  "Worship Sharma",
  "Kalash Doulani",
  "Parag Dulani",
  "Karan Devnani",
  "Akshat Bagrecha",
  "Mahek Puravar",
  "Jay Haryani",
  "Priyansh Gajjar",
  "Jashan Manghani",
  "Vanshita Kanjani",
  "Finaz Ali",
  "Satyam Yadav",
  "Medhanshi Sharma",
  "Dewanshu Mahanand",
];
const Page = () => {
  return (
    <div className="font-oufit">
      <Navbar
        pages={[
          { title: "Home", link: "/" },
          { title: "Kaam Dhaam", link: "/work" },
          { title: "Blogs", link: "/about" },
        ]}
      />
      <Hero />
      <TeamSection />
      <BhaiLog title="Present" names={presentNames} />
      <PuraaneBhaiLog names={presentNames} title="Puraane" bgColor="tertiary" textColor="secondary"  />

      <Footer bg="secondary" />
    </div>
  );
};

export default Page;
