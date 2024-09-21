import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo1 from '../images/photos1/Black___Blue_Minimalist_Modern_Initial_Font_Logo-removebg-preview.png'
import Aboutme from './aboutme';
import About from '../about/page';
import ContactP from '../contact/page';
import Reviews from '../reviews/page';
import project from '../projects/page';
import Navbar from './navbar';

const Header = () => {
  return (

    <div >
      <div className='h-1 py-3 ml-[-10px] mt-[-10px] mb-3 animate-fadeInUp '>
      <Link href= ""> 

      <Image src={logo1} alt='logo'   className="ml-8 mt-5 w-[7vw] h-auto border-white/20 border-4 rounded-full "  /> 

      </Link>      
      </div>

         <Navbar/>

    
      </div>
    
  );
};

export default Header;