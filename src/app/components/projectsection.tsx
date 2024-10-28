import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import amazonpage from '../images/photos1/amazon.png';
import facebookpage from '../images/photos1/facebook.png';
import comingsoon from '../images/photos1/coming55.png';
import typescript from '../images/photos1/typescript.png';
import html from '../images/photos1/html.png';
import css from '../images/photos1/css-removebg-preview.png';
import tailwind from '../images/photos1/tailwind-removebg-preview.png';
import nextjs from '../images/photos1/Next.js-1.png';
import jwelllery from "../images/photos1/"

const portfolioProjects = [
  {
    ProjectName: "Amazon Web Clone",
    Languages: [
      { title: <Image src={html} alt='htmllogo' width={40} height={10} className="pt-[2px]" /> },
      { title: <Image src={css} alt='csslogo' width={40} height={10} className="pt-[1px]" /> },
      { title: <Image src={typescript} alt='typescriptlogo' width={40} height={10} /> },
    ],
    link: "#",
    image: amazonpage,
  },
  {
    ProjectName: "Facebook Page Clone",
    Languages: [
      { title: <Image src={nextjs} alt='nextjslogo' width={40} height={10} /> },
      { title: <Image src={tailwind} alt='tailwindlogo' width={40} height={10} className="mt-[7px]" /> },
      { title: <Image src={typescript} alt='typescriptlogo' width={40} height={10} /> },
    ],
    link: "https://reume-builder-basic5.vercel.app/",
    image: facebookpage,
  },

  {
    ProjectName: "Coming soon ..",
    Languages: [],
    link: "#",
    image: comingsoon,
  },


  {
    ProjectName: "Facebook Page Clone",
    Languages: [
      { title: <Image src={nextjs} alt='nextjslogo' width={40} height={10} /> },
      { title: <Image src={tailwind} alt='tailwindlogo' width={40} height={10} className="mt-[7px]" /> },
      { title: <Image src={typescript} alt='typescriptlogo' width={40} height={10} /> },
    ],
    link: "https://reume-builder-basic5.vercel.app/",
    image: facebookpage,
  },




  {
    ProjectName: "Facebook Page Clone",
    Languages: [
      { title: <Image src={nextjs} alt='nextjslogo' width={40} height={10} /> },
      { title: <Image src={tailwind} alt='tailwindlogo' width={40} height={10} className="mt-[7px]" /> },
      { title: <Image src={typescript} alt='typescriptlogo' width={40} height={10} /> },
    ],
    link: "https://reume-builder-basic5.vercel.app/",
    image: facebookpage,
  },




  {
    ProjectName: "Facebook Page Clone",
    Languages: [
      { title: <Image src={nextjs} alt='nextjslogo' width={40} height={10} /> },
      { title: <Image src={tailwind} alt='tailwindlogo' width={40} height={10} className="mt-[7px]" /> },
      { title: <Image src={typescript} alt='typescriptlogo' width={40} height={10} /> },
    ],
    link: "https://reume-builder-basic5.vercel.app/",
    image: facebookpage,
  },
  

  
];

const Projectsection = () => {
  return (
    <div className="container mx-auto py-16 px-4 animate-fadeInUp">
      {/* Section Title */}
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          - Real World Projects 
        </p>
      </div>

      <h1 className="font-serif text-3xl sm:text-5xl text-center mt-8 sm:mt-16">
        My Projects
      </h1>
      
      <p className="text-center text-white/60 mt-5 mx-auto w-full sm:w-[80%] lg:w-[60%]">
        See how I transformed concepts into engaging digital experiences.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {portfolioProjects.map((project, index) => (
          <div 
            key={index} 
            className="w-full h-auto py-4  rounded-[20px] border-2 border-black bg-teal-500/20 transition-transform transform hover:scale-105 duration-300"
          >
           

            {/* Project Image */}
            <Image 
              src={project.image} 
              alt={project.ProjectName} 
              className="w-full h-auto border-[0px] pt-0 border-gray-950 mt-[-16px] mx-auto rounded-none rounded-t-[17px] "
            />

             {/* Project Name */}
             <h3 className="text-center text-slate-300  font-bold xl:pb-3 text-lg sm:text-2xl mt-4 border-[0px] border-slate-950 rounded-md w-[80%] mx-auto ">
              {project.ProjectName}
            </h3>
            
            {/* Language Icons */}
            <ul className="flex justify-center mt-4 space-x-4">
              {project.Languages.map((language, index) => (
                <li key={index}>
                  <div className="w-8 sm:w-10">{language.title}</div>
                </li>
              ))}
            </ul>

            {/* View Live Button */}
            <Link href={project.link}>
              <button className="block mx-auto mt-4 bg-yellow-200 text-black font-bold h-[42px] w-auto px-6 rounded-2xl hover:bg-yellow-500 ring ring-yellow-500 transition-all duration-200">
                View Live
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectsection;
