import React, { useEffect, useState } from "react";

import { ArrowLeft } from "lucide-react";
import { RefreshCw } from "lucide-react";
import backgroundImg from "../assets/img/background-secondary.png";
import houseImg from "../assets/img/house.png";
import landImg from "../assets/img/land.png";
import { useNavigate } from "react-router-dom";

const generatePassword = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  return Array.from(
    { length: 10 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

const Generator: React.FC = () => {
  const navigate = useNavigate();

  const [passwords, setPasswords] = useState<string[]>([]);

  useEffect(() => {
    regeneratePasswords();
  }, []);

  const regeneratePasswords = () => {
    setPasswords([generatePassword(), generatePassword(), generatePassword()]);
  };

  const copyToClipboard = (password: string) => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied successfully!");
    });
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <button
        className="absolute top-18 left-6 p-3 bg-purple-600 cursor-pointer text-white rounded-full shadow-lg hover:bg-gray-700 transition"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={24} />
      </button>

      <button
        className="absolute top-18 right-6 p-3 bg-purple-600 cursor-pointer text-white rounded-full shadow-lg hover:bg-gray-700 transition"
        onClick={regeneratePasswords}
      >
        <RefreshCw size={24} />
      </button>
      <div className="hidden lg:flex flex-row items-center justify-center gap-12">
        {passwords.map((password, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <img src={landImg} alt="land" className="w-[320px] h-[320px]" />
            <img
              src={houseImg}
              alt="House"
              className="absolute top-[-60px] w-[200px] h-[200px] opacity-80"
            />
            <button
              className="mt-4 px-6 py-3 bg-purple-600 cursor-pointer text-white rounded-full shadow-lg text-lg"
              onClick={() => copyToClipboard(password)}
            >
              {password}
            </button>
          </div>
        ))}
      </div>
      <div className="relative flex flex-col items-center lg:hidden">
        <img src={landImg} alt="land" className="w-[320px] h-[320px]" />
        <img
          src={houseImg}
          alt="House"
          className="absolute top-[-60px] w-[200px] h-[200px] opacity-80"
        />
      </div>
      <div className="lg:hidden flex flex-col gap-4 mt-4 w-full max-w-[280px]">
        {passwords.map((password, index) => (
          <button
            key={index}
            className="w-full px-6 py-3 bg-purple-600 cursor-pointer text-white rounded-full shadow-lg text-lg"
            onClick={() => copyToClipboard(password)}
          >
            {password}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Generator;
