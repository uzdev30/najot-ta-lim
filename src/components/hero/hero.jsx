import React from "react";
import { useState, useEffect } from "react";
function Hero() {
  const [time, updateTime] = useState(new Date());
  useEffect(() => {
    // timer updation logic
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="px-[100px] mt-10">
      <ul className="flex mx-auto  justify-between ">
        <ul>
          <li className="bg-das bg-no-repeat bg-auto pt-[200px] w-[550px] h-[456px] px-10 ">
            <p className="text-[#ff7a00] font-bold text-[16px]">
              Yangi +3 ta kurs
            </p>
            <h4 className="text-[32px] font-[700]">Dasturlash</h4>
            <p className="text-[#81755c] text-[16px] w-[320px]">
              Sodda til bilan tushuntirilganda, insonlarga baxt eltuvchi, ularni
              muammolariga qulay yechim ko’rsatuvchi soha.
            </p>
            <button className="py-5 font-bold">Kurslar tanlash →</button>
          </li>
          <li className="bg-per bg-no-repeat bg-auto pt-[10px] mt-10 flex justify-bet px-10">
            <div>
              <h5 className="font-[600] w-[230px] text-[22px] ">
                Marketing kursiga 30% chegirma
              </h5>
              <button className="py-5 font-bold">Kurslar tanlash →</button>
            </div>
            <div className="text-[#ff7a00]">
              <p className="text-[18px] font-[500]  text-end w-[220px]">
                start 30.09.2021
              </p>
              <p className="text-[48px] text-end w-[220px] font-[600]">
                {`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
              </p>
              <p className="text-[18px] font-[500] text-end w-[220px]">
                daqiqa qoldi
              </p>
            </div>
          </li>
        </ul>
        <ul className="mr-1">
          <li className="bg-diz bg-no-repeat bg-auto pt-[40px] ml-10 w-[550px] h-[308px] px-10 ">
            <p className="text-[#ff7a00] font-bold text-[16px]">
              Yangi +2 ta kurs
            </p>
            <h4 className="text-[32px] font-[700]">Dizayn</h4>
            <p className="text-[#81755c] mt-2 text-[16px] w-[320px]">
              Doimiy ravishda rivojlanib boruvchi va tobora ko'proq raqobatni
              keltirib chiqaradigan jahon bozorida mahsulotni targ'ib qilishning
              eng samarali vositalaridan biri.
            </p>
            <button className="py-5 font-bold">Kurslar tanlash →</button>
          </li>
          <li className="bg-mar bg-no-repeat  bg-auto pt-[40px] mt-7 ml-10 w-[550px] h-[308px] px-10 ">
            <p className="text-[#ff7a00] font-bold text-[16px]">
              Yangi +4 ta kurs
            </p>
            <h4 className="text-[32px] font-[700]">Marketing</h4>
            <p className="text-[#81755c] text-[16px] w-[270px]">
              Jamiyat uchun qadr-qiymati bor boʻlgan narsalarni yetkazish va
              ular bilan kommunikatsiya qilish uchun harakatlar yigʻindisi
            </p>
            <button className="py-5 font-bold">Kurslar tanlash →</button>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Hero;
