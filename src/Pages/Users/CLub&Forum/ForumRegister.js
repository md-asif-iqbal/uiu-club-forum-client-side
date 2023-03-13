import React from 'react';
import joinUS from '../../../Assets/background/JoinUS-edit.png'
const ForumRegister = () => {
    return (
      <div className="py-12 flex justify-center items-center w-full flex-col mt-10 ">
        <div className="md:hidden mt-6 w-full">
          <img
            src={joinUS}
            alt="pexels-dmitry-zvolskiy-2082090-1"
            className="w-full"
          />
        </div>
        <div className="flex justify-between bg-gray-50 items-stretch flex-row">
          <div className="flex items-center bg-primary justify-center">
            <p className="transform flex flex-shrink-0 -rotate-90 text-4xl font-semibold tracking-wide leading-normal text-white">
              HR FORUM
            </p>
          </div>
          <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
            <div>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
                Act before it’s too late!
              </p>
            </div>
            <div className="xl:mt-4 mt-2">
              <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">
                Furniture that looks modern and is comfortable as well. Avail
                the 50% offer now.
              </p>
              <div>
                <button className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-primary transition hover:-translate-y-1 hover:bg-primary hover:text-white font-medium text-primary">
                  Join Forum
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block h-44 md:h-60 xl:h-72">
            <img
              className="hidden h-full object-cover lg:w-96  xl:block"
              src={joinUS}
              alt="pexels-dmitry-zvolskiy-2082090-1"
            />
            <img
              className="xl:hidden h-full"
              src={joinUS}
              alt="pexels-dmitry-zvolskiy-2082090-1-1"
            />
          </div>
        </div>
      </div>
    );
};

export default ForumRegister;