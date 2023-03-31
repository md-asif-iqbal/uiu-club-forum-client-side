import React from 'react';
import { ImSearch } from 'react-icons/im';
import bg from '../../../Assets/background/building.png'
import bord from '../../../Assets/background/bord.png'
import flowr from '../../../Assets/background/flower.png'
const Banner = () => {
  return (
    <div className='bg-[#DAF6FC] md:pt-60 pt-40 h-screen relative'>
      <div><h1 className='md:text-4xl text-3xl font-bold capitalize text-[#1D2746] text-center'>Hello, what can we help you find?</h1>
        <h2 className='text-xl text-center mx-auto capitalize text-[#6B707F] md:w-5/12 my-7 w-9/12'>Show your extra curriculum activities   </h2>
      </div>
      <div className="relative overflow-hidden md:w-5/12 w-11/12 p-0 mx-auto">
        <input
          type="text"
          className=" placeholder-[#6B707F] px-10 md:text-lg text-sm font-mono input py-10 w-full text-black bg-white"
          placeholder="Search Your Club Or Forum Name"
        />
        <h1 className="absolute bottom-6 right-12 text-[#64CEE6] text-3xl ">
          <ImSearch />
        </h1>
      </div>
      <div className=" hidden md:block">
        <img className=" absolute right-1/4 bottom-0" src={bg} alt="" />
        <img className=' absolute bottom-0 right-2/4' src={bord} alt="" />
        <img className=' absolute bottom-0 left-2/3' src={flowr} alt="" />
      </div>
    </div>
  );
};

export default Banner;