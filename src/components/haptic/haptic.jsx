import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { datas } from "../blog/blog";
import { NavLink, useNavigate } from "react-router-dom";
//images
import haptic from "../../assets/images/haptic2.png";
import hand from "../../assets/images/hand.png";
function Haptic() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-[20px]">
      <div className="bg-bg">
        <Header />
      </div>
      <div className="px-[100px] flex justify-between w-[800px] mt-5 opacity-40">
        <NavLink to={"/"}></NavLink>
        <p className=" cursor-pointer" onClick={() => navigate("/")}>
          Bosh sahifa →
        </p>
        <NavLink to={"/blog"}>
          <p className=" cursor-pointer" onClick={() => navigate("/blog")}>
            Blog →
          </p>
        </NavLink>

        <NavLink to={"/haptic"}>
          <p className=" cursor-pointer" onClick={() => navigate("/haptic")}>
            Haptic UX - sensorli interfeysning taktil tajribasini loyihalash
          </p>
        </NavLink>
      </div>
      <div className="mx-[100px]  my-5">
        <img className="" src={haptic} alt="img" />
      </div>
      <div className="mx-[100px] flex justify-between">
        <div className="text-[22px] flex ml-40 flex-col">
          <i className="fa-brands fa-telegram text-[#4078f1]"></i>
          <i className="fa-brands fa-facebook my-3 text-[#4078f1]"></i>
          <i className="fa-brands fa-youtube mb-3 text-[red]"></i>
          <i className="fa-brands fa-twitter text-[#4078f1]"></i>
        </div>
        <div className="w-[1050px] py-10">
          <h4 className="text-[34px] w-[700px] font-[500]">
            Haptic UX - sensorli interfeysning taktil tajribasini loyihalash
          </h4>
          <div className="flex justify-between w-[880px] mt-5">
            <div className="flex">
              <i className="far mt-1  fa-user"></i>
              <p className="ml-2">Muallif: Jamshid Xoliqulov</p>
            </div>
            <div className="flex">
              <i className="far mt-1  fa-calendar"></i>
              <p className="ml-2"> 1-oktyabr</p>
            </div>
            <div className="flex">
              <i className="far mt-1  fa-clock"></i>
              <p className="ml-2"> 3 soat oldin</p>
            </div>
            <div className="flex">
              <i className="far mt-1  fa-eye"></i>
              <p className="ml-2"> 546 ko'rildi</p>
            </div>
          </div>
          <div className="text-[20px] w-[800px]">
            <p className="mt-5">
              Yangi avlod interaktiv mahsulotlarini yaratish uchun hissiy
              tajribalarni loyihalash.
            </p>
            <p className="my-10">
              Keling, teginish dunyosini o'rganamiz! Dizaynerlar va ishlab
              chiquvchilar bizning teginish sezgimizdan foydalanadigan
              tajribalarni yaratishi mumkin
            </p>
            <p>
              Tegish sezuvchanlik sohasi eng tez rivojlanayotgan, lekin ayni
              paytda foydalanuvchilar tajribasining kam o'rganilgan sohalaridan
              biridir. Qurilmalar bilan kundalik aloqalarimiz klaviatura va
              sichqonchadan telefonga, avtomobil ichidagi ko'ngilochar
              tizimlarga va kundalik narsalarga o'tayotgani sayin, biz qanday
              aloqa qilishimiz va jismoniy dunyodan fikr-mulohazalarni qabul
              qilishimiz muhimroq bo'ladi.
            </p>
          </div>
          <div>
            <img src={hand} className="my-5" alt="" />
          </div>
          <div>
            <h4 className="text-[34px] font-[600]">1.Taktiv sezish nima?</h4>\
            <p className="w-[800px] text-[18px]">
              Taktil sezish deganda teginish aloqasiga aloqa shakli sifatida
              e'tibor qaratadigan kinestetik aloqa sohasi tushuniladi. Taktik
              sezgilar hamma joyda mavjud va jonli tuyg'u beradi. Tasavvur
              qiling -a, chaqalog'ingizni birinchi marta ushlab turing, uzoq
              vaqt ko'rmagan do'stingizni quchoqlang yoki cho'ntagingizda
              telefoningiz tez tebranayotganini his eting. Bu his -tuyg'ular
              bizda qoladigan haqiqiy his -tuyg'ularni keltirib chiqaradi.
            </p>
            <div className="w-[800px] p-6 pr-20 mt-5 bg-[#F9F9F9]">
              <p className="font-[500] text-[19px]">
                Тактильный пользовательский опыт (Haptic UX) использует
                тактильный фидбек, чтобы через прикосновение передать
                пользователю своевременную и полезную информацию.
              </p>
            </div>
            <div className="mt-5">
              <p className="text-[19px]">
                Mana, teginish sezgilarini ishlatishga misollar:
              </p>
              <ol className="ml-10 mt-8">
                <li className="text-[17px] mt-1 list-disc">
                  Qisqa muddatli tebranishni keltirib chiqaradigan mobil
                  qurilmada muvaffaqiyatli to'lov.
                </li>
                <li className="text-[17px] mt-1 list-disc">
                  Noto'g'ri parolni kiritishda xato sharti.
                </li>
                <li className="text-[17px] mt-1 list-disc">
                  Funktsiyani ochish uchun maxsus imo -ishora.
                </li>
                <li className="text-[17px] mt-1 list-disc">
                  Mobil poyga o'yinidagi tebranishlar.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[100px]">
        <h6 className="text-[32px] font-[600]">Mavzuga doir maqolalar</h6>
        <ul className="flex justify-between mt-5">
          {datas.slice(3, 6).map((item) => {
            return (
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
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Haptic;
