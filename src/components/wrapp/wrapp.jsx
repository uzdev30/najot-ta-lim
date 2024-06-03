import React from "react";
//images
import red from "../../assets/images/red.png";
import green from "../../assets/images/green.png";
import orange from "../../assets/images/orange.png";
function Wrapp() {
  return (
    <div className="bg-[#F9F9F9] mx-[100px] mt-5 px-5 py-10">
      <p className="text-[#ff7a00]">Kelajak kasblari</p>
      <h5 className="font-bold text-[24px] mt-3">
        Kategoriyalar bo'yicha tanlangan mavzular
      </h5>
      <ul className="flex mt-5 justify-between flex-wrap w-[1300px]">
        <li className="flex w-[400px] mb-5">
          <img
            className=" bg-[#FFE0E0] rounded-2xl p-[6px] pb-[1px]"
            src={red}
            alt="red"
          />
          <span className="ml-2 mt-1 text-[22px] font-[700]">Dasturlash</span>
        </li>
        <li className="flex w-[400px] mb-5">
          <div>
            <img
              className=" bg-[#BEFFD0] rounded-2xl p-[7px] px-[8px]"
              src={green}
              alt="green"
            />
          </div>
          <span className="ml-2 mt-1 text-[22px] font-[700]">Dizayn</span>
        </li>
        <li className="flex w-[400px] mb-5">
          <div>
            <img
              className=" bg-[#FFF0D3] rounded-2xl p-[7px] px-[8px] "
              src={orange}
              alt="orange"
            />
          </div>
          <span className="ml-2 mt-1 text-[22px] font-[700]">Marketing</span>
        </li>
        <li className="w-[400px]">
          <a
            href="#"
            className="text-[#006cd0] font-[600] text-[18px] underline"
          >
            Python
          </a>
          <p className="font-[400] text-[18px] mt-2">
            Boshlanish vaqti: 30.09.2021
          </p>
        </li>
        <li className="w-[400px]">
          <a href="#" className="text-[#006cd0] font-[600] text-[18px] ">
            Brending
          </a>
          <p className="font-[400] text-[18px] mt-2">
            Boshlanish vaqti: 28.09.2021
          </p>
        </li>
        <li className="w-[400px] my-3">
          <a href="#" className="text-[#006cd0] font-[600] text-[18px] ">
            Raqamli marketing
          </a>
          <p className="font-[400] text-[18px] mt-2">
            Boshlanish vaqti: 27.09.2021
          </p>
        </li>
        <li className="w-[400px] my-3">
          <a href="#" className="text-[#006cd0] font-[600] text-[18px] ">
            Bootcamp
          </a>
          <p className="font-[400] text-[18px] mt-2">
            Boshlanish vaqti: 21.09.2021
          </p>
        </li>
        <li className="w-[400px] my-3">
          <a href="#" className="text-[#006cd0] font-[600] text-[18px] ">
            Grafil dizayner
          </a>
          <p className="font-[400] text-[18px] mt-2">
            Boshlanish vaqti: 22.09.2021
          </p>
        </li>
        <li className="w-[400px] my-3">
          <a href="#" className="text-[#006cd0] font-[600] text-[18px] ">
            SMM pro
          </a>
          <p className="font-[400] text-[18px] mt-2">
            Boshlanish vaqti: 19.09.2021
          </p>
        </li>
        <li className="w-[400px] my-3">
          <a href="#" className="text-[#006cd0] font-[600] text-[18px] ">
            Foundation
          </a>
          <p className="font-[400] text-[18px] mt-2">
            Boshlanish vaqti: 25.09.2021
          </p>
        </li>
        <li className="w-[400px] my-3">
          <a href="#" className="text-[#006cd0] font-[600] text-[18px] ">
            Bootcamp UX/UI Dizayn
          </a>
          <p className="font-[400] text-[18px] mt-2">
            Boshlanish vaqti: 23.09.2021
          </p>
        </li>
        <li className="w-[400px] my-5">
          <a href="#" className="text-[#006cd0] font-[600] text-[18px] ">
            Targeting
          </a>
          <p className="font-[400] text-[18px] mt-2">
            Boshlanish vaqti: 21.09.2021
          </p>
        </li>
      </ul>
      <button className="font-bold text-[19px]">
        Barcha kurslarni ko'rish →
      </button>
    </div>
  );
}

export default Wrapp;
