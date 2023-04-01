import React from "react";
import { useState } from "react";
import { calculateTimeLeft } from "./TimeCount/utils";
import { useEffect } from "react";

const EventsBanner = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
      setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    }, [timeLeft]);
  return (
    <div>
      <div className="relative ">
        <div className="">
          <img
            src="https://radiustheme.com/demo/wordpress/eventalk/wp-content/uploads/2018/07/l-slide1-2.jpg"
            alt=""
          />
        </div>
        <div className="absolute top-40 inset-0 ">
          <section className=" py-8  bg-transparent md:py-16 ">
            <div className="box-content max-w-5xl px-5 mx-auto">
              <div className="">
                <div className="text-white w-full px-5 md:w-auto text-center mb-10">
                  <h4 className="text-xl">
                    17 - 25 October 2022 | Tobacco Dock, London
                  </h4>
                  <h1 className="font-extrabold text-5xl">
                    Marketing Conferencee 2022
                  </h1>
                </div>
                <div className="w-full px-5 md:w-auto">
                  <div className="flex justify-center text-center text-white">
                    <div className="w-20 py-3 mx-2 border rounded-lg md:w-28 border-light-300 bg-light-100 md:py-4">
                      <div className="text-2xl font-semibold md:text-5xl text-yellow-400">
                        {String(timeLeft.days).padStart(2, "0")}
                      </div>
                      <div className="mt-3 text-xs uppercase opacity-75">
                        Day
                      </div>
                    </div>
                    <div className="w-20 py-3 mx-2 border rounded-lg md:w-28 border-light-300 bg-light-100 md:py-4">
                      <div className="text-2xl font-semibold md:text-5xl text-blue-400">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </div>
                      <div className="mt-3 text-xs uppercase opacity-75 ">
                        Hour
                      </div>
                    </div>
                    <div className="w-20 py-3 mx-2 border rounded-lg md:w-28 border-light-300 bg-light-100 md:py-4">
                      <div className="text-2xl font-semibold md:text-5xl text-red-500">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </div>
                      <div className="mt-3 text-xs uppercase opacity-75 ">
                        Min
                      </div>
                    </div>
                    <div className="w-20 py-3 mx-2 border rounded-lg md:w-28 border-light-300 bg-light-100 md:py-4">
                      <div className="text-2xl  font-semibold md:text-5xl text-yellow-400">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </div>
                      <div className="mt-3 text-xs uppercase opacity-75 ">
                        Second
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button
                    type="register"
                    className="border border-yellow-400 p-3 px-5 rounded hover:bg-yellow-400 hover:text-black font-bold text-yellow-400"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;
