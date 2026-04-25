import React from "react";
import Home from "./home/Home";

const page = () => {
  return (
    <div className="flex justify-end items-end mr-[450px] max-[1279px]:justify-center max-[1279px]:mr-0 max-[1279px]:px-4 sm:max-[1279px]:px-6 lg:max-[1279px]:px-8">
      <Home />
    </div>
  );
};

export default page;
