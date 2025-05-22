"use client";
import React from "react";

const ChatSearchInput = () => {
  return (
    <div className="">
      <div className=" border-b border-gray-400 flex items-center gap-4 pb-2 z-30">
        <input
          type="text"
          placeholder="우석이에게 궁금한 것을 물어봐주세요."
          className="flex-grow text-center w-[700px] outline-none text-lg bg-transparent placeholder-gray-500"
        />
        <button className=" text-sm  text-black underline hover:opacity-70 whitespace-nowrap">
          검색
        </button>
      </div>
    </div>
  );
};

export default ChatSearchInput;
