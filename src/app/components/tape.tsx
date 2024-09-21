import Stars from "../images/photos1/stars.png"
import Image from "next/image";

const word = [
    "Accesible",
    "Secure",
    "Performace",
    "Interactive" , 
    "Scaleable" ,
    "Maintainable" ,
    "Responsive",
    "Usable" ,
    "Reliable" ,
    

] ; 

const Tape = () => {
    return (
       

      <div className="py-16 lg:py-24 overflow-x-clip ">
        
        
        

        <div className="bg-gradient-to-r from-yellow-400 to-sky-500 -rotate-3 -m-2">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex felx-none gap-4 py-3 ">
        {word.map((word) => (
          <div key={word} className="inline-flex gap-4 items-center ">
            <span className="text-black uppercase font-extrabold -rotate-1">{word}</span>
            <Image src={Stars} alt="stars" className="size-6 text-black -rotate-6 "/>
            

          </div>
          
        ))}
      </div>
      </div>
      </div>
      </div>
    );
  };
  

  export default Tape ;