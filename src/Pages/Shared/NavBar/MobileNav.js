import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsMenuButtonWide } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import CustomLink from '../../../Component/CustomLink';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';
import { signOut } from 'firebase/auth';
import UseService from '../../../Hooks/UseService';

const MobileNav = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();
    const logout = () => {
      signOut(auth);
      navigate("/login");
    };
    
    const [service] = UseService()
    
    const forumItem = service.filter((item) => item.service === "Forum")
    const clubItem = service.filter((item) => item.service === "Club")
    const navigateDetails = (id) => {
        navigate(`/service/${id}`);
      }
      
    const navigation =   <>
    <li className=" dark:text-[#6B707F]  text-black hover:border-b-[1px] border-[#64CEE6]   text-md cursor-pointer">
      <CustomLink
        to="/"
        className="transition-all duration-300 uppercase font-bold "
      >
        {" "}
        Home
      </CustomLink>
    </li>
    <li className="  dark:text-[#6B707F] hover:border-b-[1px] border-[#64CEE6] text-black   text-md cursor-pointer uppercase">
      <CustomLink
        to="/upcoming-events"
        className="transition-all duration-300 font-bold"
      >
        {" "}
        Upcoming Events
      </CustomLink>
    </li>
    <li className=" dark:text-[#6B707F]  hover:border-b-[1px] border-[#64CEE6]   text-md text-black cursor-pointer uppercase">
      <CustomLink
        to="/news"
        className="transition-all duration-300  font-bold"
      >
        News
      </CustomLink>
    </li>
    <li className="dark:text-[rgb(107,112,127)]  text-black  cursor-pointer hover:border-b-[1px] border-[#64CEE6] uppercase">
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className="transition-all   text-md duration-300 font-bold"
        >
          Club
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu -ml-20 pt-4 shadow bg-transparent rounded w-56"
        >
          <li className="mx-auto w-full">
            {clubItem?.map((item) => (
              <div
                onClick={() => navigateDetails(item._id)}
                className="transition-all text-start hover:bg-gradient-to-r from-[#64CEE6] to-[#45ddd0] text-sm hover:text-white duration-300 text-secondary font-bold"
              >
                {item?.serviceName}
              </div>
            ))}
          </li>
        </ul>
      </div>
    </li>
    {/* <li className=" dark:text-[rgb(107,112,127)]  text-black  cursor-pointer hover:border-b-[1px] border-[#64CEE6] uppercase">
      <CustomLink
        to="/Club"
        className="transition-all   text-md duration-300 font-bold"
      >
        Clubs
      </CustomLink>
    </li> */}
    <li className="dark:text-[rgb(107,112,127)]  text-black  cursor-pointer hover:border-b-[1px] border-[#64CEE6] uppercase">
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className="transition-all   text-md duration-300 font-bold"
        >
          Forum
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu -ml-20 pt-4 shadow bg-transparent rounded w-56"
        >
          <li className="mx-auto w-full">
            {forumItem?.map((item) => (
              <div
                onClick={() => navigateDetails(item._id)}
                className="transition-all text-start hover:bg-gradient-to-r from-[#64CEE6] to-[#45ddd0] text-sm hover:text-white duration-300 text-secondary font-bold"
              >
                {item?.serviceName}
              </div>
            ))}
          </li>
        </ul>
      </div>
    </li>
    <li>
      {user ? (
        <li className=" text-white  cursor-pointer mt-2">
          <div className="dropdown dropdown-end">
            <button className=" transition-all duration-300 uppercase">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt={user?.displayName}
                      className="w-10 p-0 text-primary"
                    />
                  ) : (
                    <img
                      src="https://i.ibb.co/rwGPsQ9/profile.jpg"
                      alt={user?.displayName}
                      className="w-14 text-primary"
                    />
                  )}
                </div>
              </div>
            </button>
            <ul
              id="0"
              className="dropdown-content menu shadow drop-bg rounded"
            >
              <div className="uppercase w-56 max-w-screen p-2 origin-center appear-done enter-done bg-[#6a30608e] pl-4 rounded-md">
                <button
                  className="flex uppercase w-full  text-start px-3 py-3 cursor-pointer  text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md"
                  onClick={logout}
                >
                  LOGOUT
                </button>
                <Link
                  to="/request-for-create-new-club-or-forum"
                  className="flex uppercase w-full mx-0 text-start px-3 py-3 cursor-pointer  text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md"
                >
                  Request for create new Club&Forum
                </Link>
                {admin && (
                  <Link
                    to="/Dashboard"
                    className="flex uppercase w-full mx-0 text-start px-3 py-3 cursor-pointer  text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </li>
      ) : (
        <CustomLink
          to="/login"
          className=" text-[#6B707F] py-4 px-6 bg-white transition-all   text-md duration-300 font-bold cursor-pointer uppercase rounded-sm"
        >
          Login
        </CustomLink>
      )}
    </li>
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