import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsMenuButtonWide } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import CustomLink from '../../../Component/CustomLink';

const MobileNav = () => {

    const navigation = <>
        <li className=' dark:text-white text-black  text-lg cursor-pointer'><CustomLink to='/'
            className='transition-all duration-300 uppercase font-semibold'> Home</CustomLink></li>
        <li className=' dark:text-white text-black text-lg cursor-pointer uppercase'><CustomLink to='/donars'
            className='transition-all duration-300 font-semibold'> Upcoming Events</CustomLink></li>
        <li className=' dark:text-white text-lg text-black cursor-pointer uppercase'><CustomLink to='/blog'
            className='transition-all duration-300  font-semibold'>News</CustomLink></li>
        <li className=' dark:text-white text-black  cursor-pointer uppercase'><CustomLink to='/BloodReq'
            className='transition-all text-lg duration-300 font-semibold'>Clubs</CustomLink></li>
        <li className=' dark:text-white text-black  cursor-pointer uppercase'><CustomLink to='/BloodReq'
            className='transition-all text-lg duration-300 font-semibold'>Forums</CustomLink></li>
        <li className=' dark:text-white text-black  cursor-pointer uppercase'><CustomLink to='/BloodReq'
            className='transition-all text-lg duration-300 font-semibold'>Join</CustomLink></li>
    </>
    const [isOpen, setIsOpen] = useState(false);

    const circleVariants = {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 180,
            transition: {
                type: 'spring',
                stiffness: 160,
                damping: 60,
            },
        },
    };

    const ulVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
            },
        },
    };

    return (
        <nav className='relative'>
            <div
                onClick={() => setIsOpen(true)}
                className='cursor-pointer '
            >
                <BsMenuButtonWide className='w-8 h-8 text-white -mt-4' />
            </div>

            {/* circle */}
            <motion.div
                variants={circleVariants}
                initial='hidden'
                animate={isOpen ? 'visible' : 'hidden'}
                className='w-4 h-4 rounded-full bg-gradient-to-b from-[#722ab5] via-[#16264a] to-[#6d1851] fixed top-0 right-0'
            ></motion.div>

            <motion.ul
                variants={ulVariants}
                initial='hidden'
                animate={isOpen ? 'visible' : ''}
                className={`${isOpen ? 'right-0' : '-right-full'
                    } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer absolute top-8 right-8'
                >
                    <ImCross className='w-8 h-8 text-white' />
                </div>
                {navigation}
            </motion.ul>
        </nav>
    );
};

export default MobileNav;