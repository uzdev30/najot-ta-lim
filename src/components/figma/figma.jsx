import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { NavLink, useNavigate } from "react-router-dom";
import { datas } from "../blog/blog";
//images
import figma from "../../assets//images/download.png";
function Figma() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-[20px]">
      <div className="bg-bg">
        <Header />
      </div>
      <div className="px-[100px] flex justify-between w-[740px] mt-5 opacity-40">
        <NavLink to={"/"}></NavLink>
        <p className=" cursor-pointer" onClick={() => navigate("/")}>
          Bosh sahifa →
        </p>
        <NavLink to={"/blog"}>
          <p className=" cursor-pointer" onClick={() => navigate("/blog")}>
            Blog →
          </p>
        </NavLink>

        <NavLink to={"/figma"}>
          <p className=" cursor-pointer" onClick={() => navigate("/haptic")}>
            Tezroq ishlash uchun 10 ta Figma maslahatlari
          </p>
        </NavLink>
      </div>
      <div className="mx-[100px]  my-5">
        <img
          width={"1050px"}
          //   height={"100px"}
          className=""
          src={figma}
          alt="img"
        />
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
            Tezroq ishlash uchun 10 ta Figma maslahatlari
          </h4>
          <div className="flex justify-between w-[880px] mt-5">
            <div className="flex">
              <i className="far mt-1  fa-user"></i>
              <p className="ml-2">Muallif: Behruz Muzaffarov </p>
            </div>
            <div className="flex">
              <i className="far mt-1  fa-calendar"></i>
              <p className="ml-2"> 3-fevral</p>
            </div>
            <div className="flex">
              <i className="far mt-1  fa-clock"></i>
              <p className="ml-2"> 21 soat oldin</p>
            </div>
            <div className="flex">
              <i className="far mt-1  fa-eye"></i>
              <p className="ml-2"> 546 ko'rildi</p>
            </div>
          </div>
          <div className="w-[800px] my-12">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
              tenetur iure temporibus inventore minima dolore? Autem,
              reprehenderit a voluptatum temporibus nobis error aspernatur
              deleniti corrupti perferendis sit assumenda at! Autem!
            </p>
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam
              repudiandae impedit magnam sapiente, perferendis sed! Repellat
              quod possimus, magni amet porro doloremque, laborum officia sit
              recusandae ipsam voluptas culpa et ducimus laudantium molestiae
              fugit architecto itaque eum illum cumque fuga iste quam odio? Quis
              ipsum inventore voluptatem repellendus quia officiis ad ducimus
              nesciunt, laudantium ipsa, sit optio id est tempore, asperiores
              consequuntur quo hic voluptates sunt modi! Ullam tempore, minus
              consectetur id qui cum reiciendis adipisci quo error repudiandae
              assumenda eum quia aperiam vel dolore ut animi totam. Officia iste
              quo nulla aliquid earum voluptate animi, perferendis explicabo
              voluptas quam delectus ut repudiandae officiis, quia unde hic
              quisquam. Sint.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-[100px]">
        <h6 className="text-[32px] font-[600]">Mavzuga doir maqolalar</h6>
        <ul className="flex justify-between mt-5">
          {datas.slice(0, 3).map((item) => {
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

export default Figma;
