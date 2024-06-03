import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
///images
import icon from "../../assets/images/najot.svg";
import temur from "../../assets/images/temur.png";
import jasur from "../../assets//images/jasur.png";
import girland from "../../assets/images/girlandboy.png";
import hackers from "../../assets/images/hackers.png";
import bag from "../../assets/images/bag.png";
import red from "../../assets/images/red.png";
import green from "../../assets/images/green.png";
import orange from "../../assets/images/orange.png";
import Bars from "../bar/bar";
import Barf from "../bar/barf";
import Bart from "../bar/bart";
import { NavLink, useNavigate } from "react-router-dom";

function About() {
  const [about, setAbout] = useState(true);
  const [group, setGroup] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-[20px]">
      <div className="bg-bg">
        <Header />
      </div>
      <div className="flex justify-between mt-3 opacity-[0.6] mx-20 w-[220px]">
        <NavLink to={"/"}>
          <span
            className=" cursor-pointer"
            onClick={() => navigate("/")}
          ></span>
          Bosh sahifa →{" "}
        </NavLink>
        <NavLink>
          {" "}
          <span className=" cursor-pointer " onClick={() => navigate("/about")}>
            Biz Haqimizda
          </span>
        </NavLink>
      </div>
      <div className="flex justify-between w-[500px] mx-20 mt-3 ">
        <h3 className="text-[38px] font-bold">Najot Ta'lim</h3>
        <div className="mt-3 py-1 px-4  w-[240px] rounded-3xl h-[45px] text-[#81755C] bg-[#F1F0EE]">
          <button
            onClick={() => {
              setAbout(true);
              setGroup(false);
            }}
            className={`${
              about && `bg-white text-[black]`
            } text-[14px] font-[600] px-[5px] rounded-2xl h-[30px]`}
          >
            Biz haqimizda
          </button>
          <button
            onClick={() => {
              setGroup(true);
              setAbout(false);
            }}
            className={`  ${
              group && `bg-white text-[black]`
            } ml-2 text-[14px] font-[600] mt-1 px-[5px] h-[30px]  rounded-2xl`}
          >
            Bizning jamoa
          </button>
        </div>
      </div>
      <div className="mx-[100px] 0y-10">
        {about ? (
          <div>
            <ul className="flex  justify-between">
              <li className="py-10 px-12 w-[520px] mt-10 h-[504px]  bg-[#F9F9F9]">
                <div className="flex justify-between">
                  <img className="w-[125px] h-[100px]" src={icon} alt="" />
                  <div>
                    <span className="text-[14px] text-[#FF7A00]">
                      Markaz haqida
                    </span>
                    <h4 className="text-[26px] w-[254px]   font-[600]">
                      Hammasi 2018-yildan boshlangan
                    </h4>
                  </div>
                </div>
                <p className="w-[400px] mt-8 ml-7 text-[#81755C] text-[16px]">
                  2018-yil 1-oktabr Najot Ta’limga asos solingan kun. Dastlab
                  markazimiz o'z faoliyatini boshlaganida kurslarda guruhlar
                  toʻlishi uch oylab kutilgan davrlar ham bo'lgan edi. Bugun esa
                  guruhlar soni bir necha barobar ortib, ikkinchi filial ham ish
                  boshladi.
                </p>
                <p className="w-[400px] ml-7 text-[#81755C] text-[16px] my-10">
                  Quvonarlisi, markazimiz bitiruvchilari yurtimizning turli xil
                  tashkilotlarida, IT korxonalarda oʻz oʻrnini topdi.
                </p>
                <p className="w-[400px] ml-7 text-[#81755C] text-[16px] ">
                  Maqsadimiz, bir necha yillardan soʻng ham bosib oʻtilgan
                  yoʻlning qiymati va qimmati qalblarimizni faqat va faqat faxr
                  va shukronaga toʻldirsin!
                </p>
              </li>
              <li className="py-10 px-12 w-[520px] mt-10 h-[504px]  bg-[#F9F9F9]">
                <div className="flex justify-between">
                  <img className="w-[100px] h-[100px]" src={temur} alt="" />
                  <div>
                    <span className="text-[14px] text-[#FF7A00]">
                      Markaz asoschisi
                    </span>
                    <h4 className="text-[30px] w-[254px]   font-[700]">
                      Temurbek Adhamov
                    </h4>
                  </div>
                </div>
                <p className="w-[400px] mt-6 ml-7 text-[#81755C] text-[16px]">
                  1994-yil 31-avgustda Farg’ona viloyatining Quva tumanida
                  tavallud topgan. 2015-2019-yillarda Toshkent shahridagi Imom
                  Al-Buxoriy nomidagi Islom institutini tamomlagan.
                </p>
                <p className="w-[400px] ml-7 text-[#81755C] text-[16px] mt-5">
                  2018-yil 1-oktyabrda Najot Ta’limga asos solgan. Hozirgi kunga
                  kelib filiallar soni 2 taga yetdi. Undan tashqari, Abutech
                  digital kompaniyasi, Osmondagi bolalar loyihasini ham
                  asoschisi hisoblanadi.
                </p>
                <h6 className="ml-7 mt-3 font-[600] text-[18px]">
                  Ijtimoiy tarmoqlar
                </h6>
                <div className="ml-7 mt-4 flex justify-between text-[28px] w-[170px]">
                  <a
                    href="https://www.youtube.com/c/TemurbekAdhamov"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands text- fa-youtube text-[red] mt-2"></i>
                  </a>
                  <a
                    href="https://twitter.com/fargoniy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-twitter mt-2 text-[blue]"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/temurbek_adhamov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram text-[red]"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/temurbek.adham/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook text-[blue]"></i>
                  </a>
                </div>
              </li>
            </ul>
            <div className="my-8">
              <h4 className="text-[20px] font-[600]">Maqsadimiz yuqori</h4>
              <ul className="my-10 flex justify-between">
                <li className="w-[340px]">
                  <img src={girland} alt="" />

                  <h6 className="text-[18px] font-[600] my-5">
                    Qiziquvchi yoshlarni topamiz
                  </h6>
                  <p className="w-[250px] mt-2  text-[15px]">
                    Hozirgi kunga kelib yurtimizda IT sohasiga bo’lgan talab
                    juda ham ortib ketdi. Sababi, IT sohasida yoshlarning
                    diplomsiz ham o’z mustahkam o’rniga ega bo’lishi, asosiy
                    omillardan biri. Shu sababli, biz IT sohasiga qiziqqan
                    yoshlarni qidirib topamiz.
                  </p>
                </li>
                <li className="w-[340px]">
                  <div className=" bg-bg2 h-[138px]">
                    <img
                      className=" w-[218px] mx-auto h-[116px] "
                      src={hackers}
                      alt=""
                    />
                  </div>

                  <h6 className="text-[18px] font-[600] my-5">O’qitamiz</h6>
                  <p className="w-[320px] mt-2  text-[15px]">
                    Eng yaxshi investitsiya - bu ta’limga kiritilgan
                    investitsiyadir. Hozirgi texnologiya asrida IT sohasini
                    o’rganish “must have” hisoblanadi. Oliygohda 4 yil davomida
                    o’rganishi kerak bo’lgan narsani 1 yil ichida ham mukammal
                    o’rgansa bo’ladi va biz ishni amalga oshirish uchun harakat
                    qilamiz.
                  </p>
                </li>
                <li className="w-[340px]">
                  <div className="bg-bg2">
                    <img src={bag} alt="" />
                  </div>
                  <h6 className="text-[18px] font-[600] my-5">
                    Ishga joylashishga yordam beramiz{" "}
                  </h6>
                  <p className="w-[350px] mt-2  text-[15px]">
                    6-10 oy davomida chuqurlashtirilgan ta’limni olgandan so’ng,
                    o’quvchida keng imkoniyatlar eshigi ochiladi. Asosiysi,
                    diplomsiz, hech qanday tanish-bilishsiz katta kompaniyalarda
                    faoliyat olib borishi mumkin bo’ladi va biz bu yo’lda
                    o’quvchilarimizga ko’mak bo’lamiz.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[24px] font-[600]">
                Raqamlar statistikasida
              </h4>
              <ul className="my-5 flex justify-between">
                <li>
                  <div className="flex justify-between  w-[170px]">
                    <div className="bg-[#FFE0E0] px-2 pt-2 pb-[1px] rounded-2xl w-[55px]">
                      <img src={red} alt="" />
                    </div>
                    <h5 className="text-[20px]  font-[600] mt-2 ">
                      Dasturlash
                    </h5>
                  </div>
                  <h5 className="text-[20px] font-[600] my-5">Talabalar</h5>
                  <div className="my-10">
                    <Bars />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between  w-[170px]">
                    <div className="bg-[#BEFFD0] px-3 py-2  rounded-2xl w-[55px]">
                      <img src={green} alt="" />
                    </div>
                    <h5 className="text-[20px] font-[600] opacity-30 mt-2 ">
                      Dizayn
                    </h5>
                  </div>
                  <h5 className="text-[20px] font-[600] my-5">Bitiruvchilar</h5>
                  <div className="my-10">
                    <Barf />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between  w-[170px]">
                    <div className="bg-[#FFF0D3] px-3 py-2 rounded-2xl w-[55px]">
                      <img src={orange} alt="" />
                    </div>
                    <h5 className="text-[20px] font-[600] mt-2 opacity-30 ">
                      Marketing
                    </h5>
                  </div>
                  <h5 className="text-[20px] font-[600] my-5">
                    Ishga joylashganlar
                  </h5>
                  <div className="my-10">
                    <Bart />
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-10 flex justify-between">
              <li className="w-[732px] list-none text-center text-[white] py-20 pt-14 rounded h-[460px] bg-gradient-to-bl to-[red] from-[blue]">
                <h4 className="text-[28px]">Kuchlilar bilan bo’ling!</h4>
                <p className="w-[409px] text-[22px] mx-auto my-16">
                  Bizda o’z sohasining mutaxassislari faoliyat olib borishadi.
                  Sizni o’z safimizda ko’rishdan mamnun bo’lamiz
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
                <button className="mt-14  rounded-3xl borde7r text-[20px] w-[216px] h-[63px] bg-[#C3E0A0] hover:bg-green-400  hover:shadow-2xl">
                  Qo’ng’iroq qiling
                </button>
              </li>
            </div>
            <div className="flex justify-between">
              <li className="w-[514px] h-[612px] bg-[#F9F9F9] list-none p-10">
                <div className="text-[28px] font-[600] pb-8 border-b-2 border-[#DADADA]">
                  Biz bilan bog'laning
                </div>
                <div className="mt-2">Bizning raqam</div>
                <div className="text-[28px] font-[600] text-[#BA8D5B] pb-6 border-b-2 border-[#DADADA]">
                  +998 (71) 123-45-67
                </div>
                <div className="mt-2">Ish vaqti</div>
                <div className="text-[28px] font-[600] text-[#BA8D5B] pb-6 border-b-2 border-[#DADADA]">
                  08:00 dan 20:00 gacha
                </div>
                <div className="mt-2">Elektron pochta </div>
                <div className="text-[28px] font-[600] text-[#BA8D5B] pb-6 border-b-2 border-[#DADADA]">
                  najot-talim@gmail.com
                </div>
                <div className="mt-2">Ijtimoiy tarmoqlar</div>
                <div className="ml-1 mt-4 flex justify-between text-[28px] w-[170px]">
                  <i className="fa-brands text- fa-google text-green-300"></i>
                  <i className="fa-brands fa-instagram text-[red]"></i>
                  <i className="fa-brands fa-twitter text-[blue]"></i>
                  <i className="fa-brands fa-facebook text-[blue]"></i>
                </div>
                <button className="mt-8  rounded-3xl w-[304px] h-[56px] bg-[#C3E0A0]">
                  Istalgan paytda bog’laning
                </button>
              </li>
              <li className="list-none p-5 bg-[#F9F9F9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0728840437946!2d69.2012376755285!3d41.28551820230848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1suz!2s!4v1715066024523!5m2!1suz!2s"
                  className="w-[700px] border-0 h-[570px]"
                ></iframe>
              </li>
            </div>
            <div className="my-10 flex justify-around">
              <li className="h-[440px] w-[360px] bg-gradient-to-bl from-[blue] list-none to-purple-500 p-10 text-white">
                <h3 className="text-[36px] font-[600]">
                  Toshkent shahar, Xadra filiali
                </h3>
                <p className="w-[200px] mt-3 text-[20px] ">
                  +998 (71) 123-45-67 08:00 dan 20:00 gacha
                </p>
                <p className="w-[220px] mt-3 text-[20px] ">
                  najot-talim@gmail.com Ijtimoiy tarmoqlar:
                </p>
                <p className="w-[220px] mt-3 text-[20px] ">t.me/najot_talim</p>
                <button className="text-black bg-white font-bold w-[243px] h-[50px] mt-8 rounded-3xl">
                  Istalgan paytda bog'laning
                </button>
              </li>
              <li className="h-[440px] w-[360px] list-none bg-gradient-to-bl from-purple-600 to-[yellowgreen] p-10 text-white">
                <h3 className="text-[36px] font-[600]">
                  Toshkent shahar, Chimboy filiali
                </h3>
                <p className="w-[200px] mt-3 text-[20px] ">
                  +998 (71) 123-45-67 08:00 dan 20:00 gacha
                </p>
                <p className="w-[220px] mt-3 text-[20px] ">
                  najot-talim@gmail.com Ijtimoiy tarmoqlar:
                </p>
                <p className="w-[220px] mt-4 text-[20px] ">t.me/najot_talim</p>
                <button className="text-black bg-white font-bold w-[243px] h-[50px] mt-8 rounded-3xl">
                  Istalgan paytda bog'laning
                </button>
              </li>
              <li className="h-[440px] w-[360px] bg-gradient-to-bl from-blue-600 list-none to-pink-500 p-10 text-white">
                <h3 className="text-[36px] font-[600]">
                  Toshkent shahar, Chilonzor filiali
                </h3>
                <p className="w-[200px] mt-3 text-[20px] ">
                  +998 (71) 123-45-67 08:00 dan 20:00 gacha
                </p>
                <p className="w-[220px] mt-3 text-[20px] ">
                  najot-talim@gmail.com Ijtimoiy tarmoqlar:
                </p>
                <p className="w-[220px] mt-3 text-[20px] ">t.me/najot_talim</p>
                <button className="text-black bg-white font-bold w-[243px] h-[50px] mt-8 rounded-3xl">
                  Istalgan paytda bog'laning
                </button>
              </li>
            </div>
          </div>
        ) : null}
        {group ? (
          <div className="my-8">
            <ul className="flex  justify-between flex-wrap w-[1000px]">
              <li className="w-[304px] text-[white] px-7 mb-10 py-5 h-[318px] bg-gradient-to-bl from-blue-700 to-blue-400">
                <img
                  className="w-[134px] h-[134px] rounded-full shadow-4xl   shadow-blue-500  text-relati rght-[-60px] "
                  src={jasur}
                  alt="img"
                />
                <div className="my-4  text-[16px]">Veb dasturchi</div>
                <p className="text-[26px]">Muhammadxon Najimov</p>
              </li>
              <li className="w-[304px] text-[white] px-7 py-5 h-[318px] bg-gradient-to-bl from-blue-700 to-blue-200">
                <img
                  className="w-[134px] h-[134px] rounded-full shadow-4xl   shadow-blue-500  text-relati rght-[-60px] "
                  src={jasur}
                  alt="img"
                />
                <div className="my-4  text-[16px]">Veb dasturchi</div>
                <p className="text-[26px]">Muhammadjavohir Sur'atov</p>
              </li>
              <li className="w-[304px] text-[white] px-7 py-5 h-[318px] bg-gradient-to-bl to-blue-700 from-blue-500">
                <img
                  className="w-[134px] h-[134px] rounded-full shadow-4xl   shadow-blue-500  text-relati rght-[-60px] "
                  src={jasur}
                  alt="img"
                />
                <div className="my-4  text-[16px]">Veb dasturchi</div>
                <p className="text-[26px]">Saud Abdulwahed</p>
              </li>
              <li className="w-[304px] text-[white] px-7 py-5 h-[318px] bg-gradient-to-bl from-green-700 to-green-300">
                <img
                  className="w-[134px] h-[134px] rounded-full shadow-4xl   shadow-green-500  text-relati rght-[-60px] "
                  src={jasur}
                  alt="img"
                />
                <div className="my-4  text-[16px]">Designer </div>
                <p className="text-[26px]">Muhammadxon Najimov</p>
              </li>
              <li className="w-[304px] text-[white] px-7 py-5 h-[318px] bg-gradient-to-bl from-[#5DA106] to-[#9FCD9B]">
                <img
                  className="w-[134px] h-[134px] rounded-full shadow-4xl   shadow-[#9FCD9B]  text-relati rght-[-60px] "
                  src={jasur}
                  alt="img"
                />
                <div className="my-4  text-[16px]">Marketolog </div>
                <p className="text-[26px]">Muhammadjavohir Sur'atov</p>
              </li>
              <li className="w-[304px] text-[white] px-7 py-5 h-[318px] bg-gradient-to-bl from-green-700 to-green-200">
                <img
                  className="w-[134px] h-[134px] rounded-full shadow-4xl   shadow-green-500  text-relati rght-[-60px] "
                  src={jasur}
                  alt="img"
                />
                <div className="my-4  text-[16px]">Backend dasturchi </div>
                <p className="text-[26px]">Saud Abdulwahed</p>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default About;
