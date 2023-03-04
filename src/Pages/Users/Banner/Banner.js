import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination,Navigation ,Scrollbar ,A11y} from "swiper";
const Banner = () => {
    return (
        <div>
             <Swiper
      // install Swiper modules
      spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      
      
    >
      <SwiperSlide> <div className='relative border-b-8 border-primary'>
              <img src='https://www.uiu.ac.bd/wp-content/uploads/2021/11/Banner_CP.jpg' alt="" className='w-full h-screen' />
              <div className="banner"> </div>
              <div className=" absolute top-2/4 left-40 h-24  flex justify-center items-center">
                
                  <div className="">
                    <h1 className="md:text-5xl font-bold font-mono text-white">
                      Its Title
                    </h1>
                    <br />
                    <h1 className='text-2xl md:w-10/12 w-full leading-loose font-mono font-medium text-white'>details</h1>
                    <div className='mt-4'>
                      <button className='exploreBtn mr-10 mb-3 font-mono uppercase'>Loren More</button>
                      {/* <button className='donateBtn font-mono uppercase'><Link to={item.url}>Get Planning</Link></button> */}
                    </div>
                  </div>
              
              </div>
            </div></SwiperSlide>
      <SwiperSlide><div className='relative border-b-8 border-primary'>
              <img src='https://www.uiu.ac.bd/wp-content/uploads/2021/11/Banner_CP.jpg' alt="" className='w-full h-screen' />
              <div className="banner"> </div>
              <div className=" absolute top-2/4 left-40 h-24  flex justify-center items-center">
                
                  <div className="">
                    <h1 className="md:text-5xl font-bold font-mono text-white">
                      Its Title
                    </h1>
                    <br />
                    <h1 className='text-2xl md:w-10/12 w-full leading-loose font-mono font-medium text-white'>details</h1>
                    <div className='mt-4'>
                      <button className='exploreBtn mr-10 mb-3 font-mono uppercase'>Loren More</button>
                      {/* <button className='donateBtn font-mono uppercase'><Link to={item.url}>Get Planning</Link></button> */}
                    </div>
                  </div>
              
              </div>
            </div></SwiperSlide>
      <SwiperSlide><div className='relative border-b-8 border-primary'>
              <img src='https://www.uiu.ac.bd/wp-content/uploads/2021/11/Banner_CP.jpg' alt="" className='w-full h-screen' />
              <div className="banner"> </div>
              <div className=" absolute top-2/4 left-40 h-24  flex justify-center items-center">
                
                  <div className="">
                    <h1 className="md:text-5xl font-bold font-mono text-white">
                      Its Title
                    </h1>
                    <br />
                    <h1 className='text-2xl md:w-10/12 w-full leading-loose font-mono font-medium text-white'>details</h1>
                    <div className='mt-4'>
                      <button className='exploreBtn mr-10 mb-3 font-mono uppercase'>Loren More</button>
                      {/* <button className='donateBtn font-mono uppercase'><Link to={item.url}>Get Planning</Link></button> */}
                    </div>
                  </div>
              
              </div>
            </div></SwiperSlide>
      <SwiperSlide><div className='relative border-b-8 border-primary'>
              <img src='https://www.uiu.ac.bd/wp-content/uploads/2021/11/Banner_CP.jpg' alt="" className='w-full w-screen h-screen' />
              <div className="banner"> </div>
              <div className=" absolute top-2/4 left-40 h-24  flex justify-center items-center">
                
                  <div className="">
                    <h1 className="md:text-5xl font-bold font-mono text-white">
                      Its Title
                    </h1>
                    <br />
                    <h1 className='text-2xl md:w-10/12 w-full leading-loose font-mono font-medium text-white'>details</h1>
                    <div className='mt-4'>
                      <button className='exploreBtn mr-10 mb-3 font-mono uppercase'>Loren More</button>
                      {/* <button className='donateBtn font-mono uppercase'><Link to={item.url}>Get Planning</Link></button> */}
                    </div>
                  </div>
              
              </div>
            </div></SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Banner;