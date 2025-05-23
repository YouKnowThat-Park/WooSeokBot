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
      className="w-[970px] h-[3000px] mt-[100px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#3a3a3a]"
    >
      <div className="flex gap-4 mt-5">
        <Image
          src="/stage101.png"
          alt="스테이지101 이미지"
          width={450}
          height={100}
          className="border-2 border-black"
        />
        <div className="bg-white w-full h-[255px] border">
          <div className="flex flex-col gap-2 mt-2 ml-3">
            <h2 className="text-2xl font-black">STAGE_101</h2>
            <p className="font-bold">
              Service Page :
              <a
                href="https://stage-101.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1  border-b-2 border-black"
              >
                stage-101.vercel.app
              </a>
            </p>
            <p>Dev Environment : Next.js, TypeScript, Vercel</p>
            <p>Project Introduction: 소극장 예약 페이지</p>
            <p>Project Type: 개인 프로젝트</p>
            <p>Github: </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] mt-10  border bg-[#3A3A3A]">
        <h2 className="flex justify-center items-center w-auto mt-4 text-[25px] font-semibold text-white  ">
          "One space. One moment. Infinite possibilities."
        </h2>
        프로젝트 개요 , 프로젝트 소개, 프로젝트 목표, 유저플로우, 기술 스택 선택
        이유
      </div>
      <div className="w-full h-[500px] mt-10 bg-white border">
        성능 개선 및 트레이드오프
      </div>
      <div className="w-full h-[500px] mt-10 bg-white border">
        프로젝트 내용
      </div>
      <div className="w-full h-[500px] mt-10 bg-white border">회고</div>
      <div className="w-full h-[500px] mt-10 bg-white border">
        다른 프로젝트
      </div>
    </div>
  );
};

export default Stage101;
