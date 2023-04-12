import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VolunteerRequest = () => {
  let data = useLoaderData();
  console.log(data);
    return (
      <div>
        <h1 className="text-xl font-bold text-center mt-5">
          All Volunteer Request
        </h1>
        <section className="container mx-auto p-6 font-mono mt-5">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Event Name</th>
                    <th className="px-4 py-3">Student Name</th>
                    <th className="px-4 py-3">Student Id</th>
                    <th className="px-4 py-3">Student Number</th>
                  </tr>
                </thead>
                <tbody className="">
                  {data.map((item , index) => (
                    <tr className="text-gray-700">
                      <td className="px-4 py-3 border">{ index+1}</td>
                      <td className="px-4 py-3 border">{ item.eventName}</td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        {item.name}
                      </td>
                      <td className="px-4 py-3 text-xs border">
                        {item.studentID}
                      </td>
                      <td className="px-4 py-3 text-sm border">
                        {item.phoneNumber}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
};

export default VolunteerRequest;