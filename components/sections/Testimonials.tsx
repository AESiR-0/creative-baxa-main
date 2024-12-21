import React from 'react';

export default function Testimonials() {
    const testimonials = [
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
        {
            name: 'Dev Badala',
            text: '“Achi baatein aur bohot achi baatein, extremely crazy achi baatein, oh bhai crazy aapka mein le lunga abb”',
        },
    ];

    return (
        <div className="bg-gray-100 py-10 px-5">
            <h1 className="text-center text-2xl font-bold mb-8">Not Paid.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="relative p-6 bg-white border border-gray-300 rounded-lg shadow-md"
                    >
                        <svg
                            className="absolute -top-5 left-1/2 transform -translate-x-1/2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 430 286"
                            fill="currentColor"
                        >
                            <path d="M397.5 5.10623H31.8136C17.0774 5.10623 5.13123 16.9942 5.13123 31.6587V195.302C5.13123 207.71 15.2395 217.769 27.7087 217.769H255.536C265.168 217.769 273.988 223.137 278.376 231.67L303.114 279.779C303.997 281.498 306.563 281.15 306.952 279.258L314.557 242.266C317.488 228.007 330.095 217.769 344.719 217.769H397.5C412.236 217.769 424.182 205.881 424.182 191.217V31.6586C424.182 16.9942 412.236 5.10623 397.5 5.10623ZM31.8136 0C14.2435 0 0 14.1741 0 31.6587V195.302C0 210.53 12.4056 222.875 27.7087 222.875H255.536C263.242 222.875 270.298 227.17 273.808 233.996L298.546 282.105C301.639 288.121 310.618 286.902 311.979 280.281L319.584 243.289C322.027 231.407 332.532 222.875 344.719 222.875H397.5C415.07 222.875 429.314 208.701 429.314 191.217V31.6586C429.314 14.1741 415.07 0 397.5 0H31.8136Z" />
                        </svg>
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600 mt-2">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
