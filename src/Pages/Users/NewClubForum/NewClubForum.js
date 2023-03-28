import React from 'react';

const NewClubForum = () => {
    return (
      <div>
        <section>
          <div className="bg-gray-200">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
                Hey are you create new club or forum ?
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                Please follow the instruction and submit the avidance !
              </p>
              <div className="flex flex-wrap justify-center">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded bg-primary text-gray-50"
                >
                  Get started
                </button>
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <img
            src="https://source.unsplash.com/random/480x320"
            alt=""
            className="w-5/6 mx-auto mb-12 h-56 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
          />
        </section>

        <section>
          <section className="p-8  text-black mb-10">
            <form
              novalidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-8 rounded-md shadow-sm bg-gray-200">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">New Forum or Club Request</p>
                  <p className="text-xs">Adipisci fuga autem eum!</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label for="username" className="text-sm">
                      Club or Forum Title
                    </label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="website" className="text-sm">
                      Your phone number
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your number"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </div>
                  <div className="col-span-full">
                    <label for="bio" className="text-sm">
                      Bio
                    </label>
                    <textarea
                      className="textarea w-full h-36 textarea-primary"
                      placeholder="Bio"
                    ></textarea>
                  </div>
                  <div className="col-span-full mx-auto">
                    <div className="flex mx-auto space-x-2">
                     
                      <button
                        type="button"
                        className="px-12 hover:bg-primary hover:text-white py-2 border rounded-md border-primary"
                      >
                        Request
                      </button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        </section>
      </div>
    );
};

export default NewClubForum;