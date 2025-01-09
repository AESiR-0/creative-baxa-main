"use client";
import React from "react";
import Image from "next/image";

const TeamSection = () => {
  return (
    <section className="bg-secondary text-tertiary py-16">
      <div className=" container">
        {/* Header */}
        <div className="text-left font-[300] px-20 mb-12">
          <h2 className="text-4xl font-bold mb-4">
            How was baxa packed<span className="text-primary">?</span>
          </h2>
          <p className="text-xl leading-relaxed">
            At Baxa, we’re a mix of creatives who love to fool around to create
            impactful work that solves our clients’ problems while also
            scratching our creative itch. We do branding, content and IP
            creation, website development, events, and everything creative in
            between.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Having started out initially as a comedy club, events hold a special
            place in our hearts and that’s what led us to launch Cheese Box
            Presentations. From conceptualizing to execution, we love to go
            above and beyond merely organizing an event and instead focus on
            crafting unique, immersive, and memorable experiences.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">Made with love, by</h3>
        </div>

        {/* Team Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="w-64  rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/static/team/dev.png"
              alt="Dev Badala"
              width={256}
              height={256}
              className="object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-xl font-semibold">Dev Badala</h4>
              <p className="text-tertiary opacity-80">Founder / CEO</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-64  rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/static/team/keshika.png"
              alt="Keshika Tank"
              width={256}
              height={256}
              className="object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-xl font-semibold">Keshika Tank</h4>
              <p className="text-tertiary opacity-80">Creative Director</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-64  rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/static/team/sunil.png"
              alt="Sunil Kumar"
              width={256}
              height={256}
              className="object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-xl font-semibold">Sunil Kumar</h4>
              <p className="text-tertiary opacity-80">Content Head</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
