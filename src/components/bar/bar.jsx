import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

function Bars() {
  // Sample data
  const data = [
    { name: "Avgust", first: 500, second: 908, third: 580 },
    {
      name: "Sentabr ",
      first: 680,
      second: 480,
      third: 1390,
    },
    { name: "Oktabr", first: 2450, second: 900, third: 1180 },
  ];

  return (
    <div className="my-5  bg-[#F9F9F9] w-[404px]">
      <BarChart width={400} height={190} data={data}>
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

export default Bars;
