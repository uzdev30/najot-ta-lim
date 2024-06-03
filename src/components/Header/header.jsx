import React from "react";
import { NavLink } from "react-router-dom";
//images
import logo from "../../assets/images/logo.png";
function Header() {
  return (
    <div className="header bg-[#]  px-[80px] py-[20px] ">
      <ul className="flex justify-between ">
        <li className="pt-5">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li className="font-[500]  ">
          <NavLink to={"/about"}>
            <a href="#" className="text-[17px] hover:text-[blue]">
              Biz haqimizda
            </a>
          </NavLink>
          <NavLink to={"/blog"}>
            <a
              href="#"
              className=" mr-12  hover:text-[blue]  ml-10 text-[17px]"
            >
              Blog
            </a>
          </NavLink>

          <button className="px-[24px] py-[9px] my-5 bg-[#e5e0d4] rounded-full">
            Kirish
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
