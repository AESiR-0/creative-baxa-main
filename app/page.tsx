import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import MummyKasam from "@/components/sections/MummyKasam";
import PyaareLog from "@/components/sections/PyaareLog";
import Sampark from "@/components/sections/Sampark";
import Testimonials from "@/components/sections/Testimonials";
import Proof from "@/components/sections/Proof";
import Title from "@/components/title";
import Footer from "@/components/Footer";

const eventData = {
  leftSection: {
    title: "Events",
    description:
      "Events ke naam pe hum, badhiya wala entertainment karte hain.",
  },
  rightSection: {
    title: "Upcoming",
    description: "Check out our latest events and performances.",
  },
  content: {
    subtitle: "What We Do",
    title: "Live Events & Shows",
    description:
      "Events karvate hai hum, badhiya wale. Sold out stadium shows se leke intimate club shows takk.",
  },
  events: [
    {
      title: "Private Event",
      description: "Special performance for selected audience members",
      date: "April 2024",
      image: "/static/section/home/hero.png",
    },
    {
      title: "Club Night",
      description: "Intimate club show with live performances and crazy energy",
      date: "March 2024",
      image: "/static/section/home/hero.png",
    },
    {
      title: "Private Event",
      description: "Special performance for selected audience members",
      date: "April 2024",
      image: "/static/section/home/hero.png",
    },
    {
      title: "Private Event",
      description: "Special performance for selected audience members",
      date: "April 2024",
      image: "/static/section/home/hero.jpg",
    },
    {
      title: "Private Event",
      description: "Special performance for selected audience members",
      date: "April 2024",
      image: "/static/section/home/hero.jpg",
    },
  ],
};

const conentData = {
  leftSection: {
    title: "Content",
    description:
      "With brands from different niches under our belt and a shit load of daily insta scrolling, we know exactly how to add value to your consumer.",
  },
  rightSection: {
    title: "Our Work",
    description: "Check out our latest content creations.",
  },
  content: {
    subtitle: "What We Create",
    title: "Content Creation",
    description:
      "From social media to full-scale campaigns, we create content that resonates.",
  },
  events: [
    {
      title: "Private Event",
      description: "Special performance for selected audience members",
      date: "April 2024",
      image: "/static/kaaam dhaam/content/yjhd jkgp.png",
    },
    {
      title: "Club Night",
      description: "Intimate club show with live performances and crazy energy",
      date: "March 2024",
      image: "/static/kaaam dhaam/content/most boring house party.png",
    },
    {
      title: "Private Event",
      description: "Special performance for selected audience members",
      date: "April 2024",
      image: "/static/kaaam dhaam/content/micro.png",
    },
  ],
};

const webData = {
  leftSection: {
    title: "Website",
    description:
      "Hum sirf sundar websites nai banate, we focus on both visual appeal and user experience, resulting in a user-friendly website with easy navigation and a design that aligns with your brand.",
  },
  rightSection: {
    title: "Our Work",
    description: "Check out our latest content creations.",
  },
  content: {
    subtitle: "What We Create",
    title: "Content Creation",
    description:
      "From social media to full-scale campaigns, we create content that resonates.",
  },
  events: [
    {
      title: "Private Event",
      description: "Special performance for selected audience members",
      date: "April 2024",
      image: "/static/kaaam dhaam/website/cb.png",
    },
    {
      title: "blah",
      description: "Intimate club show with live performances and crazy energy",
      date: "March 2024",
      image: "/static/kaaam dhaam/content/visa website.png",
    },
  ],
};

export default function Home() {
  return (
    <div className="font-oufit relative">
      <Navbar
        pages={[
          { title: "Kaam Dhaam", link: "/work" },
          { title: "Humare Baarein Mein", link: "/about" },
        ]}
      />
      <Hero />
      <MummyKasam />
      <div className="bg-white">
        <div className="">
          <Title color="secondary" text="Proof bhi hai" />
          <div className="text-justify bg-tertiary">
            <Proof {...conentData} />
          </div>
        </div>
        <div className="text-justify ">
          <Proof {...webData} />
        </div>
        <div className="text-justify ">
          <Proof {...eventData} />
        </div>
      </div>
      <PyaareLog />
      <div className="bg-white">
        <Title color="secondary" text="not paid" />
        <Testimonials />
      </div>
      <Sampark />
      <Footer bg="teritary" />{" "}
    </div>
  );
}
