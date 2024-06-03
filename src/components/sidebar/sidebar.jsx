import React from "react";
//images
import teacher from "../../assets/images/teachers.png";
import icon from "../../assets//images/najot.svg";
import star from "../../assets/images/star.svg";
function Sidebar() {
  return (
    <div className="mx-[100px] mt-10 ">
      <ul className="flex justify-between">
        <li className="bg-[#f8f7ee] py-2 px-10 w-[720px]">
          <ul className="flex justify-between w-[600px]">
            <li>
              <img src={icon} className="w-[254px] h-[201px] mt-10" alt="" />
              <h4 className="text-[24px] mt-10 font-bold">Najot ta'lim</h4>
              <p className="text-[20px] mt-2 w-[330px] text-[#81755C]">
                Zamonaviy kasbni biz bilan o’rganing va o’z faoliyatingizni
                boshlang
              </p>
              <button className="mt-10 font-[500]">Batafsil →</button>
            </li>
            <li className="mt-6 ">
              <span className="font-[500]">Bitiruvchilar</span>
              <h4 className="font-[500] text-[70px] mb-8">+400</h4>
              <span className="font-[500]">O'quvchilar</span>
              <h4 className="font-[500] text-[70px] mb-8">+800</h4>
              <span className="font-[500]">Ustozlarimiz</span>
              <h4 className="font-[500] text-[70px] mb-8">+30</h4>
            </li>
          </ul>
        </li>
        <li className="bg-[#f8f7ee] w-[420px]">
          <img src={teacher} className="w-[420px]" alt="" />
          <div className="flex mt-4">
            <img src={star} alt="img" />
            <p className="w-[260px] font-[400]">
              Agar siz bizning oilamizga qo'shilish istagida bo‘lsangiz, bizning
              eshigimiz siz uchun doimo ochiq
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
