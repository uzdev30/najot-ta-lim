import React from "react";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
//
import dizayner from "../../assets/images/dizayner.png";
import haptic from "../../assets/images/haptic.png";
import iphone from "../../assets/images/iphone.png";
import Figma from "../../assets/images/figma.png";
import ilova from "../../assets/images/ilova.png";
import ux from "../../assets/images/ux.png";

const datas = [
  {
    id: 1,
    name: "/dizayn",
    title: "Dizayn naqshlari. Mukammal akkordeon yaratish",
    img: dizayner,
    type: "design",
  },
  {
    id: 2,
    name: "/haptic",
    title: "Haptic UX - sensorli interfeysning taktil tajribasini loyihalash",
    img: haptic,
    type: "program",
  },
  {
    id: 3,
    name: "/iphone",
    title: "IPhone 13 ekran o'lchamlari",
    img: iphone,
    type: "market",
  },
  {
    id: 4,
    name: "/figma",
    title: "Tezroq ishlash uchun 10 ta Figma maslahatlari",
    img: Figma,
    type: "design",
  },
  {
    id: 5,
    name: "/naqsh",
    title: "Bu 5 ta ilova sizni yanada samarali dizayner qiladi",
    img: ilova,
    type: "design",
  },
  {
    id: 6,
    name: "/ux",
    title: "UX dizaynining 7 ta qonunlari (rasmlar bilan)",
    img: ux,
    type: "design",
  },
];
function Blog() {
  const [all, setAll] = useState(true);
  const [prog, setProg] = useState(false);
  const [dis, setDis] = useState(false);
  const [mar, setMar] = useState(false);

  const [data, setData] = useState(datas);
  const navigate = useNavigate();
  const allFn = () => {
    return setData(datas);
  };

  const programFn = () => {
    const newData = datas.filter((item) => item.type === "program");
    return setData(newData);
  };
  const designFn = () => {
    const newData = datas.filter((item) => item.type === "design");
    return setData(newData);
  };

  const marketFn = () => {
    const newData = datas.filter((item) => item.type === "market");
    return setData(newData);
  };
  return (
    <div className="container mx-auto px-[20px]">
      <div className="bg-bg">
        <Header />
      </div>
      <div className="flex mx-[100px] mt-5 opacity-[0.6] text-[18px]">
        <NavLink to={"/"}>
          <div className=" cursor-pointer" onClick={() => navigate("/")}>
            Bosh sahifa →
          </div>
        </NavLink>
        <NavLink to={"/blog"}>
          <div
            className=" cursor-pointer ml-1"
            onClick={() => navigate("/blog")}
          >
            Blog
          </div>
        </NavLink>
      </div>
      <div className="my-5 mx-[100px] flex justify-between w-[1200px]">
        <div className="px-16 bg-phone bg-no-repeat text-gray bg w-[520px] h-[400px] pt-[300px]">
          <p>
            Vimeo, Dropbox, Youtube va boshqalardan misollar yordamida Bottom
            sheets loyihalashni o'rganing.
          </p>
          <div className="flex justify-between mt-4">
            <div className="flex">
              <i className="far   mt-1 fa-clock"></i>
              <span>2 soat oldin</span>
            </div>
            <div>
              <i className="far fa-eye"></i>
              <span>546 Ko'rildi</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="bg-kino text-white bg-auto pt-[120px] px-10 bg-no-repeat">
              <p className="text-[20px]">
                {" "}
                Kino marketing - sotuvlaringizni oshiring
              </p>
              <div className="flex justify-between w-[420px] py-3">
                <div className="flex">
                  <i className="far   mt-1 fa-clock"></i>
                  <span>2 soat oldin</span>
                </div>
                <div>
                  <i className="far fa-eye"></i>
                  <span>546 Ko'rildi</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-t mt-2 from-gray-400 to-white text-gray  bg-auto pt-[100px] px-10 bg-no-repeat">
            <p className="text-[18px]  w-[470px]">
              {" "}
              Instagramda biznes hisoblarini moderatsiya qilish: brend nomidan
              tomoshabinlar bilan qanday muloqot qilish
            </p>
            <div className="flex justify-between w-[420px] py-3">
              <div className="flex">
                <i className="far   mt-1 fa-clock"></i>
                <span>2 soat oldin</span>
              </div>
              <div>
                <i className="far fa-eye"></i>
                <span>546 Ko'rildi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#81755C] my-10 border pt-1 px-3 mx-[100px]  bg-[#F1F0EE] rounded-3xl w-[400px] flex justify-between h-[40px]">
        <p
          onClick={() => {
            allFn();
            setAll(true);
            setProg(false);
            setDis(false);
            setMar(false);
          }}
          className={` ${
            all && "bg-white font-[600] text-black"
          } rounded-2xl mb-1 px-1 cursor-pointer`}
        >
          Barcha maqolalar
        </p>
        <p
          onClick={() => {
            allFn();
            programFn();
            setAll(false);
            setProg(true);
            setDis(false);
            setMar(false);
          }}
          className={` ${
            prog && "bg-white font-[600] text-black"
          } rounded-2xl mb-1 px-1 cursor-pointer`}
        >
          Dasturlash
        </p>
        <p
          onClick={() => {
            allFn();
            designFn();
            setAll(false);
            setProg(false);
            setDis(true);
            setMar(false);
          }}
          className={` ${
            dis && "bg-white font-[600] text-black"
          } rounded-2xl mb-1 px-1 cursor-pointer`}
        >
          Dizayn
        </p>
        <p
          onClick={() => {
            allFn();
            marketFn();

            setAll(false);
            setProg(false);
            setDis(false);
            setMar(true);
          }}
          className={` ${
            mar && "bg-white font-[600] text-black"
          } rounded-2xl mb-1 px-1  cursor-pointer`}
        >
          Marketing
        </p>
      </div>
      <div className="mx-[100px]">
        <ul className="flex flex-wrap justify-between w-[1150px]">
          {data.map((item) => (
            <li className="p-4 w-[340px] h-[290px] bg-[#F9F9F9] mb-8 ">
              <img src={item.img} alt="" />
              <NavLink to={item.name}>
                <p className="w-[288px] mt-3 font-[600] cursor-pointer">
                  {item.title}
                </p>
              </NavLink>
              <div className="flex mt-2 justify-between w-[310px]  text-[13px] font-bold py-3">
                <div className="flex">
                  <i className="far   mt-1 fa-clock"></i>
                  <span>2 soat oldin</span>
                </div>
                <div>
                  <i className="far fa-eye"></i>
                  <span>546 Ko'rildi</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-[100px] my-10 flex justify-between">
        <li className="w-[732px] list-none text-center text-[white] py-20 pt-14 rounded h-[460px] bg-gradient-to-bl to-[red] from-[blue]">
          <h4 className="text-[28px]">Kuchlilar bilan bo’ling!</h4>
          <p className="w-[409px] text-[22px] mx-auto my-16">
            Bizda o’z sohasining mutaxassislari faoliyat olib borishadi. Sizni
            o’z safimizda ko’rishdan mamnun bo’lamiz
          </p>
          <button className="bg-white text-black font-[600] text-[20px] rounded-3xl py-[16px] px-10">
            Hamkorlik qiling →
          </button>
        </li>
        <li className="w-[508px] list-none text-start  p-16 pt-14 rounded h-[460px] bg-gradient-to-bl bg-[#F9F9F9]">
          <h4 className="text-[34px] font-[700]">Aloqa markazi</h4>
          <p className="font-[600] text-[20px] w-[240px] mt-6 mb-10">
            O’zingizni qiziqtirgan savollarga javob oling!
          </p>
          <div className="text-[#BA8D5B] font-[600] mt-23 text-[32px]">
            +998 (99) 828-00-11
          </div>
          <div className="text-[17px] mt-2 font-bold">
            08:00 dan 20:00 gacha
          </div>
          <button className="mt-14  rounded-3xl borde7r text-[20px] w-[216px] h-[63px] bg-[#C3E0A0]">
            Qo’ng’iroq qiling
          </button>
        </li>
      </div>
      <Footer />
    </div>
  );
}

// export default Blog;
export default Blog;
export { datas };
