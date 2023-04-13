import React from 'react';

const ForumActivitys = () => {
    return (
        <>
            <div className='relative mt-40'>
                <h1 className="md:text-[110px] text-4xl absolute -z-10 md:left-1/3 top-8 text-[#f2eded89] text-center font-mono font-bold"> Activitys</h1>
                <h1 className="text-xl text-center font-mono text-secondary font-semibold"> Our Activitys</h1>
                <h1 className="text-4xl my-2 text-center mb-8 font-mono text-secondary font-semibold">Latest Awesome Activitys</h1>
                <section className="w-9/12 mx-auto p-6 font-mono mt-5 ">
                    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                        <th className="px-4 py-3">1</th>
                                        <th className="px-4 py-3">Date</th>
                                        <th className="px-4 py-3">Activity Title</th>
                                        <th className="px-4 py-3">Short Details</th>
                                        <th className="px-4 py-3">Student Present</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {/* {data?.activity.map((activity, index) => (
                                        <tr className="text-gray-700">
                                            <td className="px-4 py-3 border">{index + 1}</td>
                                            <td className="px-4 py-3 border">{activity?.date}</td>
                                            <td className="px-4 py-3 text-ms font-semibold border">
                                                {activity?.activityName}
                                            </td>
                                            <td className="px-4 py-3 text-xs border">
                                                {activity?.activityDetails}
                                            </td>
                                            <td className="px-4 py-3 text-sm border">
                                                {activity?.studentList} people
                                            </td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ForumActivitys;