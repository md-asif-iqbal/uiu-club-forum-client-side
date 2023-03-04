import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    // const [open , setOpen]=useState(false)
    // const handleDropdown =()=>{
    //     setOpen(!open)
    // }
    return (
        <div className='sticky top-0 z-50'>
            <div class="flex flex-wrap place-items-center ">
  <section class="relative mx-auto">

    <nav class="flex justify-between dark:bg-gray-900 bg-gray-100 uppercase dark:text-white text-black w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-3xl font-bold font-heading" href="#">
          {/* <!-- <img class="h-9" src="logo.png" alt="logo"> --> */}
          Logo Here.
        </a>
        {/* <!-- Nav Links --> */}
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a class="" href="#">Home</a></li>
          <li><a class="" href="#">Upcoming Event</a></li>
          <li><a class="" href="#">News</a></li>
          <div className="dropdown dropdown-hover">
                <label tabIndex={0} className=""> 
                <li ><a class="" href="#">Clubs</a></li></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Club 1</a></li>
                    <li><a>Club 2</a></li>
                </ul>
         </div>
         <div className="dropdown dropdown-hover">
                <label tabIndex={0} className=""> 
                <li ><a class="" href="#">Forums</a></li></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/'>Forum 1</Link></li>
                    <li><a>Forum 2</a></li>
                </ul>
         </div>
          <li><a class="" href="#">Contact Us</a></li>
        </ul>
      </div>
     
    </nav>
    
  </section>
            </div>
        </div>

    );
};

export default NavBar;