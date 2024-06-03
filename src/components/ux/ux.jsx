import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { datas } from "../blog/blog";
import { NavLink, useNavigate } from "react-router-dom";

//images
import screen from "../../assets//images/uxx.jpg";
function Ux() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-[20px]">
      <div className="bg-bg">
        <Header />
      </div>
      <div className="px-[100px] flex justify-between w-[710px] mt-5 opacity-40">
        <NavLink to={"/"}>
          <p className=" cursor-pointer" onClick={() => navigate("/")}>
            Bosh sahifa →
          </p>
        </NavLink>
        <NavLink to={"/blog"}>
          <p className=" cursor-pointer" onClick={() => navigate("/blog")}>
            Blog →
          </p>
        </NavLink>

        <NavLink to={"/ux"}>
          <p className=" cursor-pointer" onClick={() => navigate("/haptic")}>
            UX dizaynining 7 ta qonunlari (rasmlar bilan)
          </p>
        </NavLink>
      </div>
      <div className="mx-[100px]  my-5">
        <img
          width={"1050px"}
          //   height={"100px"}
          className="w-[1000xp]"
          src={screen}
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
            UX dizaynining 7 ta qonunlari (rasmlar bilan)
          </h4>
          <div className="flex justify-between w-[880px] mt-5">
            <div className="flex">
              <i className="far mt-1  fa-user"></i>
              <p className="ml-2">Muallif: Jahongir To'rayev </p>
            </div>
            <div className="flex">
              <i className="far mt-1  fa-calendar"></i>
              <p className="ml-2"> 12-mart</p>
            </div>
            <div className="flex">
              <i className="far mt-1  fa-clock"></i>
              <p className="ml-2"> 21 soat oldin</p>
            </div>
            <div className="flex">
              <i className="far mt-1  fa-eye"></i>
              <p className="ml-2"> 516 ko'rildi</p>
            </div>
          </div>
          <div className="w-[800px] my-10">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              quasi quibusdam iste nulla nostrum, quaerat iure eligendi ullam
              nobis officia perferendis fugiat tempora est, rerum dolores
              blanditiis nisi eius quo unde non! Amet a libero molestias
              exercitationem voluptatem nihil ullam. Reiciendis sunt est
              voluptatibus dolorem non maiores commodi, ullam id nisi tempore
              quas. Omnis alias sequi sapiente culpa quis vero ipsam quo quasi!
              Maiores placeat corrupti, numquam accusamus veritatis illum.
            </p>
            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur dicta autem harum odit corrupti possimus nobis
              assumenda placeat nam, similique nesciunt reprehenderit ea,
              pariatur necessitatibus odio! Culpa repudiandae cum, incidunt
              autem perspiciatis voluptatem inventore illo maxime, tenetur earum
              dolor voluptas accusamus adipisci. Nam illo, nisi atque reiciendis
              ea esse repellendus blanditiis iste maiores dolor, inventore
              libero natus architecto. Incidunt reprehenderit distinctio
              doloremque asperiores, dignissimos consequatur exercitationem
              corporis repellendus, architecto et laborum, quos voluptatem
              error. Tenetur voluptas a unde natus facere error maiores sit, rem
              recusandae, dicta placeat itaque fugit dolores? Libero,
              perferendis reprehenderit nisi recusandae quibusdam corporis
              voluptatum possimus vero! Porro dolorem sed alias saepe unde ut
              explicabo odit cumque quas.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-[100px]">
        <h6 className="text-[32px] font-[600]">Mavzuga doir maqolalar</h6>
        <ul className="flex justify-between mt-5">
          {datas.slice(2, 5).map((item) => {
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

export default Ux;
