import React from "react";

//images
import click from "../../assets/images/click.png";
import pay from "../../assets/images/payme.png";
function BuyModal({ openModal, closeModal }) {
  const ref = React.useRef();

  React.useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);
  return (
    <dialog ref={ref} onCancel={closeModal}>
      <div className="h-[611px] w-[581px]  flex justify-between">
        <div className="pt-10">
          <div className="flex w-[420px] justify-between py-5 pl-5">
            <div className="w-[320px] flex justify-between">
              <div className="flex  justify-between w-[150px]">
                {" "}
                <span className="w-[24px] h-[24px] text-center rounded-full bg-[#FF9900] text-[white]">
                  1
                </span>
                <p className="text-[13px] font-[500]">Kursni sotib olish →</p>
              </div>
              <div className="flex justify-between w-[150px]">
                {" "}
                <span className="w-[24px] h-[24px] text-center rounded-full bg-[#DADADA] text-[white]">
                  2
                </span>
                <p className="text-[13px] font-[500]">To'lovni tasdiqlash</p>
              </div>
            </div>
            <i onClick={closeModal} className="fas fa-x"></i>
          </div>
          <div className="px-5 ">
            <span className="text-[#81755C] text-[12px]">Kurs nomi</span>
            <div className="flex justify-between w-[400px] border-b-2 text-[15px] font-[600] border-gray-400 pb-5 mt-3">
              <p>Foundation (Husan Musayev):</p>
              <p>10000000 UZS</p>
            </div>
            <div className="flex justify-between w-[400px] border-b-2 text-[15px] font-[600] border-gray-400 pb-5 mt-3">
              <p>To'lov usuli:</p>
              <p>click </p>
            </div>
            <div className="flex justify-between w-[400px] border-b-2 text-[15px] font-[600] border-gray-400 pb-5 mt-3">
              <p>Promocode bo'yicha chegirma:</p>
              <p>- </p>
            </div>
            <div className="flex justify-between w-[400px] text-[15px] font-[600] pb-5 mt-5">
              <p> Umumiy narx</p>
              <p>10 000 000 UZS </p>
            </div>
            <p className="opacity-[0.5] text-[15px] font-[500]">
              Bizni kursimizga chegirma olish uchun, promocode kiriting
            </p>
            <div className="mt-2 flex">
              <input
                className="w-[244px] rounded-3xl px-2 border-[3px] focus:outline-none h-[44px] border-gray-300 border"
                placeholder="Promocode kiriting"
                type="password"
              />
              <button className="ml-3 w-[44px] focus:outline-none hover:bg-green-300 tetx-[20px] hover:text-white bg-[#C3E0A0] rounded-full font-bold    h-[44px]">
                →
              </button>
            </div>
            <div className="flex mt-3 justify-between pb-5 border-b-[2px] border-gray-300">
              <span className="text-[17px] mt-3 font-[600]">To'lov turi:</span>
              <div>
                <button className="w-[100px] h-[44px] border-gray-400 border-2 text-center rounded-3xl">
                  <img className="ml-2" src={pay} alt="img" />
                </button>
                <button className="w-[100px] ml-4 translate-y-1 h-[44px] border-gray-400 border-2 text-center rounded-3xl">
                  {" "}
                  <img className="ml-2" src={click} alt="img" />
                </button>
              </div>
            </div>
            <div className="flex mt-3">
              <p className="w-[250px] text-[11px]">
                Tugmani bosish orqali men{" "}
                <span className="text-[#2697ff] underline  ">
                  shaxsiy ma'lumotlarni{" "}
                </span>
                qayta ishlashga va{" "}
                <span className="text-[#2697ff] underline  ">
                  Platformadan foydalanish shartlariga
                </span>{" "}
                roziman
              </p>
              <button className="w-[165px] h-[44px] bg-[#BA8D5B] text-[white] text-[17px] rounded-3xl ">
                Davom etish →
              </button>
            </div>
          </div>
        </div>
        <div className="w-[105px] h-[] bg-gradient-to-bl     to-[#7000FF] from-[#FFC700]">
          {""}
        </div>
      </div>
    </dialog>
  );
}

export default BuyModal;
