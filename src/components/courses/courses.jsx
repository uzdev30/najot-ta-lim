import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Sulaymon from "../../assets/images/sulaymon.png";
import Husan from "../../assets/images/husan.png";
import Yunus from "../..//assets/images/yunus.png";
import Husayn from "../../assets/images/husayn.png";
import Fotima from "../../assets//images/Fotima.png";
import Saud from "../../assets/images/saud.png";

import { NavLink, useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Foundation",
    nav: "/foundation",
    img: Sulaymon,
    name: "Sulaymon Ne'matov",
    month: 6,
    lesson: 24,
    more: "lorem afadsfdsfasdfasdf",
  },
  {
    id: 2,
    title: "Foundation",
    img: Husan,
    nav: "/foundation",
    name: "Husan Musayev ",
    month: 6,
    lesson: 24,
    more: "lorem afadsfdsfasdfasdf",
  },
  {
    id: 3,
    title: "Web dasturlash",
    img: Yunus,
    name: "Muhammad Yunus ",
    month: 6,
    lesson: 16,
    more: "lorem afadsfdsfasdfasdf",
  },
  {
    id: 4,
    title: "Backend",
    img: Husayn,
    name: " Muhammad Husayn",
    month: 6,
    lesson: 12,
    more: "lorem afadsfdsfasdfasdf",
  },
  {
    id: 5,
    title: "Bootcamp",
    img: Fotima,
    name: " Abduqahharova Fotima",
    month: 6,
    lesson: 14,
    more: "lorem afadsfdsfasdfasdf",
  },
  {
    id: 6,
    title: "Kiberxavfsizlik",
    img: Saud,
    name: "Saud Abdulwahed  ",
    month: 6,
    lesson: 16,
  },
  {
    id: 7,
    title: "Flutter",
    img: Saud,
    name: " Saud Abdulwahed",
    month: 6,
    lesson: 18,
    more: "",
  },
];

const more = [
  {
    id: 1,
    more: "Foundation Programming kursi professional dasturlashga ilk qadam hisoblanadi. Ushbu kursga darsturlashda tajribasi bo'lmagan barcha boshlang'ich dasturchilarga tavsiya qilinadi. Foundation kursi orqali butunlay o'zgacha bo'lgan dasturlash olamiga moslashish osonroq kechadi. Kursni muvaffaqiyatli yakunlaganlarga sertifikatlar beriladi.",
  },
  {
    id: 2,
    more: " Dasturlashga ilk bor kelganlarning zamonaviy texnologiyalar bo'yicha bilimlari har xil darajada. Ko'pchilikning bazaviy tajriba va bilimlari darslarni boshlab olish uchun yetarli bo'lmaydi. Darslar sifati va tezligini oshirish uchun Foundation kursi orqali barcha o'quvchilarni bir xil chiziqqa olib kelib olish shart.",
  },
  {
    id: 3,
    more: "Veb Dasturlash esa veb brauzerda ishlaydigan veb sahifa va veb ilovalarni ishlab chiqish va ularning sifatini doimiy ravishda nazorat qilish sohasidir. Kundalik ravishda dunyo aholisining juda katta qismi foydalanadigan Google, Yandex va Facebook tarmoqlari Veb Dasturlashning namunalaridir.",
  },
  {
    id: 4,
    more: " Backend (inglizcha back-end) - bu xizmatning dasturiy ta'minot va apparat qismidir. Bu veb-sayt mantig'i amalga oshiriladigan vositalar to'plami. Bu bizning ko'zimizdan yashiringan narsa, ya'ni kompyuter va brauzerdan tashqarida sodir bo'ladi. (Back End) Orqa tomon ishlab chiquvchilari veb-saytlarning foydalanuvchilar bilan bevosita aloqasi bo'lmagan `qopqoq ostida` qismlarini yaratadilar",
  },
  {
    id: 5,
    more: "BootCamp bu - chuqur va intensiv ta’lim bo‘lib, unda asosiy e’tibor aniq bir yo‘nalishga qaratiladi hamda shu yo‘nalishga aloqador bo‘lmagan boshqa qo‘shimcha narsalarga chalg‘imasdan ilm olishga harakat qilinadi.",
  },
  {
    id: 6,
    more: " Kompyuter xavfsizligi, kiberxavfsizlik yoki axborot texnologiyalari xavfsizligi (IT xavfsizligi) - bu kompyuter tizimlari va tarmoqlarini ma'lumotlarni oshkor qilish, o'g'irlash yoki ularning apparat, dasturiy ta'minot yoki elektron ma'lumotlariga zarar etkazish, shuningdek, buzilishdan himoya qilish. Ular taqdim etadigan xizmatlarni noto'g'ri yo'naltiris",
  },
  {
    id: 7,
    more: "  Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi.",
  },
];

