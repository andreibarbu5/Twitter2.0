import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed flex items-center justify-between w-[calc(100vw-6rem)] md:w-[40rem]  max-w-[40rem] p-4 bg-white/[0.93] h-14 border-r border-l ">
      <p className="font-bold text-[20px] opacity-100">Home</p>
      <div className="opacity-100">
        <AiOutlineStar className="w-6 h-6 " />
      </div>
    </div>
  );
};

export default Navbar;
