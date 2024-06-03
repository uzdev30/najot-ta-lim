import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

function Bart() {
  // Sample data
  const data = [
    { name: "Avgust", first: 500, second: 908, third: 580 },
    {
      name: "Sentabr ",
      first: 680,
      second: 480,
      third: 1390,
    },
    { name: "Oktabr", first: 2250, second: 800, third: 1080 },
  ];

  return (
    <div className="my-5 bg-[#F9F9F9] w-[404px]">
      <BarChart width={420} height={190} data={data}>
        {/* <p className="mt-20">adsfd</p> */}
        <Bar dataKey="first" fill="#DCDFF0" />
        <Bar dataKey="second" fill="#DCDFF0" />
        <Bar dataKey="third" fill="#DCDFF0" />

        <CartesianGrid stroke="#cc" />

        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  );
}

export default Bart;
