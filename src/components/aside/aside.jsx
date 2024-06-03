import React, { useState } from "react";
//iamges
import jasur from "../../assets//images/jasur.png";
import nozima from "../../assets/images/nozima.png";
function Aside() {
  const [state, setState] = useState(false);
  const [more, setMore] = useState(false);
  return (
    <div className="mx-[100px]">
      <ul className="mt-10 flex justify-between">
        <li className="rounded text-white bg-gradient-to-bl from-yellow-500 to-blue-500 w-[570px] p-5 h-[472px]">
          {state ? (
            <>
              <span>
                <button
                  onClick={() => setState((prev) => !prev)}
                  className="text-[24px] hover:text-[red]"
                >
                  ←
                </button>
              </span>
              <br />
              <span className="font-[500]"> Grafik dizayn</span>
              <h2 className="font-bold text-[32px] my-5">Jasur Rashidov</h2>
              <p className="w-[440px] mb-3">
                Yaqinda men Najot ta’limda grafik dizayner sifatida o'qishni
                boshladim.
              </p>
              <p className="w-[440px] my-3">
                Men darhol ustozlarning yaxshi ishini qayd etishim mumkin. Ular
                barcha boshlanuvchilarga kurs uchun pul to'lashda, hujjatlar
                bilan yordam berishadi, har qanday masala bo'yicha 24/7 maslahat
                berishadi, to'satdan paydo bo'ladigan muammolarni hal qilishda
                yordam berishadi!
              </p>
              <p className="w-[440px] my-3">
                Men uzoq vaqt o'qimaganman, lekin yangi ma'lumotlar ko'p bo'lsa
                -da, menga hamma narsa kutilganidek yoqdi. Kursni tugatganimda,
                men ikkinchi sharh yozaman yoki iloji bo'lsa, uni qo'shib
                qo'yaman.
              </p>
            </>
          ) : (
            <>
              <img
                className="mx-auto rounded-full shadow-3xl text- relative left-[60px] "
                src={jasur}
                alt="img"
              />
              <span> Grafik dizayn</span>
              <h2 className="font-bold text-[32px] my-5">Jasur Rashidov</h2>
              <p className="w-[440px]">
                Yaqinda men Najot ta’limda grafik dizayner sifatida o'qishni
                boshladim. Men darhol ustozlarning yaxshi ishini qayd etishim
                mumkin. Ular barcha boshlanuvchilarga kurs uchun pul to'lashda,
                hujjatlar bilan...
              </p>
              <button
                onClick={() => setState((prev) => !prev)}
                className="underline mt-5"
              >
                Batafsil
              </button>
            </>
          )}
        </li>
        <li className="rounded text-white bg-gradient-to-bl from-purple-500 to-orange-500 to-blue-110 w-[570px] p-5 h-[472px]">
          {more ? (
            <>
              <span>
                <button
                  onClick={() => setMore((prev) => !prev)}
                  className="text-[26px] hover:text-[red]"
                >
                  ←
                </button>
              </span>
              <br />
              <span className="font-[500]"> Marketalog</span>
              <h2 className="font-bold text-[34px] my-5">Nozima Murodova</h2>
              <p className="w-[500px] text-[17px] mb-2">
                Yaqinda men Najot ta'limda marketolog sifatida o'qishni
                boshladim.
              </p>
              <p className="w-[500px] text-[17px] my-2">
                Men darhol ustozlarning yaxshi ishini qayd etishim mumkin. Ular
                barcha boshlanuvchilarga kurs uchun pul to'lashda, hujjatlar
                bilan yordam berishadi, har qanday masala bo'yicha 24/7 maslahat
                berishadi, to'satdan paydo bo'ladigan muammolarni hal qilishda
                yordam berishadi!
              </p>
              <p className="w-[500px] text-[17px] my-2">
                Men uzoq vaqt o'qimaganman, lekin yangi ma'lumotlar ko'p bo'lsa
                -da, menga hamma narsa kutilganidek yoqdi. Kursni tugatganimda,
                men ikkinchi sharh yozaman yoki iloji bo'lsa, uni qo'shib
                qo'yaman.
              </p>
            </>
          ) : (
            <>
              <img
                className="mx-auto rounded-full shadow-3xl text-relative left-[60px] "
                src={nozima}
                alt="img"
              />
              <span> Marketing </span>
              <h2 className="font-bold text-[32px] my-5">Nozima Murodova</h2>
              <p className="w-[440px]">
                Men barcha o’quv markazlar orasida Najot Ta’limni tanlaganimdan
                chin dildan xursandman. Uzoq vaqt qidirdim va o’ylimanki eng
                yaxshi jamoani topib bilim oldim. Barchaga tavsiya qilaman!
              </p>
              <button
                onClick={() => setMore((prev) => !prev)}
                className="underline mt-5"
              >
                Batafsil
              </button>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Aside;
