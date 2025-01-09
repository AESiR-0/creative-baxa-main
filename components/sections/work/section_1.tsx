"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";

const categories = [
  {
    name: "Best Kaam<3",
    items: [
      { title: "Bollywood Shoot" },
      { title: "Jubin Nautiyal Concert" },
      { title: "All Events" },
      { title: "High On Chai - Podcast" },
      { title: "North Tandoor" },
      { title: "Aashish Solanki" },
      { title: "Most Boring House Party" },
      { title: "Micro Cafe" },
      { title: "Cheesebox Marathon" },
      { title: "Ice Show" },
    ],
  },
  {
    name: "Content Creation",
    items: [
      {
        src: "/static/kaaam dhaam/content/yjhd jkgp.png",
        title: "Bollywood Shoot",
      },
      {
        src: "/static/kaaam dhaam/content/micro.png",
        title: "High On Chai - Podcast",
      },
      {
        src: "/static/kaaam dhaam/events/aashish.png",
        title: "Aashish Solanki",
      },
      {
        src: "/static/kaaam dhaam/content/most boring house party ever.png",
        title: "Most Boring House Party",
      },
      { src: "/static/kaaam dhaam/content/micro.png", title: "Micro Cafe" },
      {
        src: "/static/kaaam dhaam/content/cbx marathon.png",
        title: "Cheesebox Marathon",
      },
      { src: "/static/kaaam dhaam/events/iceshow.png", title: "Ice Show" },
    ],
  },
  {
    name: "Branding",
    items: [
      { src: "/static/kaaam dhaam/branding/NT.png", title: "North Tandoor" },
    ],
  },
  {
    name: "Events",
    items: [
      {
        src: "/static/kaaam dhaam/events/jubin concert.png",
        title: "Jubin Nautiyal Concert",
      },
      { src: "/static/kaaam dhaam/events/AE retreat.png", title: "All Events" },
    ],
  },
  {
    name: "Websites",
    items: [
      { src: "/static/kaaam dhaam/websites/cb.png", title: "Website 1" },
      {
        src: "/static/kaaam dhaam/websites/vosa website.png",
        title: "Website 2",
      },
    ],
  },
  {
    name: "Meta Ads",
    items: [
      { src: "/static/kaaam dhaam/image12.jpg", title: "Ad 1" },
      { src: "/static/kaaam dhaam/image13.jpg", title: "Ad 2" },
    ],
  },
];

export default function FilteredSidebar() {
  const [activeCategory, setActiveCategory] = useState("Best Kaam<3");
  const [expandedCategory, setExpandedCategory] = useState<string>("Best Kaam<3");
  const listRefs = useRef<{ [key: string]: HTMLUListElement | null }>({});

  const toggleCategory = (categoryName: any) => {
    if (expandedCategory === categoryName) {
      const currentList = listRefs.current[categoryName];
      if (currentList) {
        gsap.to(currentList, {
          height: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
      setExpandedCategory("");
    } else {
      const currentList = listRefs.current[categoryName];
      if (currentList) {
        gsap.set(currentList, { height: "auto" });
        const naturalHeight = currentList.offsetHeight;
        gsap.fromTo(
          currentList,
          { height: 0 },
          { height: naturalHeight, duration: 0.3, ease: "power2.out" }
        );
      }
      setExpandedCategory(categoryName);
    }
    setActiveCategory(categoryName);
  };

  const filteredItems =
    activeCategory === "Best Kaam<3"
      ? categories.flatMap((category) => category.items)
      : categories.find((category) => category.name === activeCategory)
          ?.items || [];

  return (
    <div className="flex px-10 font-oufit flex-row w-full min-h-screen bg-secondary text-white">
      {/* Sidebar */}
      <div className="w-1/4 p-6">
        <ul className="space-y-3 text-sm">
          {categories.map((category, index) => (
            <li key={index}>
              <div
                className="cursor-pointer text-lg flex gap-2 items-center hover:text-primary"
                onClick={() => toggleCategory(category.name)}
              >
                {category.name}{" "}
                <sup className="text-gray-500 text-xs">
                  {category.items.length}
                </sup>
              </div>
              <ul
                ref={(el) => {
                  listRefs.current[category.name] = el;
                }}
                className={`pl-4 mt-2 space-y-2 text-gray-400 overflow-hidden ${
                  expandedCategory === category.name ? "" : "hidden"
                }`}
                style={{
                  height: expandedCategory === category.name ? "auto" : 0,
                }}
              >
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer hover:text-primary"
                    onClick={() => setActiveCategory(category.name)}
                  >
                    <Link href={`#${item.title}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 space-y-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            id={item.title}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <Image
              src={item.src || "/placeholder-image.jpg"} // Placeholder if no image
              alt={item.title}
              width={1200}
              height={800}
              className="object-cover w-full h-64 md:h-96"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
