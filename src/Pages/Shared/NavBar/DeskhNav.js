import React from "react";
import CustomLink from "../../../Component/CustomLink";
const DeskhNav = () => {
    const navigation = <>
        <li className=' dark:text-[#6B707F] py-2  text-black hover:border-b-[1px] border-[#64CEE6] text-lg cursor-pointer'><CustomLink to='/'
            className='transition-all duration-300 uppercase font-semibold '> Home</CustomLink></li>
        <li className=' py-2  dark:text-[#6B707F] hover:border-b-[1px] border-[#64CEE6] text-black text-lg cursor-pointer uppercase'><CustomLink to='/upcoming-events'
            className='transition-all duration-300 font-semibold'> Upcoming Events</CustomLink></li>
        <li className=' dark:text-[#6B707F] py-2  hover:border-b-[1px] border-[#64CEE6] text-lg text-black cursor-pointer uppercase'><CustomLink to='/blog'
            className='transition-all duration-300  font-semibold'>News</CustomLink></li>
        <li className=' dark:text-[#6B707F] py-2  text-black  cursor-pointer hover:border-b-[1px] border-[#64CEE6] uppercase'><CustomLink to='/BloodReq'
            className='transition-all text-lg duration-300 font-semibold'>Clubs</CustomLink></li>
        <li className=' dark:text-[#6B707F] py-2 hover:border-b-[1px] border-[#64CEE6] text-black  cursor-pointer uppercase'><CustomLink to='/BloodReq'
            className='transition-all text-lg duration-300 font-semibold'>Forums</CustomLink></li>
        <li className=' dark:text-[#64CEE6] px-6 py-2 bg-white border-[1px] border-[#64CEE6] text-black  cursor-pointer uppercase'><CustomLink to='/BloodReq'
            className='transition-all text-lg duration-300 font-semibold'>Join</CustomLink></li>
    </>

    return (
        <nav>
            <ul className='flex space-x-8  capitalize text-md font-mono'>
                {navigation}
            </ul>
        </nav>
    );
};

export default DeskhNav;