export default function Courses() {
  const [modal, setModal] = useState(false);
  const [online, setOnline] = useState(true);
  const [ofline, setOfline] = useState(false);
  // const [modal, setModal] = useState(false);
  const [opening, setOpenning] = useState(more);
  const [term, setTerm] = useState("");
  const openModal = (id) => {
    const newInform = more.filter((item) => item.id === id);
    setOpenning(newInform);

    setModal(true);
  };
  const [inform, setInform] = useState(data);
  const navigate = useNavigate();
  const Changes = () => {
    setOfline(true);
    setOnline(false);
  };
  const isOnline = () => {
    setOfline(false);
    setOnline(true);
  };
  const updateFn = (e) => {
    const qidirish = e.target.value.trim().toLowerCase();
    setTerm(qidirish);
  };

  const filterData = data.filter((el) => {
    if (term === "") {
      return el;
    } else {
      return el.title.toLowerCase().includes(term);
    }
    setInform(filterData);
  });

  return (
    <div className="container mx-auto p-[20px] ">
      <div className="bg-[#F1F0EE]">
        <Header />
      </div>
      <div className="mx-[100px] pb-10 mt-5">
        <div className="text-[#c4c4c4] flex">
          <NavLink to={"/"}>
            <div className=" cursor-pointer" onClick={() => navigate("/")}>
              Bosh sahifa →
            </div>
          </NavLink>
          <NavLink to={"/courses"}>
            <div
              className=" cursor-pointer ml-2"
              onClick={() => navigate("/courses")}
            >
              Kurslar
            </div>
          </NavLink>
        </div>
        <div className="flex justify-between  w-[1200px]">
          <div className="flex">
            <h5 className="font-bold text-[40px]">Barcha kurslar</h5>
            <div className="border  p-[5px] rounded-2xl mt-4 ml-6 bg-[#c4c4c4] h-[40px] pb-[1px]">
              <span
                className={`${
                  online && " bg-white"
                } border-none mr-3 rounded-2xl py-1 px-2 `}
                onClick={isOnline}
              >
                Online
              </span>
              <span
                className={`${
                  ofline && `bg-white`
                } border-none mr-3 rounded-2xl py-1 px-2  `}
                onClick={Changes}
              >
                Offline
              </span>
            </div>
          </div>
          <div className="border-[2px] border-black w-[260px] rounded-3xl mt-4  h-[40px]">
            <i className="fas fa-search text-[22px] mt-2 ml-1"></i>
            <input
              onChange={updateFn}
              type="text "
              className="h-[34px] active:border-none focus:outline-none ml-2 "
              value={term}
            />
          </div>
        </div>
        <div className="mt-5">
          <ul className="flex justify-between mt-10">
            <li>
              <div>
                <div className="bg-das bg-cover w-[320px] bg-no-repeat  h-[120px]  py-6 px-5">
                  <h6 className="text-[24px] font-[600]">Dasturlash</h6>
                  <span>12ta kurs</span>
                </div>
              </div>
              <div className="my-5">
                <div className="bg-diz bg-cover w-[320px] bg-no-repeat  h-[120px]  py-6 px-5">
                  <h6 className="text-[24px] font-[600]">Dizayn</h6>
                  <span>5ta kurs</span>
                </div>
              </div>
              <div>
                <div className="bg-mar bg-cover w-[320px] bg-no-repeat  h-[120px]  py-6 px-5">
                  <h6 className="text-[24px] font-[600]">Marketing</h6>
                  <span>3ta kurs</span>
                </div>
              </div>
              <div className="bg-per  bg-no-repeat bg-auto w-[320px] h-[160px] pt-[10px] mt-10  px-5">
                <div>
                  <h5 className="font-[600] w-[230px] text-[20px] ">
                    Marketing kursiga 30% chegirma
                  </h5>
                </div>
                <div className="text-[#ff7a00]">
                  <p className="text-[14px] font-[500]  text-start w-[220px]">
                    start 30.09.2021
                  </p>
                  <p className="text-[28px] text-start w-[220px] font-[600]">
                    14:12:2
                  </p>
                  <button className="- font-bold text-[black]">
                    Kurslar tanlash →
                  </button>
                </div>
              </div>
            </li>
            <li className="flex justify-between w-[800px] flex-wrap">
              {filterData.map((inform) => (
                <div
                  key={inform.id}
                  className="w-[350px] rounded h-[130px] bg-[#F9F9F9] p-4 pt-2    border-[#81755C]"
                >
                  <p>
                    {" "}
                    <i
                      key={inform.id}
                      onClick={() => {
                        openModal(inform.id);
                      }}
                      className="fas fa-info-circle ml-[290px]"
                    ></i>
                  </p>
                  <NavLink to={inform.nav}>
                    <h4 className="text-[25px] font-bold mt-[-12px]">
                      {inform.title}
                    </h4>
                  </NavLink>
                  <div className="flex">
                    {" "}
                    <img
                      src={inform.img}
                      className="w-[24px] h-[24px] mt-1"
                      alt="img"
                    />
                    <p className="text-[19px] font-[500] ml-2">{inform.name}</p>
                  </div>
                  <div className="text-[#81755C] flex justify-between mt-2">
                    <p>Davomiylik: {inform.month} oy </p>
                    <p>Darslar soni: {inform.lesson} ta</p>
                  </div>
                </div>
              ))}
              <dialog
                open={modal}
                className="   mx-[800px] my-[180px]"
                closeModal={() => setModal(false)}
              >
                <div className="h-auto  bg-gray-500 text-white rounded-2xl p-2 w-[371px]  ">
                  <i onClick={() => setModal(false)} className="fas fa-x"></i>
                  {opening.map((item) => (
                    <p>{item.more}</p>
                  ))}
                </div>
              </dialog>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
