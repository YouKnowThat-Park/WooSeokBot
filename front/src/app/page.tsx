import React from "react";
import Home from "./home/Home";
import NoticeModal from "./_components/NoticeModal";

const page = () => {
  return (
    <div>
      <NoticeModal />
      <Home />
    </div>
  );
};

export default page;
