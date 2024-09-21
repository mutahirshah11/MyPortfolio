import React from 'react';
import Image from 'next/image';
import profile from '../images/photos1/11.jpeg';

const Hero = () => {
  return (
    <div className="relative">
      <div className="py-16 sm:py-32">
        <div className="flex flex-col items-center">
          <Image 
            src={profile} 
            alt="profilepic" 
            className="w-[150px] sm:w-[200px] animate- h-auto border-[13px] border-l-yellow-500 border-r-yellow-500 border-t-blue-600 border-b-blue-600 rounded-full border-dashed opacity-90 animate-tada "
          />

          <div className="bg-gray-950 border border-gray-700 px-4 py-1.5 inline-flex rounded-[20px] mt-[10px]">
            <div className="pb-[2px] animate-pulseFast">🟢</div>
            <div className="text-sm font-semibold pl-[3px] pt-[2.5px]">Available for New Projects</div>
          </div>
        </div>

        <h1 className="font-serif font-semibold text-3xl sm:text-5xl text-center mt-[15px] ml-4">
          Mutahir Hussain Shah
        </h1>

        <p className="mt-4 text-center text-white text-sm sm:text-base ml-1">
          Front-end developer with expertise in Next.js, Tailwind CSS, TypeScript, HTML, and CSS. I build sleek, responsive websites that deliver exceptional user experiences.
        </p>

        <p className="mt-4 text-center text-white text-sm sm:text-base ml-1">
          Let&apos;s turn your vision into a stunning reality!
        </p>

        <div className="flex flex-col items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border-yellow-500 border-[3px] rounded-xl px-4 sm:px-6 h-10 sm:h-12 hover:bg-blue-900/95">
            <span className="font-semibold">Explore my work</span>
            <span className="size-4 mb-1">🔍</span>
          </button>

          <button className="inline-flex items-center gap-2 border border-white/15 rounded-xl px-4 sm:px-6 h-10 sm:h-12 bg-white text-black hover:bg-yellow-500 transition duration-700">
            <span className="font-semibold">Let&apos;s connect</span>
            <span className="size-4 mb-2 animate-bounce">👋</span>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
