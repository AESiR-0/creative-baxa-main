import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import MummyKasam from "@/components/sections/MummyKasam";
import PyaareLog from "@/components/sections/PyaareLog";
import Sampark from "@/components/sections/Sampark";
import Testimonials from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <div className="font-oufit relative">
      <Navbar pages={[{ title: "Kaam Dhaam", link: "/work" }, { title: "Humare Baarein Mein", link: "/about" }]} />
      <Hero />
      <MummyKasam />
      <PyaareLog />
      <Testimonials />
      <Sampark />
    </div>
  );
}
