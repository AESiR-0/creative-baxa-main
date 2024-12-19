import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import MummyKasam from "@/components/sections/MummyKasam";
import Sampark from "@/components/sections/Sampark";

export default function Home() {
  return (
    <div className="font-codec relative">
      <Navbar pages={[{ title: "Kaam Dhaam", link: "/work" }, { title: "Humare Baarein Mein", link: "/about" }]} />
      <Hero />
      <MummyKasam />
      <Sampark />
    </div>
  );
}
