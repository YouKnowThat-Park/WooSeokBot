"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Stage101 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const top =
        containerRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - 150,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[970px] h-[3000px] mt-[100px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border"
    >
      <div className="flex gap-4 mt-5">
        <Image
          src="/stage101.png"
          alt="스테이지101 이미지"
          width={450}
          height={100}
          className="border-2 border-black"
        />
        <div className="bg-white w-full h-[255px] border" />
      </div>
    </div>
  );
};

export default Stage101;
