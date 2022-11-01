import React from "react";
import Input from "./Input";
import Navbar from "./Navbar";
import Post from "./Post";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className=" w-screen  mb-12 max-w-[40rem]  border-r ml-20 md:ml-32 lg:ml-[24rem] overflow-hidden  ">
      {/* Navbar */}
      <Navbar />

      {/* Input  */}
      <div className="mt-14 ">
        <Input />
      </div>

      {/* Post */}
      <Post />
      <Post />
      <Post />
      {/* <Posts /> */}
    </div>
  );
};

export default Feed;
