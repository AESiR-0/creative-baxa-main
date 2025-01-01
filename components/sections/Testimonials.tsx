'use client'
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Title from '../title';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const testimonials = [
        {
            name: 'Dev Badala',
            text: '"Achi baatein aur bohot achi baatein, extremely crazy achi baatein, oh bhai crazy aapka mein le lunga abb"',
        },
        {
            name: 'Dev Badala',
            text: '“Achi baatein aur bohot achi baatein, extremely crazy achi baatein, oh bhai crazy aapka mein le lunga abb”',
        },
        {
            name: 'Dev Badala',
            text: '“Achi baatein aur bohot achi baatein, extremely crazy achi baatein, oh bhai crazy aapka mein le lunga abb”',
        },
        {
            name: 'Dev Badala',
            text: '“Achi baatein aur bohot achi baatein, extremely crazy achi baatein, oh bhai crazy aapka mein le lunga abb”',
        },
    ];

    const animateSlide = (direction: number) => {
        if (isAnimating || !carouselRef.current) return;

        setIsAnimating(true);
        const nextIndex = (currentIndex + direction + testimonials.length) % testimonials.length;

        gsap.to(carouselRef.current.children, {
            x: `${-nextIndex * 100}%`,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                setCurrentIndex(nextIndex);
                setIsAnimating(false);
            }
        });
    };

    const nextSlide = () => animateSlide(1);
    const prevSlide = () => animateSlide(-1);

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentIndex) return;

        const direction = index > currentIndex ? 1 : -1;
        animateSlide(direction);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                nextSlide();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, isAnimating]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const difference = touchStartX.current - touchEndX.current;
        if (Math.abs(difference) > 50) { // minimum swipe distance
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    return (
        <div className="bg-secondary py-10 min-h-screen px-4 sm:px-5">
            <Title color='white' text='Not Paid' />
            <div className="relative max-w-4xl mx-auto mt-10">
                {/* Carousel container */}
                <div 
                    className="overflow-hidden relative min-h-[300px]"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        ref={carouselRef}
                        className="flex absolute w-full h-full"
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 px-4 sm:px-20"
                                style={{
                                    position: 'absolute',
                                    left: `${index * 100}%`,
                                    width: '100%',
                                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                                    transition: 'none'
                                }}
                            >
                                <div className="relative p-6 sm:p-8 border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm">
                                    <h3 className="text-xl sm:text-3xl font-semibold text-white">{testimonial.name}</h3>
                                    <p className="text-lg sm:text-2xl text-tertiary mt-4">{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    disabled={isAnimating}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                             bg-white/10 backdrop-blur-sm hover:bg-white/20 
                             disabled:opacity-50 disabled:cursor-not-allowed 
                             hidden sm:flex z-10"
                    aria-label="Previous slide"
                >
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    disabled={isAnimating}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                             bg-white/10 backdrop-blur-sm hover:bg-white/20 
                             disabled:opacity-50 disabled:cursor-not-allowed 
                             hidden sm:flex z-10"
                    aria-label="Next slide"
                >
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Touch swipe indicators for mobile */}
                <div className="flex sm:hidden justify-between items-center text-white/60 text-sm mt-4 px-4">
                    <span>← Swipe</span>
                    <span>Swipe →</span>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center mt-6 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isAnimating}
                            className={`w-2 h-2 rounded-full transition-colors 
                                ${index === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
