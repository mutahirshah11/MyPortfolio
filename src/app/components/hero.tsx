import React from "react"
import Image from "next/image"
import profile from "../images/photos1/11.jpeg"
import Link from "next/link"
import Typing from "./typinganimation"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  return (
    <div className=" md:my-10">
      {/* Background Grid Effect */}
      <div className="" />
           
           

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            
            
            
            {/* Left Column - Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-6 lg:mt-5">
              <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 px-4 py-2 rounded-full text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Available for New Projects
              </div>

              <div className="space-y-2 flex justify-center items-start flex-col">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  <Typing />
                </h1>
                <p className="text-md lg:text-xl text-gray-400 max-w-2xl">
                  Front-end developer with expertise in Next.js, Tailwind CSS, TypeScript, HTML, and CSS. I build sleek,
                  responsive websites that deliver exceptional user experiences.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="./projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold hover:opacity-90 transition-all group"
                >
                  Explore my work
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="../contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all"
                >
                  Let&apos;s connect
                  <span className="animate-bounce">👋</span>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
                <Link href="https://github.com/mutahirshah11" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/mutahir-hussain-shah-7037602b4/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRqgrwGHWnjfPqfdRCmmSKRThSvQjtHLgTrDMfBpssxFffTtwBmDmkXLpNzsQbRJMrcssCv" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
                
                 {/* Right Column - Profile Image */}
            <div className="relative">
              <div className="relative w-[250px] h-[250px]  md:w-[320px] md:h-[320px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500 via-amber-500 to-blue-600 blur-2xl opacity-30 animate-pulse" />
                <div className="relative h-full rounded-full border-[3px] border-yellow-500/50 p-3 backdrop-blur-sm">
                  <div className="h-full w-full rounded-full border-[3px] border-dashed border-blue-600/50 p-3">
                    <Image
                      src={profile || "/placeholder.svg"}
                      alt="profilepic"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

