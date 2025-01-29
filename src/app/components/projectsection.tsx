import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faEye } from "@fortawesome/free-solid-svg-icons";

// Import your images here
import amazonpage from "../images/photos1/amazon.png";
import facebookpage from "../images/photos1/facebook.png";
import comingsoon from "../images/photos1/coming.jpg";
import typescript from "../images/photos1/typescript.png";
import html from "../images/photos1/html.png";
import css from "../images/photos1/css-removebg-preview.png";
import tailwind from "../images/photos1/tailwind-removebg-preview.png";
import nextjs from "../images/photos1/Next.js-1.png";
import jwel from "../images/clients/jwel2.png";
import perfume from "../images/clients/per.png";
import realestate from "../images/clients/real.png";
import Sofa from "../images/photos1/sofa.png";
import blog from "../images/photos1/blogg.png";

const portfolioProjects = [
  {
    ProjectName: "Cars Dynamic Blog Website ",
    Languages: [
      {
        title: (
          <Image
            src={nextjs || "/placeholder.svg"}
            alt="nextjslogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={tailwind || "/placeholder.svg"}
            alt="tailwindlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={typescript || "/placeholder.svg"}
            alt="typescriptlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
    ],
    link: "https://bloggersapp.vercel.app/",
    image: blog, 
  },


  {
    ProjectName: "Full-Stack E-commerce Website",
    Languages: [
      {
        title: (
          <Image
            src={nextjs || "/placeholder.svg"}
            alt="nextjslogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={tailwind || "/placeholder.svg"}
            alt="tailwindlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={typescript || "/placeholder.svg"}
            alt="typescriptlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
    ],
    link: "https://furnitureheaven-navy.vercel.app/",
    image: Sofa,
  },

  {
    ProjectName: "Jwellery Store UI/UX",
    Languages: [
      {
        title: (
          <Image
            src={nextjs || "/placeholder.svg"}
            alt="nextjslogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={tailwind || "/placeholder.svg"}
            alt="tailwindlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={typescript || "/placeholder.svg"}
            alt="typescriptlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
    ],
    link: "https://jwelery-empire.vercel.app/",
    image: jwel,
  },
  {
    ProjectName: "Perfume Shop UI/UX",
    Languages: [
      {
        title: (
          <Image
            src={nextjs || "/placeholder.svg"}
            alt="nextjslogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={tailwind || "/placeholder.svg"}
            alt="tailwindlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={typescript || "/placeholder.svg"}
            alt="typescriptlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
    ],
    link: "https://perfume-luxelle.vercel.app/",
    image: perfume,
  },
  {
    ProjectName: "Real Estate UI/UX",
    Languages: [
      {
        title: (
          <Image
            src={nextjs || "/placeholder.svg"}
            alt="nextjslogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={tailwind || "/placeholder.svg"}
            alt="tailwindlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={typescript || "/placeholder.svg"}
            alt="typescriptlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
    ],
    link: "https://westopen-orcin.vercel.app/",
    image: realestate,
  },
  {
    ProjectName: "Amazon Web Clone",
    Languages: [
      {
        title: (
          <Image
            src={html || "/placeholder.svg"}
            alt="htmllogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={css || "/placeholder.svg"}
            alt="csslogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={typescript || "/placeholder.svg"}
            alt="typescriptlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
    ],
    link: "#",
    image: amazonpage,
  },
  {
    ProjectName: "Facebook Page Clone",
    Languages: [
      {
        title: (
          <Image
            src={nextjs || "/placeholder.svg"}
            alt="nextjslogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={tailwind || "/placeholder.svg"}
            alt="tailwindlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
      {
        title: (
          <Image
            src={typescript || "/placeholder.svg"}
            alt="typescriptlogo"
            width={32}
            height={32}
            className="object-contain"
          />
        ),
      },
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {portfolioProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.ProjectName}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={project.link}
                  className={`${index === 6 ? "hidden" : "opacity-100"}`}
                >
                  <button className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition-all duration-300">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-3">
                {project.ProjectName}
              </h3>
              <div className="flex justify-between items-center">
                <ul className="flex space-x-3 items-center">
                  {project.Languages.map((language, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-700 rounded-full p-2 w-12 h-12 flex items-center justify-center"
                    >
                      {language.title}
                    </li>
                  ))}
                </ul>
                <Link
                  href={project.link}
                  className={`${index === 5 ? "hidden" : "opacity-100"}`}
                >
                  <button className="text-white hover:text-yellow-500 transition-colors duration-300">
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className="text-xl"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectsection;
