import React from 'react';
import Image from 'next/image';
import callOut from '@/public/static/section/testimonial/testimonial.png'
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
            <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="relative p-6  border border-gray-800 rounded-lg shadow-md"
                    >
                        <Image
                            src={callOut}
                            width={256}
                            height={256}
                            alt="Testimonial Call out"
                            className="absolute -top-5 left-1/2 transform -translate-x-1/2"
                        />
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600 mt-2">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
