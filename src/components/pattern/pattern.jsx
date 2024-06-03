import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { datas } from "../blog/blog";
import { NavLink, useNavigate } from "react-router-dom";

//images
import screen from "../../assets/images/naqsh1.webp";
function Pattern() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-[20px]">
      <div className="bg-bg">
        <Header />
      </div>
      <div className="px-[100px] flex justify-between w-[760px] mt-5 opacity-40">
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

        <NavLink to={"/naqsh"}>
          <p className=" cursor-pointer" onClick={() => navigate("/haptic")}>
            Bu 5 ta ilova sizni yanada samarali dizayner qiladi
          </p>
        </NavLink>
      </div>
      <div className="mx-[100px]  my-5">
        <img
          width={"1050px"}
          //   height={"100px"}
          className="w-[900xp]"
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
            Bu 5 ta ilova sizni yanada samarali dizayner qiladi
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
          <div className="my-10 w-[800px]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              similique. Quos aliquid facere ducimus sapiente consectetur cumque
              excepturi a rerum vero consequatur quo fugit culpa repellat
              voluptate neque quod pariatur obcaecati mollitia nesciunt eaque
              illo, vitae et commodi? Accusantium, enim.
            </p>
            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              voluptate ea eveniet id consectetur tempore facere, animi iure eos
              minima sit ad cumque perspiciatis at maiores aut quo recusandae
              reiciendis magni accusamus veniam, voluptatibus qui dolore.
              Nesciunt veritatis corrupti laborum, numquam, fugit quidem animi
              rerum, asperiores assumenda deleniti facilis voluptatem aliquid
              vero? Libero iusto adipisci ad voluptates vero explicabo natus
              laborum, voluptatum possimus repellendus sed. Et beatae
              consectetur laudantium saepe nisi veniam quidem corporis?
              Provident, ut voluptas. Alias debitis error autem eius, unde modi!
              Quisquam tenetur cupiditate laborum qui magnam?
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

export default Pattern;
