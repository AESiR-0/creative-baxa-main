import React from 'react';
import Title from '../title';
import Image from 'next/image';
import star from '@/public/static/section/pyaare log/star.png';
import project from '@/public/static/section/pyaare log/project.png';

export default function PyaareLog() {
  return (
    <div className="bg-secondary text-tertiary py-20 ">
      {/* Title Section */}
      <Title color='white' text='Pyaare Logg' />

      {/* Content Section */}
      <div className="flex flex-col w-full md:flex-row items-center px-16 max-md:gap-10 justify-between md:h-[50vh]">
        {/* Team Baxa Photo Placeholder */}
        <div className="h-52 rounded-lg bg-gray-900 w-72 md:w-96 flex items-center justify-center">
          {/* <Image src={''} alt='Team Baxa Photo' layout="fill" objectFit="cover" className="rounded-lg" /> */}
        </div>

        {/* Plus Sign */}
        <div className="flex items-center justify-center text-5xl">+</div>

        {/* Project Image */}
        <div className="w-32 md:w-auto">
          <Image src={project} alt="Project" className="max-w-full" />
        </div>

        {/* Equals Sign */}
        <div className="flex items-center justify-center text-5xl">=</div>

        {/* Epic Shit Section */}
        <div className="text-center mt-5 md:mt-10">
          <h4 className='flex text-4xl md:text-6xl items-center justify-center'>
            <sup className="mr-2"><Image src={star} alt='Star Image' width={30} height={30} /></sup>
            <span>Epic Shit</span>
            <span className='text-[#80D3FF]'>.</span>
          </h4>
          <h4 className='text-lg md:text-xl text-primary mt-2'>(3 oh damn's)</h4>
        </div>
      </div>
    </div>
  );
}
