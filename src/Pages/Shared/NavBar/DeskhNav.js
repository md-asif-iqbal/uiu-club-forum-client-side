import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "../../../Component/CustomLink";
import auth from "../../../firebase.init";
import UseService from "../../../Hooks/UseService";
const DeskhNav = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };

  const [service] = UseService()
  console.log(service);

  const navigateDetails = (id) => {
    navigate(`/service/${id}`);
}
  const navigation = (
    <>
      <li className=" dark:text-[#6B707F]  text-black hover:border-b-[1px] border-[#64CEE6] text-lg cursor-pointer">
        <CustomLink
          to="/"
          className="transition-all duration-300 uppercase font-semibold "
        >
          {" "}
          Home
        </CustomLink>
      </li>
      <li className="  dark:text-[#6B707F] hover:border-b-[1px] border-[#64CEE6] text-black text-lg cursor-pointer uppercase">
        <CustomLink
          to="/upcoming-events"
          className="transition-all duration-300 font-semibold"
        >
          {" "}
          Upcoming Events
        </CustomLink>
      </li>
      <li className=" dark:text-[#6B707F]  hover:border-b-[1px] border-[#64CEE6] text-lg text-black cursor-pointer uppercase">
        <CustomLink
          to="/news"
          className="transition-all duration-300  font-semibold"
        >
          News
        </CustomLink>
      </li>
      <li className=" dark:text-[rgb(107,112,127)]  text-black  cursor-pointer hover:border-b-[1px] border-[#64CEE6] uppercase">
        <CustomLink
          to="/Club"
          className="transition-all text-lg duration-300 font-semibold"
        >
          Clubs
        </CustomLink>
      </li>
      <li className='dark:text-[rgb(107,112,127)]  text-black  cursor-pointer hover:border-b-[1px] border-[#64CEE6] uppercase'>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="transition-all text-lg duration-300 font-semibold">Forum</label>
          <ul tabIndex={0} className="dropdown-content menu -ml-20 pt-4 shadow bg-primary/20 rounded-box w-72">
            <li className="mx-auto">
              {
                service.map(item => <div
                  onClick={() => navigateDetails(item._id)} 
                  className="transition-all text-sm duration-300 text-secondary font-semibold"
                >
                  {item.serviceName}
                </div>)
              }
            </li>
          </ul>
        </div>
      </li>
      <li>
        {user ? (
          <li className=" text-white  cursor-pointer -mt-2">
            <div className="dropdown dropdown-end">
              <button className=" transition-all duration-300 uppercase">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {user?.photoURL ? (
                      <img
                        src={user?.photoURL}
                        alt={user?.displayName}
                        className="w-12 p-0 text-primary"
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
                  <Link to='/request-for-create-new-club-or-forum' className="flex uppercase w-full mx-0 text-start px-3 py-3 cursor-pointer  text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md">
                    Request for create new Club&Forum
                  </Link>
                  <Link to='/Dashboard' className="flex uppercase w-full mx-0 text-start px-3 py-3 cursor-pointer  text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md">
                    Dashboard
                  </Link>
                </div>
              </ul>
            </div>
          </li>
        ) : (
          <CustomLink
            to="/login"
            className=" text-[#6B707F] py-4 px-6 bg-white transition-all text-lg duration-300 font-semibold cursor-pointer uppercase rounded-sm"
          >
            Login
          </CustomLink>
        )}
      </li>
    </>
  );

  return (
    <nav>
      <ul className="flex space-x-8  capitalize text-md font-mono">
        {navigation}
      </ul>
    </nav>
  );
};

export default DeskhNav;
