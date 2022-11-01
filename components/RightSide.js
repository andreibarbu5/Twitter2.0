import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

import dogecoin from "../assets/dogecoin.png";
import ethereum from "../assets/ethereum.jpg";

const RightSide = () => {
  return (
    <div className="  hidden xl:block  w-[20rem]   pt-4 ml-8  mr-8     ">
      {/* Search */}
      <div className="relative flex items-center w-full">
        <div className="w-full  ">
          <input
            className="w-full h-12  rounded-full pl-[3rem] relative bg-gray-100 outline-blue-500  "
            placeholder="Search Twitter"
          />
        </div>
        <div className="absolute pl-5 ">
          <BsSearch />
        </div>
      </div>

      {/* Trends */}
      <div className="h-[22rem] bg-gray-100 rounded-[1rem]">
        <div className="mt-6  ">
          <p className="text-[20px] font-bold p-4 pb-2">Trends for you</p>
        </div>
        {/*Tags */}
        <div className="">
          <div className="h-16  px-4 flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <p className="text-xs">Trending in USA</p>
              <BsThreeDots />
            </div>

            <div className="">
              <p className="font-bold">TikTok</p>
            </div>
            <div className="">
              <p className="text-xs">605k Tweets</p>
            </div>
          </div>
          <div className="h-16  px-4 flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <p className="text-xs">Trending in USA</p>
              <BsThreeDots />
            </div>

            <div className="">
              <p className="font-bold">ElonMusk</p>
            </div>
            <div className="">
              <p className="text-xs">605k Tweets</p>
            </div>
          </div>
          <div className="h-16  px-4 flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <p className="text-xs">Trending in USA</p>
              <BsThreeDots />
            </div>

            <div className="">
              <p className="font-bold">DogeCoin</p>
            </div>
            <div className="">
              <p className="text-xs">605k Tweets</p>
            </div>
          </div>
          <div className="h-16  px-4 flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <p className="text-xs">Trending in USA</p>
              <BsThreeDots />
            </div>

            <div className="">
              <p className="font-bold">New York</p>
            </div>
            <div className="">
              <p className="text-xs">605k Tweets</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-semibold text-sm text-blue-500 pl-4 my-2">
            Show more
          </p>
        </div>
      </div>

      {/* Who to follow */}
      <div className=" h-[13.4rem] bg-gray-100 rounded-[1rem]  mt-6 px-4 pt-2">
        <div className="">
          <p className="text-[20px] font-bold">Who to follow</p>
        </div>

        <div className="">
          <div className="flex justify-between items-center">
            {/* First Profile */}
            <div className="flex  w-full pt-4">
              <div className="w-12 h-12">
                <Image src={dogecoin} />
              </div>

              <div className="pl-2.5">
                <p className="font-bold">Dogecoin</p>
                <p>@dogecoin</p>
              </div>
            </div>

            <button className="bg-black  text-white px-4 py-0 rounded-full h-10">
              Follow
            </button>
          </div>
          {/* Second Profile */}
          <div className="flex justify-between items-center pt-4">
            <div className="flex  w-full">
              <div className="w-12 h-12 flex">
                <Image src={ethereum} className="object-cover rounded-full" />
              </div>

              <div className="pl-2.5">
                <p className="font-bold">Ethereum</p>
                <p>@ethereum</p>
              </div>
            </div>

            <button className="bg-black  text-white px-4 py-0 rounded-full h-10">
              Follow
            </button>
          </div>{" "}
          <div className="">
            <p className="font-semibold text-sm text-blue-500 pl-1 mt-3 ">
              Show more
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <ul className="flex flex-wrap space-x-4 pt-4">
          <li>
            <p className=" text-[12px] text-gray-400">Terms of Service</p>
          </li>
          <li>
            <p className=" text-[12px] text-gray-400">Privacy Policy</p>
          </li>
          <li>
            <p className=" text-[12px] text-gray-400">Cookie Policy</p>
          </li>
          <li>
            <p className=" text-[12px] text-gray-400">Accessibility</p>
          </li>
          <li>
            <p className=" text-[12px] text-gray-400">Ads info</p>
          </li>
          <li>
            <p className=" text-[12px] text-gray-400">More</p>
          </li>
        </ul>
        <div className="">
          <p className=" text-[12px] text-gray-400 pt-2">@2022 Twitter, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
