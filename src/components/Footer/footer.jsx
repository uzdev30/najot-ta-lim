import React from "react";
//images
import najot from "../../assets/images/najot.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="header mt-5  px-[80px] py-[20px] pb-[50px] bg-[#F1F0EE]">
      <ul className="flex justify-between">
        <li className="mx-aut w-[224px] items-center text-center">
          <img className="mx-auto" src={najot} alt="logo" />

          <p className=" text-cener text-[14px] mt-5">
            Saytda ishlatilgan ma’lumotlar, video kontentlar himoyalangan.
            Ularni yozib olish, ko'chirish, tarqatish mumkin emas, aks holda
            javobgarlikka tortilasiz!
          </p>
        </li>
        <li>
          <NavLink to={"/courses"}>
            <h4 className="text-[18px] font-[500]">Kurslar</h4>
          </NavLink>
          <div className="flex flex-col  mt-5">
            <a href="#" className="hover:text-[blue] mt-2">
              Dizayn
            </a>

            <a href="#" className="hover:text-[blue] mt-2">
              Dasturlash
            </a>

            <a href="#" className="hover:text-[blue] mt-2">
              Marketing
            </a>

            <a href="#" className="hover:text-[blue] mt-2">
              Xorijiy tillar
            </a>
          </div>
        </li>
        <li>
          <h4 className="text-[18px] font-[500]">Dasturlash</h4>
          <div className="flex flex-col mt-5">
            <NavLink to={"/foundation"}>
              <a href="#" className="hover:text-[blue] mt-2">
                Foundation
              </a>
            </NavLink>

            <a href="#" className="hover:text-[blue] mt-2">
              Web dasturlash
            </a>

            <a href="#" className="hover:text-[blue] mt-2">
              Android dasturlash
            </a>

            <a href="#" className="hover:text-[blue] mt-2">
              IOS dasturlash{" "}
            </a>
          </div>
        </li>
        <li>
          <h4 className="text-[18px] font-[500]"> Dizayn</h4>
          <div className=" flex flex-col  mt-5">
            <a href="#" className="hover:text-[blue] mt-2">
              Bootcapm Grafik Dizayn
            </a>
            <a href="#" className="hover:text-[blue] mt-2">
              Bootcapm UI/UX Dizayn
            </a>
            <a href="#" className="hover:text-[blue] mt-2">
              Grafik Dizayn
            </a>
            <a href="#" className="hover:text-[blue] mt-2">
              Brending{" "}
            </a>
          </div>
        </li>
        <li>
          <h4 className="text-[18px] font-[500]">Marketing</h4>
          <div className="flex-col flex mt-5">
            <a href="#" className="hover:text-[blue] mt-2">
              {" "}
              Raqamli marketing
            </a>
            <a href="#" className="hover:text-[blue] mt-2">
              {" "}
              SMM Pro
            </a>
            <a href="#" className="hover:text-[blue] mt-2">
              Youtube{" "}
            </a>
            <a href="#" className="hover:text-[blue] mt-2">
              Targeting{" "}
            </a>
          </div>
        </li>
      </ul>
      <hr className="ml-[370px] mt-7 border-gray-400" />
      <ul className="mt-10 flex  justify-between">
        <li>
          <p className="w-[220px]">
            © 2021. <br /> All rights reserved
          </p>
        </li>
        <li className="w-[300px]">
          <h4 className="font-[700] text-[17px]">
            {" "}
            Toshkent shahri, Xadra maydoni, Sebzor ko'chasi
          </h4>
          <p className="mt-5">
            Mo'ljal: O'zbekiston davlat sirkining orqa tarafi, Milliy taomlar
            yonida.
          </p>
        </li>
        <li>
          <h5 className="font-[700] text-[17px]">Tarmoqlar:</h5>
          <div className="mt-5 w-[150px] flex justify-around">
            <a target="_blank" href="https://t.me/najottalim">
              <i className="fa-brands fa-telegram text-[#006CD0] text-[27px]"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/najottalim/">
              <i className="fa-brands fa-facebook text-[#006CD0] text-[27px]"></i>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/results?search_query=najot+ta%27lim"
            >
              <i className="fa-brands fa-youtube text-[red] text-[27px]"></i>
            </a>
            <a href="https://twitter.com/najottalim" target="_blank">
              <i className="fa-brands fa-twitter text-[#006CD0] text-[27px]"></i>
            </a>
          </div>
        </li>
        <li>
          <h5 className="font-[700] text-[17px]">Telefon raqam:</h5>
          <p className="mt-5 text-[22px] font-[700]">+998 (71) 200-11-23</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
