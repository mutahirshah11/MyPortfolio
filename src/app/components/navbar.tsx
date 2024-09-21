import React from 'react'
import Link from 'next/link'



const Navbar = () => {
  return (
    <div>
        
         {/* Navigation */}
      <div className="flex justify-center  mt-5 animate-fadeIn ">

<nav className="flex flex-wrap sm:flex-nowrap justify-center gap-2 p-1 sm:p-2 border border-white/15 rounded-full bg-white/15 backdrop-blur fixed top-0  z-50 mt-6 ">
<Link href="/" className="px-3 sm:px-5 py-2 text-xs sm:text-base rounded-full text-white/80 font-semibold hover:bg-white/50 transition duration-150">
Home
</Link>
<Link href="../projects/" className="px-3 sm:px-5 py-2 text-xs sm:text-base rounded-full text-white/80 font-semibold hover:bg-white/50 transition duration-150">
Projects
</Link>
<Link href="../about/" className="px-3 sm:px-5 py-2 text-xs sm:text-base rounded-full text-white/80 font-semibold hover:bg-white/50 transition duration-150">
About
</Link>

<Link href="../reviews/" className="px-3 sm:px-5 py-2 text-xs sm:text-base rounded-full text-white/80 font-semibold hover:bg-white/50 transition duration-150">
Reviews
</Link>
<Link href="../contact/" className="px-3 sm:px-5 py-2 text-xs sm:text-base rounded-full bg-white text-black/95 font-semibold hover:bg-yellow-400 transition duration-700 hover:animate-flipX">
Contact
</Link>
</nav>

       <div>
          <Link href='#' ></Link>
          <Link href='#' ></Link>
          <Link href='#' ></Link>
          <Link href='#' ></Link>
        </div>


</div>

    </div>
  )
}

export default Navbar