import React, { useState } from "react";

import backgroundImg from "../assets/img/background-main.png";
import dialog1 from "../assets/img/dialog-1.png";
import dialog2 from "../assets/img/dialog-2.png";
import dialog3 from "../assets/img/dialog-3.png";
import guyImg from "../assets/img/guy-main.png";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showFirstDialog, setShowFirstDialog] = useState(true);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <img
        src={guyImg}
        alt="character"
        className="absolute bottom-0 w-[25%] min-w-[240px] lg:w-auto"
      />

      {/* Desktop Version */}
      <div className="hidden lg:block">
        {showFirstDialog ? (
          <div className="w-[450px] relative p-4 border-2 border-black rounded-lg shadow-lg top-[-50px] right-[-320px]">
            <div className="relative">
              <img src={dialog2} alt="" className="w-full" />
              <p className="absolute top-12 left-12 text-black font-semibold leading-tight w-[80%]">
                Сейчас мы узнаем, как защитить свои данные на платформе
                объявлений. Это <strong>важно знать</strong>, чтобы никто не
                смог обмануть или украсть твои данные или деньги. Я буду рядом,
                чтобы помочь. <br />
                <strong>Готов(-а)?</strong>
              </p>
            </div>
            <button
              className="absolute bottom-12 left-12 bg-purple-600 text-white px-6 py-2 rounded-full cursor-pointer shadow-md hover:bg-purple-700 transition text-lg font-bold"
              onClick={() => setShowFirstDialog(false)}
            >
              Далее
            </button>
          </div>
        ) : (
          <div className="relative w-[350px] p-4 border-2 border-black rounded-lg shadow-lg top-[-30px] right-[-320px]">
            <div className="relative">
              <img src={dialog1} alt="" className="w-full" />
              <p className="absolute top-12 left-12 text-black font-semibold leading-tight w-[80%]">
                Давай для начала <strong>поможем создать профиль</strong> на
                платформе.
              </p>
            </div>
            <button
              className="absolute bottom-2 left-16 bg-purple-600 text-white px-6 py-2 rounded-full cursor-pointer shadow-md hover:bg-purple-700 transition text-lg font-bold"
              onClick={() => navigate("/generator")}
            >
              Начать
            </button>
          </div>
        )}
      </div>

      {/* Mobile Version */}
      <div className="absolute top-[120px] -translate-x-1/2 w-[90%] max-w-[400px] lg:hidden">
        {showFirstDialog ? (
          <div className="relative flex flex-col items-center">
            <img src={dialog3} alt="" className="w-full" />
            <p className="absolute top-12 -translate-x-1/2 w-[65%]">
              Сейчас мы узнаем, как защитить свои данные на платформе
              объявлений. Это <strong>важно знать</strong>, чтобы никто не смог
              обмануть или украсть твои данные или деньги. Я буду рядом, чтобы
              помочь. <br />
              <strong>Готов(-а)?</strong>
            </p>
            <button
              className="relative bottom-12 left-30 -translate-x-1/2 bg-purple-600 text-white px-6 py-2 rounded-full cursor-pointer shadow-md hover:bg-purple-700 transition text-lg font-bold transition font-bold"
              onClick={() => setShowFirstDialog(false)}
            >
              Далее
            </button>
          </div>
        ) : (
          <div className="relative flex flex-col items-center">
            <img src={dialog3} alt="" className="w-full" />
            <p className="absolute top-12 -translate-x-1/2 text-2xl w-[65%]">
              Давай для начала <strong>поможем создать профиль</strong> на
              платформе.
            </p>
            <button
              className="relative bottom-24 left-30 bg-purple-600 text-white px-6 py-2 rounded-full cursor-pointer shadow-md hover:bg-purple-700 transition text-lg font-bold"
              onClick={() => navigate("/generator")}
            >
              Начать
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
