"use client"
import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <div className='text-3xl sm:text-5xl text-center  ml-4'>
        <TypeAnimation className='font-serif font-semibold  '
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Mutahir Hussain Shah",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front-End Developer',
        1000,
        
      ]}
      wrapper="span"
      speed={35}
      style={{ fontSize: 'em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  );
};

export default Typing ;