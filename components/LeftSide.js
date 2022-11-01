import Image from "next/image";
import React from "react";
import Twitter from "../assets/twitter.png";
import { RiHome7Fill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiBookmark } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegCommentDots } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import tweet from "../assets/tweet.png";
import profile from "../assets/musk.jpg";

const LeftSide = () => {
  return (
    <div>
      <div className="fixed flex flex-col justify-between w-20 pt-4  h-screen md:w-32 md:items-end md:pr-4 lg:w-80 lg:pl-12 lg:ml-16">
        <div className="">
          <ul className="w-full space-y-6    flex flex-col  items-center justify-center lg:items-start   lg:justify-start">
            <li>
              <div className="h-9 w-9">
                <Image src={Twitter} />
              </div>
            </li>
            <li>
              <div className="flex">
                <div>
                  <RiHome7Fill className="h-7 w-7 " />
                </div>
                <div className="hidden lg:flex">
                  <p className=" pl-2 text-[20px]">Home</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div>
                  <BsSearch className="h-7 w-7 " />
                </div>
                <div className="hidden lg:flex">
                  <p className=" pl-2 text-[20px]">Explore</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div>
                  <FaBell className="h-7 w-7 " />
                </div>
                <div className="hidden lg:flex">
                  <p className=" pl-2 text-[20px]">Notifications</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div>
                  <HiOutlineMail className="h-7 w-7 " />
                </div>
                <div className="hidden lg:flex">
                  <p className=" pl-2 text-[20px]">Messages</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div>
                  <BiBookmark className="h-7 w-7 " />
                </div>
                <div className="hidden lg:flex">
                  <p className=" pl-2 text-[20px]">Bookmarks</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div>
                  <RiFileList2Line className="h-7 w-7 " />
                </div>
                <div className="hidden lg:flex">
                  <p className=" pl-2 text-[20px]">Lists</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div>
                  <HiOutlineUser className="h-7 w-7 " />
                </div>
                <div className="hidden lg:flex">
                  <p className=" pl-2 text-[20px]">Profile</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div>
                  <FaRegCommentDots className="h-7 w-7 " />
                </div>
                <div className="hidden lg:flex">
                  <p className=" pl-2 text-[20px]">More</p>
                </div>
              </div>
            </li>
            <li>
              <div className="lg:hidden w-12 h-12 bg-blue-400 p-3 rounded-full">
                <Image src={tweet} className="" />
              </div>
              <div className="hidden lg:flex   w-60 h-14   items-center justify-center  ">
                <p className="  text-white bg-blue-400 p-2 rounded-full text-center w-full h-full flex items-center justify-center text-[19px] font-bold">
                  Tweet
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center   h-14 mb-8 lg:justify-start md:justify-end w-full lg:pl-4">
          <div className="rounded-full flex  justify-center  lg:justify-start shrink-0">
            <Image
              src={profile}
              className="  rounded-full object-cover w-14 h-14  "
            />
          </div>
          <div className="hidden lg:flex   h-full  items-center justify-center pl-4 lg:justify-between w-full">
            <div className="flex flex-col">
              <p className="text-[16px] font-bold">Elon Musk</p>
              <p className="text-[16px] ">@elonmusk</p>
            </div>
            <div className="pr-6">
              <BsThreeDots className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
