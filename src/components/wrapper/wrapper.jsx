import React from "react";
//images
import icon from "../../assets/images/icon.svg";

import group from "../../assets/images/group.png";

function Wrapper() {
  return (
    <div className="pl-[30px] h-[506px] mx-[100px] mt-5 bg-[#E7E3DB] mt-10">
      <ul className="flex justify-between">
        <li className="pt-[140px]">
          <img
            className="p-[10px] bg-white rounded-2xl mb-5"
            src={icon}
            alt=""
          />

          <span className="text-[#ff7a00] font-[400]"> +20 dan ortiq</span>
          <h4 className="text-[26px] font-bold mt-10">Sertifikatlar</h4>
          <p className="w-[300px] text-[20px] mt-5">
            Barcha yo’nalishlarda kursni tugatganlik haqida tasdiqlovchi
            sertifikatlar topshiriladi.{" "}
          </p>
          <button className="my-5 font-[700]">Kurslarni tanlash →</button>
        </li>
        <li className="flex justify-between">
          <img className=" " src={group} alt="alt" />
        </li>
      </ul>
    </div>
  );
}

export default Wrapper;
