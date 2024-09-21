import React from 'react';
import Image from 'next/image';
import Stars from '../images/photos1/starsblue.png';
import Book from '../images/photos1/book-cover.png';
import tailwind from '../images/photos1/Tailwind-CSS.png';
import html from '../images/photos1/html.png';
import css from '../images/photos1/css-removebg-preview.png';
import typescript from '../images/photos1/typescript.png';
import next from '../images/photos1/Next.js-1.png';
import Karachi from '../images/photos1/karachi.png';
import emoji from '../images/photos1/memoji-smile.png';

const toolbox = [
  { title: 'Html', icon: html },
  { title: 'Typescript', icon: typescript },
  { title: 'Css', icon: css },
  { title: 'Tailwind css', icon: tailwind },
  { title: 'Next.js', icon: next },
];

const hobbies = [
  { title: 'Gardening', emoji: '🌱' },
  { title: 'Hockey', emoji: '🏑' },
  { title: 'Basketball', emoji: '🏀' },
  { title: 'Debating', emoji: '🙋‍♂️' },
  { title: 'Gaming', emoji: '🎮' },
  { title: 'Photography', emoji: '📸' },
  { title: 'Reading', emoji: '📰' },
];

const Aboutme = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 animate-fadeInUp">
      <div className="container mx-auto my-[-30px]">
        {/* Section Title */}
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            - About Me
          </p>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-center mt-8 sm:mt-16">
          Glance into My World
        </h1>

        <p className="text-center text-white/60 mt-5 mx-auto w-[90%] sm:w-[60%]">
          Learn more about who I am, what I do, and what inspires me.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {/* My Reads Card */}
          <div className="bg-gray-800 rounded-3xl px-6 border-gray-700 border-4 max-w-lg mx-auto h-auto flex flex-col justify-between">
            <div className="inline-flex items-center gap-2 mt-2">
              <Image src={Stars} alt="stars" className="w-7 text-emerald-300" />
              <h3 className="font-serif text-3xl">My Reads</h3>
            </div>
            <p className="text-sm text-white/60 mt-3">
              Explore the book shaping my thinking.
            </p>
            <div className="w-24 mx-auto mt-5">
              <Image src={Book} alt="book" className="hover:animate-flipY" />
            </div>
          </div>


          {/* Map Card */}
          <div className="bg-gray-800 rounded-3xl border-gray-700 border-4 max-w-lg mx-auto h-auto relative p-0 mt-3 ">
            <Image src={Karachi} alt="karachi-map" className="w-full h-full rounded-3xl object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-green-400/80 border-gray-500 border-[1px] animate-blink ">
              <Image src={emoji} alt="smiling emoji" className="w-full h-full hover:animate-wiggle" />
            </div>
          </div>

          

          {/* Beyond the Code Card */}
          <div className="bg-gray-800 rounded-3xl px-6 border-gray-700 border-4 w-full h-auto max-w-lg mx-auto flex flex-col  ">
            <div className="inline-flex items-center gap-2 mt-2">
              <Image src={Stars} alt="stars" className="w-7 text-emerald-300" />
              <h3 className="font-serif text-3xl">Beyond the Code</h3>
            </div>
            <p className="text-sm text-white/60 mt-3">
              Explore my interests and hobbies beyond the digital realm.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="flex border-black border-[3px] gap-2 px-4 py-2 bg-gradient-to-l from-yellow-400 to-blue-600 rounded-full hover:animate-tada "
                >
                  <span className="font-bold text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </div>


          {/* My Tools Card */}
          <div className="bg-gray-800 rounded-3xl px-6 border-gray-700 border-4 w-full h-auto max-w-lg mx-auto flex flex-col">
            <div className="inline-flex items-center gap-2 mt-2">
              <Image src={Stars} alt="stars" className="w-7 text-emerald-300" />
              <h3 className="font-serif text-3xl">My Tools</h3>
            </div>
            <p className="text-sm text-white/60 mt-3">
              Explore the technologies and tools I use to craft exceptional digital experiences.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
              {toolbox.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-6 p-3 outline outline-3 outline-black/60 rounded-lg hover:bg-slate-200/30 w-full sm:w-auto"
                >
                  <Image src={item.icon} alt={item.title} className="w-10 h-10" />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
