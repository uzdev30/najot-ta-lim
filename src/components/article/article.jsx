import React from "react";
// logos
import yosh from "../../assets/images/yosh.svg";
import a from "../../assets/images/a.svg";
import tech from "../../assets/images/tech.svg";
import kun from "../../assets/images/kun.svg";
import edu from "../../assets/images/Eduaction.svg";
import bola from "../../assets/images/osmon.svg";
import fak from "../../assets/images/fak.svg";
import millat from "../../assets/images/millat.svg";
import cam from "../../assets/images/cam.svg";
import per from "../../assets/images/per.svg";
import dinay from "../../assets/images/dinay.svg";
import collage from "../../assets/images/collage.svg";
import univer from "../../assets/images/univer.svg";
import fido from "../../assets/images/Fido.svg";

function Article() {
  return (
    <div className="bg-bg px-10  pt-[50px] mx-[100px] mt-10">
      <ul className="flex justify-between">
        <li className="pt-0">
          <span className="text-[#FF7A00]">Yolg'iz emasmiz</span>
          <h5 className="mt-3 text-[34px] font-[500]">Bizning hamkorlar</h5>
          <p className="w-[330px]">
            Yodingizda tuting, biz siz bilan hamkorlik qilishdan doimo
            xursandmiz va sizga o‘z minnatdorchiligimizni bildiramiz!
          </p>
        </li>
        <li className="flex justify-between flex-wrap w-[800px]">
          <img src={yosh} className="mx-8 my-4" alt="img" />
          <img src={a} className="mx-8 my-4" alt="img" />
          <img src={tech} className="mx-8 my-4" alt="img" />
          <img src={kun} className="mx-8 my-4" alt="img" />
          <img src={edu} className="mx-8 my-4" alt="img" />
          <img src={bola} className="mx-8 my-4" alt="img" />
          <img src={fak} className="mx-8 my-4" alt="img" />
          <img src={millat} className="mx-8 my-4" alt="img" />
          <img src={cam} className="mx-8 my-4" alt="img" />
          <img src={per} className="mx-8 my-4" alt="img" />
          <img src={dinay} className="mx-8 my-4" alt="img" />
          <img src={collage} className="mx-8 my-4" alt="img" />
          <img src={univer} className="mx-8 my-4" alt="img" />
          <img src={fido} className="mx-8 my-4" alt="img" />
        </li>
      </ul>
    </div>
  );
}

export default Article;
