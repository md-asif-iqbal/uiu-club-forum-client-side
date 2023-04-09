import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { HiPencilAlt } from "react-icons/hi";
import PostAnnouncment from "../../../DynamicPages/DynamicForum/PostAnnouncment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { useEffect } from "react";
const ForumAnnouncment = () => {
  const [user] = useAuthState(auth);
  const [, setCancle] = useState(false);
  const crossHandle = () => {
    setCancle(false)
  }

  const [announcment, setAnnouncment] = useState([])
  console.log(announcment);
  useEffect(() => {
    const email = user?.email
    const url = `http://localhost:8000/myAnnouncment?email=${email}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAnnouncment(data));
  }, [user]);
  return (
    <div className=" relative">
      <div className="flex mt-5 mb-5">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <div className="relative ">
            {announcment.map(item => <SwiperSlide key={item._id}>
              <div className="flex gap-5 flex-wrap w-7/12 py-4 m-auto bg-white shadow-2xl items-center mb-10">
                <div
                  className=""
                >
                  <img  src={item.images} className="w-96 h-80" alt="" />
                </div>
                <div className="flex flex-col justify-between w-1/2 px-4 space-y-16">
                  <div>
                    <h1 className="mb-2 text-2xl font-bold leading-tight">
                      {item.name}
                    </h1>
                    <p className="text-sm text-gray-700">
                      {item.discript} </p>
                  </div>
                  <div>
                    <ul className="flex justify-center mt-4 space-x-3 text-xs text-gray-700">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 mr-1 text-green-500 fill-current"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p>No spam</p>
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 mr-1 text-green-500 fill-current"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p>No hassle</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            )
            }
          </div>
        </Swiper>
      </div>
      <div>
        {
          user?.email && <div className="absolute bottom-0 right-10">
            <label htmlFor="my-modal-6" className=" uppercase cursor-pointer"><h1 className="flex items-center full text-primary py-2 px-3 border-primary border-2">
              <HiPencilAlt className="mr-3 text-xl" />
              Post Announcment
            </h1></label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal md:pt-10 pt-40 w-full overflow-scroll">
              <div className="relative w-full rounded-lg md:w-9/12 lg:w-7/12 bg-black h-auto">
                <label htmlFor="my-modal-6" onClick={crossHandle} className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold">✕</label>
                <PostAnnouncment />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
export default ForumAnnouncment;
