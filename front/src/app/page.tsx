import React from "react";
import Home from "./home/Home";
import NoticeModal from "./_components/NoticeModal";

const page = () => {
  return (
    <div className="flex justify-end items-end mr-[450px]">
      <NoticeModal />
      <Home />
    </div>
  );
};

export default page;
