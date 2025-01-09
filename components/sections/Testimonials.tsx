"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Dev Badala",
      text: '"Achi baatein aur bohot achi baatein, extremely crazy achi baatein, oh bhai crazy aapka mein le lunga abb."',
    },
    {
      name: "Dev Badala",
      text: '"Achi baatein aur bohot achi baatein, extremely crazy achi baatein, oh bhai crazy aapka mein le lunga abb."',
    },
    {
      name: "Dev Badala",
      text: '"Achi baatein aur bohot achi baatein, extremely crazy achi baatein, oh bhai crazy aapka mein le lunga abb."',
    },
  ];

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="bg-white px-4 sm:px-5 py-10 pb-40">
      <div className="max-w-4xl mx-auto">
        
        <div className="relative overflow-hidden">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-6"
                aria-hidden={currentIndex !== index}
              >
                <div className="p-6 border px-20 rounded-lg  ">
                  <h3 className="text-xl font-semibold text-[#0E0D0D]">
                    {testimonial.name}
                  </h3>
                  <p className="text-lg text-[#0E0D0D] mt-4">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            className="absolute  top-1/2 -translate-y-1/2 bg-[#0E0D0D] p-2 rounded-full shadow-md hover:bg-[#272626]"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </Button>
          <Button
            variant="ghost"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0E0D0D] p-2 rounded-full shadow-md hover:bg-[#272626]"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full",
                index === currentIndex ? "bg-[#0E0D0D]" : "bg-gray-300"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
