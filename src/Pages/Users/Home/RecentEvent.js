import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import './Style.css'
const RecentEvent = () => {

    const events = [
        {
            id: 1,
            img: "https://res.cloudinary.com/prismclubs/image/upload/v1574755971/nov/69130252_1374351976073541_4777182167883055104_o.jpg_dj58a3.jpg",
            name: "21 February Events",
            event: "Events",
            date: "21 Feb-02-2023",
            address: "Dhaka, Bangladesh"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/prismclubs/image/upload/v1574755971/nov/69130252_1374351976073541_4777182167883055104_o.jpg_dj58a3.jpg",
            name: "21 February Events",
            event: "Events",
            date: "21 Feb-02-2023",
            address: "Dhaka, Bangladesh"
        }, {
            id: 3,
            img: "https://res.cloudinary.com/prismclubs/image/upload/v1574755971/nov/69130252_1374351976073541_4777182167883055104_o.jpg_dj58a3.jpg",
            name: "21 February Events",
            event: "Events",
            date: "21 Feb-02-2023",
            address: "Dhaka, Bangladesh"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/prismclubs/image/upload/v1574755971/nov/69130252_1374351976073541_4777182167883055104_o.jpg_dj58a3.jpg",
            name: "21 February Events",
            event: "Events",
            date: "21 Feb-02-2023",
            address: "Dhaka, Bangladesh"
        }
    ]
    return (
        <div className='w-10/12 mx-auto mt-28 relative'>
            <h1 className="md:text-[110px] text-4xl absolute -z-10 md:left-1/4 top-8 text-[#f2eded89] text-center font-mono font-bold">Recent Events</h1>
            <h1 className="text-xl text-center font-mono text-secondary font-semibold">Recent Events</h1>
            <h1 className="text-4xl my-2 text-center mb-20 font-mono text-secondary font-semibold">Our Awesome Events</h1>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <div className=''>
                    {
                        events.map(item => (<SwiperSlide>

                            <div className='flex flex-col mx-auto  pb-16 '>
                                <div className=''>
                                    <img className='w-10/12 mx-auto' src={item.img} alt="" />
                                    <h1 className='text-xl font-bold mt-4 ml-10'>{item.name}</h1>
                                    <h1 className='text-md mt-1 ml-10'>{item.address}</h1>
                                    <div className='flex items-center mt-3 flex-wrap justify-between'>
                                    <div className="border ml-10"> </div>
                                    <div>
                                        <h1 className='text-sm cursor-pointer text-primary font-bold mr-10'>Read More ..</h1>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>))
                    }
                </div>
            </Swiper>
            <div className='md:w-56 w-5/12 mx-auto mt-10'>
                <button className='w-full mx-auto bg-primary py-4 text-white px-3 font-mono text-xl rounded-lg'> See More Events</button>
            </div>
        </div>
    );
};

export default RecentEvent;