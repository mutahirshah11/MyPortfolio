import React from 'react'
import Linkedin from '../images/photos1/linkedin-removebg-preview.png'
import Image from 'next/image'
import insta from '../images/photos1/instagram-removebg-preview.png'
import Link from 'next/link'
import facebook from '../images/photos1/facebookicon-removebg-preview.png'

const Contact = () => {
  return (
    <div className='py-12'>
      <div className='container mx-auto px-4 sm: mt-20'>
        <div className='mt-10 bg-gradient-to-l from-yellow-500 to-sky-500 text-black font-normal text-center py-8 px-6 border-2 w-full md:w-[80%] lg:w-[70%] mx-auto h-auto border-black rounded-3xl'>
          <h2 className='font-serif font-semibold text-2xl md:text-3xl'>
            Let's create something amazing together
          </h2>
          <p className='text-sm md:text-md mt-3'>
            Want to bring your imaginable project to life? Let's connect and discuss how I can help you achieve your goals.
          </p>

          <div className='text-white bg-gray-900 inline-flex justify-center items-center rounded-xl font-sans w-full md:w-[265px] h-[40px] text-center border-black border-2 mt-4'>
            <p className='mt-1 font-semibold text-sm md:text-md'>
              Contact Me on my Social handles
            </p>
          </div>

          
        </div>

        <div className='mt-8  flex justify-center'>
            <div className="flex space-x-4 md:space-x-6  items-center">
              <Link href={'https://www.linkedin.com/in/mutahir-hussain-shah-7037602b4/'}>
                <Image src={Linkedin} alt="linkedin-icon" className="w-8 md:size-20 sm:size-10 "/>
              </Link>
              <Link href={'https://www.facebook.com/mutahir.mudasir/'}>
                <Image src={facebook} alt="facebook-icon" className="w-8 md:size-20 sm:size-10 "/>
              </Link>
              <Link href={'https://www.instagram.com/mutahir.shahh/'}>
                <Image src={insta} alt="insta-icon" className="w-8 md:size-20 sm:size-10"/>
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact;
