"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";

const bestKaam = {
  name: "Best Kaam<3",
  items: [
    {
      src: "/static/kaaam dhaam/content/yjhd jkgp.png",
      title: "Bollywood Shoot",
    },
    {
      src: "/static/kaaam dhaam/events/jubin concert.png",
      title: "Jubin Nautiyal Concert",
    },
    { src: "/static/kaaam dhaam/events/AE retreat.png", title: "All Events" },
    {
      src: "/static/kaaam dhaam/content/micro.png",
      title: "High On Chai - Podcast",
    },
    { src: "/static/kaaam dhaam/branding/NT.png", title: "North Tandoor" },
    { src: "/static/kaaam dhaam/events/aashish.png", title: "Aashish Solanki" },
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
};

const categories = [
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
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "Best Kaam<3",
  ]);
  const listRefs = useRef<{ [key: string]: HTMLUListElement | null }>({});

  const toggleCategory = (categoryName: string) => {
    if (expandedCategories.includes(categoryName)) {
      const newExpanded = expandedCategories.filter(
        (cat) => cat !== categoryName
      );
      setExpandedCategories(newExpanded);
      const currentList = listRefs.current[categoryName];
      if (currentList) {
        gsap.to(currentList, {
          height: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    } else {
      setExpandedCategories([...expandedCategories, categoryName]);
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
    }
    setActiveCategory(categoryName);
  };

  const filteredItems =
    activeCategory === "Best Kaam<3"
      ? bestKaam.items
      : categories.find((category) => category.name === activeCategory)
          ?.items || [];

  return (
    <div className="flex px-10 font-oufit flex-row w-full min-h-screen bg-secondary text-white">
      {/* Sidebar */}
      <div className="w-1/4 p-6">
        <ul className="space-y-3 text-sm">
          <li>
            <div
              className="cursor-pointer text-lg flex gap-2 items-center hover:text-primary"
              onClick={() => toggleCategory(bestKaam.name)}
            >
              {bestKaam.name}{" "}
              <sup className="text-gray-500 text-xs">
                {bestKaam.items.length}
              </sup>
            </div>
            <ul
              ref={(el) => {
                listRefs.current[bestKaam.name] = el;
              }}
              className={`pl-4 mt-2 space-y-2 text-gray-400 overflow-hidden ${
                expandedCategories.includes(bestKaam.name) ? "" : "hidden"
              }`}
              style={{
                height: expandedCategories.includes(bestKaam.name) ? "auto" : 0,
              }}
            >
              {bestKaam.items.map((item, idx) => (
                <li key={idx} className="cursor-pointer hover:text-primary">
                  <Link href={`#${item.title}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </li>
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
                  expandedCategories.includes(category.name) ? "" : "hidden"
                }`}
                style={{
                  height: expandedCategories.includes(category.name)
                    ? "auto"
                    : 0,
                }}
              >
                {category.items.map((item, idx) => (
                  <li key={idx} className="cursor-pointer hover:text-primary">
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
            <Image
              src={item.src || "/static"}
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
