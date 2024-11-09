import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import amazonpage from '../images/photos1/amazon.png';
import facebookpage from '../images/photos1/facebook.png';
import comingsoon from '../images/photos1/coming.jpg';
import typescript from '../images/photos1/typescript.png';
import html from '../images/photos1/html.png';
import css from '../images/photos1/css-removebg-preview.png';
import tailwind from '../images/photos1/tailwind-removebg-preview.png';
import nextjs from '../images/photos1/Next.js-1.png';
import jwel from "../images/clients/jwel2.png"
import perfume from "../images/clients/per.png"
import realestate from "../images/clients/real.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faEye } from '@fortawesome/free-solid-svg-icons';


const portfolioProjects = [
  
  {
    ProjectName: "Jwellery Store UI/UX",
    Languages: [
      { title: <Image src={nextjs} alt='nextjslogo' width={40} height={10} /> },
      { title: <Image src={tailwind} alt='tailwindlogo' width={40} height={10} className="mt-[7px]" /> },
      { title: <Image src={typescript} alt='typescriptlogo' width={40} height={10} /> },
    ],
    link: "https://jwelery-empire.vercel.app/",
    image: jwel,
  },




  {
    ProjectName: "Perfume Shop UI/UX",
    Languages: [
      { title: <Image src={nextjs} alt='nextjslogo' width={40} height={10} /> },
      { title: <Image src={tailwind} alt='tailwindlogo' width={40} height={10} className="mt-[7px]" /> },
      { title: <Image src={typescript} alt='typescriptlogo' width={40} height={10} /> },
    ],
    link: "https://perfume-luxelle.vercel.app/",
    image: perfume,
  },




  {
    ProjectName: "Real Estate UI/UX",
    Languages: [
      { title: <Image src={nextjs} alt='nextjslogo' width={40} height={10} /> },
      { title: <Image src={tailwind} alt='tailwindlogo' width={40} height={10} className="mt-[7px]" /> },
      { title: <Image src={typescript} alt='typescriptlogo' width={40} height={10} /> },
    ],
    link: "https://westopen-orcin.vercel.app/",
    image: realestate,
  },
  

  
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
    link: "#",
    image: facebookpage,
  },

  {
    ProjectName: "Coming soon Inshallah ..",
    Languages: [],
    link: "#",
    image: comingsoon,
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
      <div className='flex flex-col justify-center items-center'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mt-24">
        {portfolioProjects.map((project, index) => (
          <div 
            key={index} 
            className="w-[340px] h-[372px] md:h-[360px] lg:w-[320px] lg:h-[360px] xl:w-[390px] xl:h-[380px] cursor-pointer py-4  rounded-[20px] border-2 border-black bg-teal-500/20 transition-transform transform hover:scale-105 duration-300"
          >
           

            {/* Project Image */}
            <Image 
              src={project.image} 
              alt={project.ProjectName} 
              className="w-full xl:h-[205px] lg:h-[185px] md:h-[180px] h-[190px] border-[0px] pt-0 border-gray-950 mt-[-16px] mx-auto rounded-none rounded-t-[17px] "
            />

             {/* Project Name */}
             <h3 className="text-center text-slate-300  font-bold xl:pb-3 text-xl md:text-2xl mt-4 border-[0px] border-slate-950 rounded-md w-[80%] mx-auto ">
              {project.ProjectName}
            </h3>
            
            {/* Language Icons */}
            <ul className="flex justify-center mt-4 space-x-4">
              {project.Languages.map((language, index) => (
                <li key={index}>
                  <div className="w-10">{language.title}</div>
                </li>
              ))}
            </ul>

            {/* View Live Button */}
            <Link href={project.link} className={`${index === 5 ? 'hidden' : 'opacity-100'}`}>
              <div className=''>
              <button className=" mt-5 bg-gray-200 text-black font-bold h-[35px] w-[35px] md:mt-2 lg:mt-3 rounded-full hover:bg-yellow-500 hover:ring-yellow-500 ring ring-gray-200 transition-all duration-700 ml-[280px] lg:ml-[265px] xl:mt-0 xl:ml-[325px]  ">
              <FontAwesomeIcon icon={faArrowRightLong} className='xl:size-6 xl:ml-1.5  size-5 ml-1.5   ' />
              </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
     </div>
      );
    };
      

export default Projectsection;
