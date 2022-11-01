import Image from "next/image";
import React from "react";
import profile from "../assets/musk.jpg";

import { BsImage } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaPoll } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";

const Input = () => {
  return (
    <div className=" border-l">
      <div className="flex items-center p-4 pt-4  ">
        <div className="w-12 h-12 flex">
          <Image src={profile} className="object-cover rounded-full" />
        </div>
        <div className="pl-4">
          <input
            type="text"
            placeholder="What's happening?"
            className="outline-0 text-[20px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-between border-b  pl-20 pr-4 pb-4">
        <ul className="flex space-x-5">
          <li>
            <BsImage className="text-blue-400 w-5 h-5" />
          </li>
          <li>
            <AiOutlineFileGif className="text-blue-400 w-5 h-5" />
          </li>
          <li className="hidden md:block">
            <FaPoll className=" text-blue-400 w-5 h-5" />
          </li>
          <li>
            <BsEmojiSmile className="text-blue-400 w-5 h-5" />
          </li>
          <li className="hidden md:block">
            <TbCalendarTime className="text-blue-400 w-5 h-5" />
          </li>
          <li>
            <IoLocationSharp className="text-blue-400 w-5 h-5" />
          </li>
        </ul>
        <div className="">
          <button className="bg-blue-300 text-white py-2 px-5 rounded-full font-bold">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
