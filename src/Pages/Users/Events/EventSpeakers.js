import React from "react";

const EventSpeakers = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl mt-10  mb-4  ">Event Speakers</h1>
        <p>
          Dorem Ipsum Dolor Sit. Incidunt Laborum Beatae Earum Nihil Onsequuntur
          Officia
        </p>
      </div>
      <div>
        <section className="py-6 dark:bg-gray-800">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              <div>
                <a href="#" className="group relative block bg-black">
                  <img
                    alt="Developer"
                    src="https://source.unsplash.com/random/300x300/?1"
                    className="absolute inset-0  w-full object-cover opacity-100 transition-opacity group-hover:opacity-100"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8 ">
                    <p className=" mt-10 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-xl mt-1 text-center font-bold text-white sm:text-2xl">
                      Tony Wayne
                    </p>

                    {/* <div className=" mt-14 ">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Omnis perferendis hic asperiores quibusdam
                          quidem voluptates doloremque reiciendis nostrum harum.
                          Repudiandae?
                        </p>
                      </div>
                    </div> */}
                  </div>
                </a>
              </div>
              <div>
                <a href="#" className="group relative block bg-black">
                  <img
                    alt="Developer"
                    src="https://source.unsplash.com/random/300x300/?2"
                    className="absolute inset-0  w-full object-cover opacity-100 transition-opacity group-hover:opacity-100"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8 ">
                    <p className=" mt-10 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-xl mt-1 text-center font-bold text-white sm:text-2xl">
                      Tony Wayne
                    </p>

                    {/* <div className=" mt-14 ">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Omnis perferendis hic asperiores quibusdam
                          quidem voluptates doloremque reiciendis nostrum harum.
                          Repudiandae?
                        </p>
                      </div>
                    </div> */}
                  </div>
                </a>
              </div>
              <div>
                <a href="#" className="group relative block bg-black">
                  <img
                    alt="Developer"
                    src="https://source.unsplash.com/random/300x300/?3"
                    className="absolute inset-0  w-full object-cover opacity-100 transition-opacity group-hover:opacity-100"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8 ">
                    <p className=" mt-10 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-xl mt-1 text-center font-bold text-white sm:text-2xl">
                      Tony Wayne
                    </p>

                    {/* <div className=" mt-14 ">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Omnis perferendis hic asperiores quibusdam
                          quidem voluptates doloremque reiciendis nostrum harum.
                          Repudiandae?
                        </p>
                      </div>
                    </div> */}
                  </div>
                </a>
              </div>
              <div>
                <a href="#" className="group relative block bg-black">
                  <img
                    alt="Developer"
                    src="https://source.unsplash.com/random/300x300/?4"
                    className="absolute inset-0  w-full object-cover opacity-100 transition-opacity group-hover:opacity-100"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8 ">
                    <p className=" mt-10 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-xl mt-1 text-center font-bold text-white sm:text-2xl">
                      Tony Wayne
                    </p>

                    {/* <div className=" mt-14 ">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Omnis perferendis hic asperiores quibusdam
                          quidem voluptates doloremque reiciendis nostrum harum.
                          Repudiandae?
                        </p>
                      </div>
                    </div> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventSpeakers;
