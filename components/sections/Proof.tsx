'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface Event {
    title: string;
    description: string;
    date: string;
    image: string;
}

interface Section {
    title: string;
    description: string;
}

interface Content {
    title: string;
    subtitle: string;
    description: string;
}

interface EventsProps {
    leftSection: Section;
    rightSection: Section;
    content: Content;
    events: Event[];
}

export default function Proof({
    leftSection,
    rightSection,
    content,
    events = [],
}: EventsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigate to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === events.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Navigate to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? events.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const container = containerRef.current;

        if (!container || events.length === 0) return;

        // Animate the container to the current index
        gsap.to(container, {
            x: `-${currentIndex * 100}%`,
            duration: 0.5,
            ease: 'power2.out',
        });
    }, [currentIndex, events.length]);

    return (
        <div className="proof-section relative bg-white text-[#0E0D0D] overflow-hidden">
            <div className="proof-container">
                <section className="h-[600px]">
                    <div className="h-full flex">
                        {/* Left Content - Static */}
                        <div className="w-1/3 p-12 flex flex-col justify-center">
                            <h3 className="text-7xl font-bold text-[#0E0D0D] mb-6">
                                {leftSection.title}
                                <span className="text-[#80D3FF]">.</span>
                            </h3>
                            <p className=" text-2xl">
                                {leftSection.description}
                            </p>
                        </div>

                        {/* Right Carousel Content */}
                        <div className="w-2/3 relative overflow-hidden">
                            {/* Carousel Container */}
                            <div
                                ref={containerRef}
                                className="flex  transition-transform"
                                style={{
                                    width: `${events.length * 100}%`,
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {events.map((event, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-full  flex-shrink-0  rounded-lg text- overflow-hidden"
                                    >
                                        <div className="relative  overflow-hidden">
                                            {event.image ? (
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    height={800}
                                                    width={800}
                                                    className="ml-24"
                                                    sizes="(max-width: 768px) 100vw, 400px"
                                                    priority={index === 0}
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-primary/20" />
                                            )}
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center"
                            >
                                &#8249;
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center"
                            >
                                &#8250;
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
