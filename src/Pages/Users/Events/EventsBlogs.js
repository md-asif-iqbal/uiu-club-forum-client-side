import React from "react";
import { FcCalendar } from "react-icons/fc";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const EventsBlogs = () => {

  const url = `http://localhost:8000/eventblogs`;
  const {
    data: eventBlogs,
    isLoading,
    refetch,
  } = useQuery(["eventBlogs"], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  );

     if (isLoading) {
       return <Loading></Loading>;
     }
  console.log(eventBlogs.length);

  const handleReact = () => {
    console.log("yes");
  }
  
  return (
    <div>
      <div className="text-center ">
        <h1 className="font-bold text-4xl mt-2 mb-5">Our Latest Blogs</h1>
        <p className="mb-10">
          Sed Condimentum Tempus Auctor Etiam Euismod Dapibus Odio Eu Congue.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {eventBlogs?.map((eventBlogs) => (
          <>
            <SwiperSlide>
              <div className="flex flex-col mx-2  pb-16 ">
                <div className="group relative block overflow-hidden shadow-lg">
                  <button
                    onClick={handleReact}
                    className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                  >
                    <span className="sr-only">Wishlist</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>

                  <img
                    src={eventBlogs.img}
                    alt=""
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />

                  <div className="relative border-gray-100 bg-white p-2 ">
                    <span className=" flex text-md gap-2 items-center font-medium">
                      <FcCalendar size={20} /> <p>{eventBlogs.date}</p>
                    </span>

                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      {eventBlogs.title}
                    </h3>

                    <p className="mt-1.5 text-sm text-gray-700">
                      {eventBlogs.description?.length > 150
                        ? eventBlogs.description.slice(0, 120) + "..."
                        : eventBlogs.description}
                    </p>
                    <div className="justify-between buttom-0 flex items-center">
                      <div className="flex gap-1 text-sm items-center mt-3">
                        <h2 className="text-rose-600">
                          <MdOutlineAdminPanelSettings size={22} />
                        </h2>
                        <h4>Admin</h4>
                      </div>
                      <div className="flex gap-2 text-sm items-center">
                        <AiOutlineHeart size={20} className="text-rose-600" />{" "}
                        <h2> 4</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default EventsBlogs;
