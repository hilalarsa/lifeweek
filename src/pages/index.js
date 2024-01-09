import React from "react";
import moment from "moment";
import Box from "@/components/Box";
// import { Inter } from "next/font/google";

const App = () => {

  const startDate = moment('1997-09-27') // User DOB

  return (
    <div>
      {/* <ul className="flex justify-around px-10 py-2 text-sm font-medium text-center bg-black">
        <li className="">
          <a href="#" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Profile</a>
        </li>
        <li className="me-2">
          <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
        </li>
      </ul> */}
      
      <div>
        {[...Array(78)].fill(0).map((n, year) => (
          <div key={year} className="container flex">
            {/* <div className="px-2 min-w-[30px] fixed left-0">{year + 1}</div> */}
            <div className="flex">
              {[...Array(52)].map((n, week) => {
                const startOfWeek = startDate.clone().add(week, 'weeks').add(year, 'years')
                const endOfWeek = startOfWeek.clone().endOf('week');
                const dateRange = `${startOfWeek.format("DD")}-${endOfWeek.format("DD MMM YYYY")}`

                const idKey = `Y${year}W${week}`;
                return (
                  // Use the Box component
                  <>
                    {/* Vertical ruler */}
                    {week === 0 && <div className="min-w-[30px] min-h-[30px] m-[2px] text-center">{year}</div>}
                    {/* Horizontal ruler */}
                    {year === 0 && <div className="min-w-[30px] min-h-[30px] m-[2px] text-center">{week + 1}</div >}
                    {year > 0 && <Box
                      key={idKey}
                      idKey={idKey}
                      dateRange={dateRange}
                    />}
                  </>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div >
    // </SelectionArea>
  );
};

export default App;
