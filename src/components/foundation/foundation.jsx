import React, { useState } from "react";
import Header from "../../components/Header/header";
import Footer from "../Footer/footer";
import laptop from "../../assets/images/Laptop.png";
import Sulaymon from "../../assets//images/sulaymon.png";
import code from "../../assets/images/code.png";
import pointer from "../../assets/images/pointer.png";
import trues from "../../assets/images/true.png";
import logo from "../../assets/images/logoo.png";
import ser from "../../assets/images/group.png";
import BuyModal from "../buymodal/buyModal";
import { NavLink, useNavigate } from "react-router-dom";

function Foundation() {
  const [modal, setModal] = useState(false);
  const [course, setCourse] = useState(true);
  const [sience, setSience] = useState(false);
  const [third, setThird] = useState(false);
  const [program, setProgram] = useState(false);
  const [enter, setEnter] = useState(false);
  const [dart, setDart] = useState(false);
  const [flut, setFlut] = useState(false);
  const [state, setState] = useState(false);
  const [material, setMaterial] = useState(false);
  const [layout, setLayout] = useState(false);
  const [sertifcate, setsertificate] = useState(false);
  const [faq, setFaq] = useState(false);
  const [quesfir, setQuesfir] = useState(false);
  const [quessec, setQuessec] = useState(false);
  const [questhir, setQuesthir] = useState(false);
  const [quesfour, setQuesffour] = useState(false);
  const [quesfif, setQuesfif] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-[20px] ">
      <div className="bg-bg">
        <Header />
      </div>
      <div className="mx-[100px]">
        <div className="opacity-[0.6] flex mt-3 text-[17px] translate-y-4 ">
          <NavLink to={"/"}>
            <p className=" cursor-pointer" onClick={() => navigate("/")}>
              Bosh sahifa →
            </p>
          </NavLink>
          <NavLink to={"/courses"}>
            <p className=" cursor-pointer" onClick={() => navigate("/courses")}>
              Kurslar →
            </p>
          </NavLink>
          <NavLink to={"/foundation"}>
            <p
              className=" cursor-pointer"
              onClick={() => navigate("/foundation")}
            >
              Foundation{" "}
            </p>
          </NavLink>
        </div>
        <div className="bg-[#F9F9F9] mt-10 pl-10 pt-10 pb-0">
          <ul className="flex justify-between">
            <li>
              <h3 className="text-[40px] font-[600]">Foundation</h3>
              <p className="w-[406px] mt-2">
                Foundationni oʻqish davomida oʻquvchilar dasturlash strukturasi,
                dasturlash mantigʻi, uning algoritmi, dastur yaratilgandan keyin
                uning orqa fonida qanday jarayonlar boʻlishini toʻliq anglab
                yetadi. Yana bir yangilik, oʻquvchilar kurs davomida bonus
                sifatida ingliz tilidan ham bilim olishlari taʼminlanadi.
              </p>
              <div className="mt-3 flex">
                <img className="w-[30px] h-[30px]" src={Sulaymon} alt="" />
                <p className="font-[500] ml-2 text-[19px]">Sulaymon Ne'matov</p>
              </div>
              <div className="flex mt-5 justify-between w-[330px] text-[#81755C]">
                <span>Davomiylik:4 oy</span>
                <span className="ml-10">Darslar soni: 24ta</span>
              </div>
            </li>
            <li className="mt-[-50px] pl-[110px]">
              <div className="flex px-3 py-1 bg-[#FFD580] w-[625px] rounded-2xl">
                <i className="fas fa-gift text-[#FF7A00] text-[22px]"></i>
                <p className="font-[500] text-[18px] ml-4">
                  10-oktabrgacha kursni sotib oling va 30% chegirmaga ega
                  bo’ling
                </p>
              </div>
              <img src={laptop} className="w-[700px]  h-[500xp] " alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="px-[100px]">
        <div className="flex justify-between mt-10">
          <button
            onClick={() => {
              setCourse(true);
              setSience(false);
              setThird(false);
              setProgram(false);
              setsertificate(false);
              setFaq(false);
            }}
            className={`${
              course && `border-blue text-[blue] border-b-[3px]`
            } pb-5 hover:border-b-[3px] border-[blue] hover:text-[blue]`}
          >
            Kurs kim uchun mo’ljallangan
          </button>
          <button
            onClick={() => {
              setCourse(false);
              setSience(true);
              setThird(false);
              setProgram(false);
              setsertificate(false);
              setFaq(false);
            }}
            className={`${
              sience && `border-blue text-[blue] border-b-[3px]`
            } pb-5 hover:border-b-[3px] border-[blue] hover:text-[blue]`}
          >
            Kursdan qanday bilimlarni olasiz
          </button>
          <button
            onClick={() => {
              setCourse(false);
              setSience(false);
              setThird(true);
              setProgram(false);
              setsertificate(false);
              setFaq(false);
            }}
            className={`${
              third && `border-blue text-[blue] border-b-[3px]`
            } pb-5 hover:border-b-[3px] border-[blue] hover:text-[blue]`}
          >
            Kurs qanday tartibda o’tiladi
          </button>
          <button
            onClick={() => {
              setCourse(false);
              setSience(false);
              setThird(false);
              setProgram(true);
              setsertificate(false);
              setFaq(false);
            }}
            className={`${
              program && `border-blue text-[blue] border-b-[3px]`
            } pb-5 hover:border-b-[3px] border-[blue] hover:text-[blue]`}
          >
            Kurs dasturi
          </button>
          <button
            onClick={() => {
              setCourse(false);
              setSience(false);
              setThird(false);
              setProgram(false);
              setsertificate(true);
              setFaq(false);
            }}
            className={`${
              sertifcate && `border-blue text-[blue] border-b-[3px]`
            } pb-5 hover:border-b-[3px] border-[blue] hover:text-[blue]`}
          >
            Sertifikat
          </button>
          <button
            onClick={() => {
              setCourse(false);
              setSience(false);
              setThird(false);
              setProgram(false);
              setsertificate(false);
              setFaq(true);
            }}
            className={`${
              faq && `border-blue text-[blue] border-b-[3px]`
            } pb-5 hover:border-b-[3px] border-[blue] hover:text-[blue]`}
          >
            Ko‘p so‘raladigan savollar
          </button>
        </div>
        <hr />
        <ul>
          <li>
            {course ? (
              <div className="pb-10">
                <p className="text-[28px] mt-7  font-[500]">
                  Kurs Kimlar uchun
                </p>
                <div className="flex justify-between mt-5">
                  <div className="bg-[#F9F9F9] w-[400px]  p-5">
                    <div className="flex justify-between w-[170px]">
                      <img src={pointer} alt="img" />
                      <p className="w-[100px] font-[500]">
                        Asl dasturchi uchun
                      </p>
                    </div>
                    <p className="mt-3">
                      Bir platformadan o'ting chegaralarni buzing va bir
                      universal dasturchiga aylaning. Ishlaydigan prototiplarni
                      yaratishni va Flutterda loyihalarini bajarishni o'rganing.
                      Master Dart va portfoliyangizga yangi ilovalarni qo'shing.
                      Android va iOS uchun shaxsiy loyihalarni qayta yozing, o'z
                      kompaniyangizda tizimni amalga oshirishni taklif qiling
                      yoki yangi jamoaga qo'shiling.
                    </p>
                  </div>
                  <div className="bg-[#F9F9F9] w-[400px]  p-5">
                    <div className="flex justify-between w-[250px]">
                      <img src={code} alt="img" />
                      <p className="w-[180px] font-[400] font-[500]">
                        Boshqa yo'nalishdagi dasturchilar{" "}
                      </p>
                    </div>
                    <p className="mt-3">
                      Mobil ilovalarni ishlab chiqish va sinovdan o'tkazish
                      xususiyatlari haqida bilib oling. Dart, Flutter framework
                      bilan tanishing va platformalararo portfel ilovalarini
                      yozing. Kursni tugatgandan so'ng, siz yo'nalishni
                      o'zgartirib, mobil rivojlanish bo'yicha karerani
                      boshlashingiz mumkin bo'ladi.
                    </p>
                  </div>
                  <div className="bg-gradient-to-bl text-white to-blue-500 from-yellow-500 px-5 py-8 w-[400px]">
                    <h5 className="text-[18px]">Kurs narxi</h5>
                    <span className="font-[500] text-[20px]">
                      2 400 000 so'm
                    </span>
                    <div className="mt-3 flex justify-between">
                      <p className="w-[100px]">3 ga bo'lib to'lash imkoni</p>
                      <p className="w-[130px]">Boshlanish vaqti: 30.10.2021</p>
                    </div>
                    <hr className="mt-2" />
                    <div className="flex mt-3 justify-between">
                      <p className="w-[170px]">800 ming so'm/oyiga</p>
                      <p className="w-[130px]">4ta joy qoldi</p>
                    </div>
                    <div className="flex mt-10 justify-between">
                      <div className="flex">
                        <i className="fas fa-video mt-4"></i>

                        <p className="mt-3 ml-3">Oldindan ko'rish</p>
                      </div>
                      <button
                        onClick={() => setModal(true)}
                        className="px-4 py-3 hover:bg-gray-500 hover:text-[white] bg-white rounded-[40px] text-black"
                      >
                        Sotib olish →
                      </button>
                    </div>
                  </div>
                </div>
                <BuyModal
                  openModal={modal}
                  closeModal={() => setModal(false)}
                />
              </div>
            ) : null}
            {sience ? (
              <div className="mt-10">
                <h4 className="text-[28px] font-[600]">
                  Kursdan qanday bilimlar olasiz
                </h4>
                <div className="w-[900px] h-[150px] mt-8 p-5 flex justify-between bg-[#F9F9F9]">
                  <img
                    className="mt-2 w-[16-px] h-[16px]"
                    src={trues}
                    alt="img"
                  />
                  <div className="ml-6">
                    <h6 className="text-[21px] font-[500]">
                      {" "}
                      Turli platformalar uchun ilovalarni ishlab chiqish
                    </h6>
                    <p className="text-[19px] mt-3">
                      Siz Android va iOS da bir xil ishlaydigan ilovalarni
                      yaratishingiz mumkin. Har bir platforma uchun bir nechta
                      dasturlash tillarini o'rganishingiz va ilovalarni noldan
                      yaratishingiz shart emas.
                    </p>
                  </div>
                </div>
                <div className="w-[900px] h-[150px] mt-8 p-5 flex  bg-[#F9F9F9]">
                  <img
                    className="mt-2 w-[16-px] h-[16px]"
                    src={trues}
                    alt="img"
                  />
                  <div className="ml-6">
                    <h6 className="text-[21px] font-[500]">
                      {" "}
                      Foydalanuvchi tajribasi bilan ishlash
                    </h6>
                    <p className="text-[19px] mt-3">
                      UX-ni tushuning va chiroyli va qulay foydalanuvchi
                      interfeyslarini yaratishni o'rganing.
                    </p>
                  </div>
                </div>
                <div className="w-[900px] h-[150px] mt-8 p-5 flex justify-between bg-[#F9F9F9]">
                  <img
                    className="mt-2 w-[16-px] h-[16px]"
                    src={trues}
                    alt="img"
                  />
                  <div className="ml-6">
                    <h6 className="text-[21px] font-[500]">
                      {" "}
                      Turli platformalar uchun ilovalarni ishlab chiqish
                    </h6>
                    <p className="text-[19px] mt-3">
                      Kodni o'zgartirganda, loyihani bir zumda tiklash orqali
                      rivojlanishni tezlashtiradigan, Flutter funksiyasini hot
                      reload bilan ishlashni o'rganing.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            {third ? (
              <div className="my-10">
                <h5 className="text-[28px] font-[600]">
                  Kurs qanday tartibda o'tiladi
                </h5>
                <div className="bg-[#F9F9F9] w-[900px] p-10 mt-10">
                  <ul className="flex flex-wrap">
                    <li className="flex mr-10 mb-5">
                      <div className="px-[10px] mt-1 w-[32px] h-[32px] py-[2px] text-[18px] text-white bg-[orange] inline rounded-full">
                        1
                      </div>
                      <div className="ml-2">
                        <h6 className="text-[22px] font-[500]">
                          Mavzu o’rganib chiqiladi
                        </h6>
                        <p className="w-[200px] mt-1 font-[500]">
                          Video darslarda orqali amaliyot qilinadi.
                        </p>
                      </div>
                    </li>
                    <li className="flex ml-10">
                      <div className="px-[10px] mt-1 w-[32px] h-[32px] py-[2px] text-[18px] text-white bg-[orange] inline rounded-full">
                        3
                      </div>
                      <div className="ml-2">
                        <h6 className="text-[22px] font-[500]">
                          Ustoz bilan birga ishlanadi
                        </h6>
                        <p className="w-[200px] mt-1 font-[500]">
                          O’zingizga qulay vaqtda uyga vazifalarni bajarasiz
                        </p>
                      </div>
                    </li>
                    <li className="flex mt-5 mr-10">
                      <div className="px-[10px] mt-1 w-[32px] h-[32px] py-[2px] text-[18px] text-white bg-[orange] inline rounded-full">
                        2
                      </div>
                      <div className="ml-2">
                        <h6 className="text-[22px] font-[500]">
                          Uyga vazifalar bajariladi
                        </h6>
                        <p className="w-[200px] mt-1 font-[500]">
                          O’rgangan bilimlarni mustahkamlaysiz va xatolarni
                          to’g’irlash
                        </p>
                      </div>
                    </li>
                    <li className="flex mt-5 ml-10">
                      <div className="px-[10px] mt-1 w-[32px] h-[32px] py-[2px] text-[18px] text-white bg-[orange] inline rounded-full">
                        4
                      </div>
                      <div className="ml-2">
                        <h6 className="text-[22px] font-[500]">
                          Diplom ish himoyasi
                        </h6>
                        <p className="w-[200px] mt-1 font-[500]">
                          Qo’shimcha portfoliongiz yana bir ishga ko’payadi
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
            {program ? (
              <div className="mt-8 ">
                <h4 className="text-[28px] font-[500]">Kurs dasturi</h4>
                <div className="bg-[#F9F9F9] mt-6 w-[900px] py-5 px-10">
                  <div className=" flex justify-between pr-10">
                    <p className="w-[490px] font-[500] text-[20px]">
                      {" "}
                      Siz dasturlash tajribasiga ega bo'lishingiz va yuqori
                      darajadagi tillardan birini bilishingiz kerak. Dastur
                      onlayn ma'ruzalar va amaliy topshiriqlarga ega modullarni
                      o'z ichiga oladi.
                    </p>
                    <div className="text-[#81755C]">
                      <p className="w-[140px] text-[20px]">Darslar soni</p>
                      <span className="w-[100px] text-[40px]">24ta</span>
                    </div>
                    <div className="text-[#81755C]">
                      <p className="w-[140px] text-[20px]">Online darslar</p>
                      <span className="w-[100px] text-[40px]">20ta</span>
                    </div>
                  </div>
                  <hr className="mt-10" />
                  <div className="mt-10">
                    <li className="flex   justify-between">
                      <div>
                        <h5 className="font-[500] text-[18px]">1.Kirish</h5>
                        {enter ? (
                          <p className="font-[500] ml-2 mt-1">
                            Flutter dasturini o'rnating va sozlang, loyiha
                            tuzilishi va Codestyling bilan tanishing.
                          </p>
                        ) : null}
                      </div>
                      <i
                        className={`fas ${
                          enter && `fa-x text-[12px] font-[600]`
                        } fa-plus text-[16px] mt-2`}
                        onClick={() => setEnter((prev) => !prev)}
                      ></i>
                    </li>
                    <li className="flex my-10  justify-between">
                      <div>
                        <h5 className="font-[500] text-[18px]">
                          {" "}
                          2. Dart 2 asoslari{" "}
                        </h5>
                        {dart ? (
                          <p className="font-[500] ml-2 mt-1">
                            Flutter dasturini o'rnating va sozlang, loyiha
                            tuzilishi va Codestyling bilan tanishing.
                          </p>
                        ) : null}
                      </div>
                      <i
                        className={`fas ${
                          dart && `fa-x text-[12px] font-[600]`
                        } fa-plus text-[16px] mt-2`}
                        onClick={() => setDart((prev) => !prev)}
                      ></i>
                    </li>
                    <li className="flex my-10 justify-between">
                      <div>
                        <h5 className="font-[500] text-[18px]"> 3. Flutter</h5>
                        {flut ? (
                          <p className="font-[500] ml-2 mt-1">
                            Flutter dasturini o'rnating va sozlang, loyiha
                            tuzilishi va Codestyling bilan tanishing.
                          </p>
                        ) : null}
                      </div>
                      <i
                        className={`fas ${
                          flut && `fa-x text-[12px] font-[600]`
                        } fa-plus text-[16px] mt-2`}
                        onClick={() => setFlut((prev) => !prev)}
                      ></i>
                    </li>
                    <li className="flex my-10 justify-between">
                      <div>
                        <h5 className="font-[500] text-[18px]">
                          {" "}
                          4. StatefulWidget/StatelessWidget
                        </h5>
                        {state ? (
                          <p className="font-[500] ml-2 mt-1">
                            Flutter dasturini o'rnating va sozlang, loyiha
                            tuzilishi va Codestyling bilan tanishing.
                          </p>
                        ) : null}
                      </div>
                      <i
                        className={`fas ${
                          state && `fa-x text-[12px] font-[600]`
                        } fa-plus text-[16px] mt-2`}
                        onClick={() => setState((prev) => !prev)}
                      ></i>
                    </li>
                    <li className="flex my-10  justify-between">
                      <div>
                        <h5 className="font-[500] text-[18px]">
                          {" "}
                          5. Cupertino vs Material
                        </h5>
                        {material ? (
                          <p className="font-[500] ml-2 mt-1">
                            Flutter dasturini o'rnating va sozlang, loyiha
                            tuzilishi va Codestyling bilan tanishing.
                          </p>
                        ) : null}
                      </div>
                      <i
                        className={`fas ${
                          material && `fa-x text-[12px] font-[600]`
                        } fa-plus text-[16px] mt-2`}
                        onClick={() => setMaterial((prev) => !prev)}
                      ></i>
                    </li>
                    <li className="flex my-10  justify-between">
                      <div>
                        <h5 className="font-[500] text-[18px]"> 6. Layout </h5>
                        {layout ? (
                          <p className="font-[500] ml-2 mt-1">
                            Flutter dasturini o'rnating va sozlang, loyiha
                            tuzilishi va Codestyling bilan tanishing.
                          </p>
                        ) : null}
                      </div>
                      <i
                        className={`fas ${
                          layout && `fa-x text-[12px] font-[600]`
                        } fa-plus text-[16px] mt-2`}
                        onClick={() => setLayout((prev) => !prev)}
                      ></i>
                    </li>
                  </div>
                </div>
              </div>
            ) : null}
            {sertifcate ? (
              <div className="m-10">
                <h4 className="text-[32px] font-[500]">Sertifikat</h4>
                <div className="w-[900px] pl-10 flex justify-between bg-[#F9F9F9]">
                  <div className="pt-10 flex">
                    <div className="p-[20px] h-[72px] rounded-2xl bg-white shadow-2xl">
                      <img className="w-[29px] h-[32px]" src={logo} alt="" />
                    </div>
                    <div className="ml-8">
                      <h6 className="text-[24px] font-[500]">
                        Najot Ta’lim diplomi
                      </h6>
                      <p className="w-[200px] font-[400]">
                        Siz kursni tugatganingizni tasdiqlaydi va ishga kirishda
                        qo'shimcha dalil bo'ladi.
                      </p>
                    </div>
                  </div>
                  <img className="w-[418px]" src={ser} alt="" />
                </div>
              </div>
            ) : null}

            {faq ? (
              <div>
                <h3 className="text-[26px] font-[600] my-10">
                  Ko'p so'raladigan savollar
                </h3>
                <div className="bg-[#F9F9F9] w-[900px] py-10 px-12 ">
                  <div className="flex justify-between mb-10">
                    <div>
                      <h1 className="text-[22px] w-[500px]  font-[500]">
                        1.Men hech qachon Flutter dasturida ishlab ko’rmaganman.
                         Men qila olamanmi?
                      </h1>
                      {quesfir ? (
                        <p className="font-[400] text-[18px] ml-2 mt-3">
                          Siz dasturlash tajribasiga ega bo'lishingiz va yuqori
                          darajadagi tillardan birini bilishingiz kerak. Boshqa
                          tomondan, tajribali ustozlar sizga kurs davomida sizni
                          nazorat qiladigan yordam beradi.
                        </p>
                      ) : null}
                    </div>
                    <i
                      className={`fas ${
                        quesfir && `fa-x text-[12px] font-[600]`
                      } fa-plus text-[16px] mt-2`}
                      onClick={() => setQuesfir((prev) => !prev)}
                    ></i>
                  </div>
                  <div className="flex justify-between my-10">
                    <div>
                      <h1 className="text-[22px] w-[500px]  font-[500]">
                        2. Mashg'ulotlar jadvali qanday? Siz kursni ishi borlar
                          uchun moslashtira olasizmi?
                      </h1>
                      {quessec ? (
                        <p className="font-[400] text-[18px] ml-2 mt-3">
                          Siz dasturlash tajribasiga ega bo'lishingiz va yuqori
                          darajadagi tillardan birini bilishingiz kerak. Boshqa
                          tomondan, tajribali ustozlar sizga kurs davomida sizni
                          nazorat qiladigan yordam beradi.
                        </p>
                      ) : null}
                    </div>
                    <i
                      className={`fas ${
                        quesfir && `fa-x text-[12px] font-[600]`
                      } fa-plus text-[16px] mt-2`}
                      onClick={() => setQuessec((prev) => !prev)}
                    ></i>
                  </div>
                  <div className="flex justify-between my-10">
                    <div>
                      <h1 className="text-[22px] w-[500px]  font-[500]">
                        {" "}
                        3. O'qishga haftada necha soat ajratishim kerak?
                      </h1>
                      {questhir ? (
                        <p className="font-[400] text-[18px] ml-2 mt-3">
                          Siz dasturlash tajribasiga ega bo'lishingiz va yuqori
                          darajadagi tillardan birini bilishingiz kerak. Boshqa
                          tomondan, tajribali ustozlar sizga kurs davomida sizni
                          nazorat qiladigan yordam beradi.
                        </p>
                      ) : null}
                    </div>
                    <i
                      className={`fas ${
                        quesfir && `fa-x text-[12px] font-[600]`
                      } fa-plus text-[16px] mt-2`}
                      onClick={() => setQuesthir((prev) => !prev)}
                    ></i>
                  </div>
                  <div className="flex justify-between mh-10">
                    <div>
                      <h1 className="text-[22px] w-[500px]  font-[500]">
                        4. O'qituvchilar bilan aloqa qila olamanmi?
                      </h1>
                      {quesfour ? (
                        <p className="font-[400] text-[18px] ml-2 mt-3">
                          Siz dasturlash tajribasiga ega bo'lishingiz va yuqori
                          darajadagi tillardan birini bilishingiz kerak. Boshqa
                          tomondan, tajribali ustozlar sizga kurs davomida sizni
                          nazorat qiladigan yordam beradi.
                        </p>
                      ) : null}
                    </div>
                    <i
                      className={`fas ${
                        quesfir && `fa-x text-[12px] font-[600]`
                      } fa-plus text-[16px] mt-2`}
                      onClick={() => setQuesffour((prev) => !prev)}
                    ></i>
                  </div>
                  <div className="flex justify-between my-10">
                    <div>
                      <h1 className="text-[22px] w-[500px]  font-[500]">
                        {" "}
                        5. Bo’lib to'lash imkoni bormi?
                      </h1>
                      {quesfif ? (
                        <p className="font-[400] text-[18px] ml-2 mt-3">
                          Siz dasturlash tajribasiga ega bo'lishingiz va yuqori
                          darajadagi tillardan birini bilishingiz kerak. Boshqa
                          tomondan, tajribali ustozlar sizga kurs davomida sizni
                          nazorat qiladigan yordam beradi.
                        </p>
                      ) : null}
                    </div>
                    <i
                      className={`fas ${
                        quesfir && `fa-x text-[12px] font-[600]`
                      } fa-plus text-[16px] mt-2`}
                      onClick={() => setQuesfif((prev) => !prev)}
                    ></i>
                  </div>
                </div>
              </div>
            ) : null}
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Foundation;
