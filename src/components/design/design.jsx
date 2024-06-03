import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { NavLink, useNavigate } from "react-router-dom";
import { datas } from "../blog/blog";
//images
import bigdesign from "../../assets//images/designimg.webp";
function Design() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-[20px]">
      <div className="bg-bg">
        <Header />
      </div>
      <div className="px-[100px] flex justify-between w-[740px] mt-5 opacity-40">
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

        <NavLink to={"/dizayn"}>
          <p className=" cursor-pointer" onClick={() => navigate("/haptic")}>
            Dizayn naqshlari. Mukammal akkordeon yaratish
          </p>
        </NavLink>
      </div>
      <div className="mx-[100px]  my-5">
        <img className="" src={bigdesign} alt="img" />
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
            Dizayn naqshlari. Mukammal akkordeon yaratish
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
          <div className="my-[20px] w-[800px]">
            <p className="mb-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              impedit aut ipsum quod vero facere magni id possimus. Ea iste sed,
              accusantium molestiae nihil rerum dicta eius nulla enim id ab
              quisquam? Incidunt iure error deserunt ut ducimus mollitia,
              voluptatibus facilis labore. Blanditiis earum, excepturi,
              voluptatibus repudiandae voluptatum repellat officia itaque
              voluptas dignissimos, ad autem aut ea laborum quo explicabo. Sequi
              voluptatem officia possimus a perferendis explicabo nostrum
              pariatur neque suscipit odio ullam sed in omnis voluptate amet
              fugit quidem aut aspernatur quas, distinctio asperiores modi
              veritatis eum? Neque quod repudiandae corporis, at ipsum pariatur
              fuga magni in magnam. Explicabo?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              voluptatibus ab numquam at alias ex a tempora incidunt! Voluptates
              repellat, quo at minima id eaque autem sed voluptas rem
              architecto?
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

export default Design;
