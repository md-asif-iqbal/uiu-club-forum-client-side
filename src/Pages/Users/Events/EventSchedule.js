import React from "react";

const EventSchedule = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-14">
          Conference Schedule
        </h1>
        <p className="text-center mt-2">
          Dorem Ipsum Dolor Sit. Incidunt Laborum Beatae Earum Nihil Odio
          Consequatur
        </p>
      </div>
      <div>
        <section class="container mx-auto p-6 font-mono mt-10">
          <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div class="w-full overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th class="px-4 py-3">#</th>
                    <th class="px-4 py-3">Topic</th>
                    <th class="px-4 py-3">Speaker</th>
                    <th class="px-4 py-3">Time</th>
                    <th class="px-4 py-3">Room</th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr class="text-gray-700">
                    <td class="px-4 py-3 border">1</td>
                    <td class="px-4 py-3 border">Marketing Workshop</td>
                    <td class="px-4 py-3 text-ms font-semibold border">
                      Lara Quize
                    </td>
                    <td class="px-4 py-3 text-xs border"> 09:30 - 10:30 </td>
                    <td class="px-4 py-3 text-sm border">Times Complex</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3 border">2</td>
                    <td class="px-4 py-3 border">Marketing Workshop</td>
                    <td class="px-4 py-3 text-ms font-semibold border">
                      Lara Quize
                    </td>
                    <td class="px-4 py-3 text-xs border"> 09:30 - 10:30 </td>
                    <td class="px-4 py-3 text-sm border">Times Complex</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3 border">3</td>
                    <td class="px-4 py-3 border">Marketing Workshop</td>
                    <td class="px-4 py-3 text-ms font-semibold border">
                      Lara Quize
                    </td>
                    <td class="px-4 py-3 text-xs border"> 09:30 - 10:30 </td>
                    <td class="px-4 py-3 text-sm border">Times Complex</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3 border">4</td>
                    <td class="px-4 py-3 border">Marketing Workshop</td>
                    <td class="px-4 py-3 text-ms font-semibold border">
                      Lara Quize
                    </td>
                    <td class="px-4 py-3 text-xs border"> 09:30 - 10:30 </td>
                    <td class="px-4 py-3 text-sm border">Times Complex</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3 border">5</td>
                    <td class="px-4 py-3 border">Marketing Workshop</td>
                    <td class="px-4 py-3 text-ms font-semibold border">
                      Lara Quize
                    </td>
                    <td class="px-4 py-3 text-xs border"> 09:30 - 10:30 </td>
                    <td class="px-4 py-3 text-sm border">Times Complex</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventSchedule;
