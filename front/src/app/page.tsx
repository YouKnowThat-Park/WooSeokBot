import React from "react";
import Home from "./home/Home";
import NoticeModal from "./_components/NoticeModal";

const page = () => {
  return (
    <div className="mx-[500px]">
      <Home />
      <NoticeModal />
    </div>
  );
};

export default page;
