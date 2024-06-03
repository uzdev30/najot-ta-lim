import React from "react";
import { NavLink } from "react-router-dom";
//images
// import images from "../../assets/images/images.png";

function Content() {
  return (
    <div className="  px-[80px] py-[20px] pb-[50px]  ">
      <ul className="flex justify-between bg-auto bg-no-repeat">
        <li>
          <p className="text-[#ba8d5b]">Ilm va tajriba ulashamiz</p>
          <h3 className="mt-2 text-[43px] font-[600] w-[450px]">
            Shunchaki <br /> o'quv markazi emas, haqiqiy
            <span className="text-[#ba8d5b] underline underline-offset-[2px] decoration-[1px] ">
              {" "}
              professionallar
            </span>{" "}
            makoni
          </h3>

          <p className="font-[600] text-[20px]     mt-5 w-[300px]">
            O’zingizga investitsiya kiritish vaqti, biz bilan birga boshlang!
          </p>
          <div className="flex justify-between mt-5 w-[370px]">
            <NavLink to={"/courses"}>
              <button className="bg-[#7AD111] w-[180px] h-[45px] rounded-full text-white">
                Kursni tanlang →
              </button>
            </NavLink>
            <i className="fas fa-star mt-4 text-[#FF7A00]"></i>
            <h6 className="font-bold mt-3">Birinchi dars bepul</h6>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Content;
