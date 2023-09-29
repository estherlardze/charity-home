import React from 'react';
import { hero } from '../assets/index';

const Hero = () => {
  return (
    <div className='bg-cover bg-center w-full h-[90vh]' id='home'>
      <div className='relative'>
        <img src={hero} alt="hero image" className='w-full h-[60vh] xl:h-[80vh] '/>
        <div data-aos="fade-up" className='absolute top-[15%] sm:top-[20%] md:top-[30%] left-[5%] sm:left[10%] md:left-[30%] text-white flex flex-col justify-center items-center'>
          <p className='font-semibold'>give hope for homeless</p>
          <h2 className='font-extrabold text-3xl md:text-4xl xl:text-6xl font-custom my-2'>Helping each other <br /> can make world better</h2>
          <p className='text-gray-300'>We Seek out world changers and difference makers around the <br /> globe,
            and equip them to fulfill their unique purpose.
          </p>
          <div className='flex gap-[20px] mt-6 justify-center '>
            <button className='bg-[#219d80] text-white px-2 py-1 text-lg'>Donate now</button>
            <button className='bg-transparent border border-[#219d80] text-white px-2 py-1 text-lg'>Know About Us</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero