import { BookOpen, Gift, HelpCircle, Trophy } from "lucide-react";

import React from "react";
import coinImg from "../assets/img/coin.png";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-purple-500 text-white justify-between items-center px-6 py-3 shadow-md z-50">
        <div className="flex gap-6">
          <NavItem icon={<BookOpen />} text="Меню" />
          <NavItem icon={<Trophy />} text="Ачивки" />
          <NavItem icon={<Gift />} text="Магазин" />
          <NavItem icon={<HelpCircle />} text="Словарик" />
        </div>
        <div className="flex items-center gap-2 bg-blue-500 px-3 py-1 rounded-full">
          <img src={coinImg} alt="coin" className="w-6 h-6" />
          <span className="font-bold text-white">1000</span>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-purple-500 text-white flex justify-around items-center py-3 shadow-md z-50">
        <NavItem icon={<BookOpen />} text="Меню" mobile />
        <NavItem icon={<Trophy />} text="Ачивки" mobile />

        <div className="absolute top-[-24px] inset-x-0 flex justify-center z-10 pointer-events-none">
          <img src={coinImg} alt="coin" className="w-12 h-12 drop-shadow-lg" />
        </div>

        <NavItem icon={<Gift />} text="Магазин" mobile />
        <NavItem icon={<HelpCircle />} text="Словарик" mobile />
      </nav>
    </>
  );
};

const NavItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  mobile?: boolean;
}> = ({ icon, text, mobile = false }) => (
  <div
    className={`flex items-center gap-2 cursor-pointer hover:opacity-80 ${
      mobile ? "flex-col text-center" : "flex-row"
    }`}
  >
    {icon}
    <span className="text-sm">{text}</span>
  </div>
);

export default Navbar;
