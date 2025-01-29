import React from 'react'
import Image from 'next/image'
import izaan from "../images/clients/izaan.jpg"
import rebaal from "../images/clients/rebaal.jpg"
import muneeb from "../images/clients/muneeb.jpg"
import ayaan from "../images/clients/ayaan.jpg"
import salaar from "../images/clients/salaar.jpg"



const clients = [
    {
        name: "Rebaal Yaseen",
        position : "Junior Developer at SVG Tech"  ,
        text : "Working with Mutahir was an absolute pleasure! . His attention to detail and professionalism are top-notch. Highly recommended ! " , 
        avatar : rebaal
        
    } , 

    {
        name: "Izaan Haider",
        position : "UI Designer at Apex Interactive"  ,
        text : "His expertise in Next.js and Tailwind CSS really shined through. A true professional and highly skilled developer!" , 
        avatar : izaan
        
    },

    {
        name: "Salaar Hussain Qaiser",
        position : "Owner RoadFlex Solutions "  ,
        text : "He communicated clearly throughout the entire process and delivered exactly what we needed. Our web presence has improved significantly thanks to his skills" , 
        avatar : salaar
        
    },

    {
        name: "Muneeb Qazi",
        position : "Next.js Specialist at HyperWeb"  ,
        text : "Cordinating with Mutahir was a great Experience, looking forward to our next collaboration!" , 
        avatar : muneeb 
        
    },

    
    {
        name: "Ayaan Ghatta",
        position : "Founder ThriftWheels"  ,
        text : "He understood the requirements and provided solutions that enhanced user experience and design. Highly skilled and great to work with!", 
        avatar : ayaan
        
    }

    

]


const Clients = () => {
  return (

    <div className='animate-fadeInUp relative  '>
    
    <div className='pt-20 ' >   

        {/* text-section */}

       <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center ml-5">
       ♥ My Happy Clients ♥
        </p>
      </div>

      <h1 className="font-serif text-3xl sm:text-5xl text-center mt-8 sm:mt-16 ml-5">
       What Clients say About Me 
      </h1>
      
      <p className="text-center text-white/60 mt-5 mx-auto w-[90%] sm:w-[60%] pl-5">
      Curious about my work? let my clients tell you about their experience :)
      </p>
          

       {/* client section  */}

       <div className="mt-20 flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar h-[250px] cursor-pointer ">

        <div className='flex gap-8 flex-none '>
        {clients.map(clients=> (
            <div key={clients.name} className='bg-gray-800 rounded-3xl px-6 border-gray-700 border-4 max-w-xs md:p-4 h-[220px]  hover:shadow-white/85 shadow-lg  '>

        <div className='flex gap-4 items-center pt-[16px]'>
            <div className='size-14 border-4 rounded-full border-green-600 '>
                 <Image src={clients.avatar} alt ={clients.name}  className='w-[70px] h-[auto] rounded-full '/>
            </div>

           <div>
              <div className='font-semibold'>{clients.name}</div>
              <div className='text-sm text-white/40'>{clients.position}</div>
            </div> 

           </div>

                <p className='mt-4 text-sm '>{clients.text}</p>

            </div>
            

        

            
        ))}
        
        </div>
       </div>

    </div>
  )
}

export default Clients