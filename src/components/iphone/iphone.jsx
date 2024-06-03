import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { NavLink, useNavigate } from "react-router-dom";
import { datas } from "../blog/blog";
//images
import screen from "../../assets//images/screen.png";
function IPhone() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-[20px]">
      <div className="bg-bg">
        <Header />
      </div>
      <div className="px-[100px] flex justify-between w-[590px] mt-5 opacity-40">
        <NavLink to={"/"}></NavLink>
        <p className=" cursor-pointer" onClick={() => navigate("/")}>
          Bosh sahifa →
        </p>
        <NavLink to={"/blog"}>
          <p className=" cursor-pointer" onClick={() => navigate("/blog")}>
            Blog →
          </p>
        </NavLink>

        <NavLink to={"/iphone"}>
          <p className=" cursor-pointer" onClick={() => navigate("/haptic")}>
            IPhone 13 ekran o'lchamlari
          </p>
        </NavLink>
      </div>
      <div className="mx-[100px]  my-5">
        <img
          width={"1000px"}
          height={"1000px"}
          className=""
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
            IPhone 13 ekran o'lchamlari
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
          <div className="w-[800px] my-14">
            <p className=" mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              iusto ullam qui earum eligendi eveniet. Voluptatem laudantium
              repellendus obcaecati at quidem sed doloribus maxime impedit magni
              molestiae, facilis exercitationem. Saepe.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, recusandae eos ipsum suscipit minus pariatur aut,
              odit quis sunt totam iste dolorem perferendis porro modi
              distinctio obcaecati quidem. Eius eveniet obcaecati quos quidem
              maiores velit enim blanditiis, ipsa corrupti, est, illum sunt
              fugit excepturi nisi! Eum praesentium in quia vitae, cum iusto
              harum. Nulla distinctio cum velit quam repudiandae perferendis
              ullam, saepe odio numquam laudantium tenetur est consectetur
              ducimus voluptas quia ea omnis repellat, voluptatibus minima ipsa.
              Placeat reiciendis provident ex alias iusto, velit rerum, mollitia
              doloremque natus totam voluptas nemo molestiae earum impedit quod
              consequatur est tempora ab vel hic dolorum voluptate quisquam a
              cumque. Ipsam illo neque dicta esse vel, cupiditate nisi officiis
              alias, labore enim nostrum recusandae.
            </p>
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

export default IPhone;
