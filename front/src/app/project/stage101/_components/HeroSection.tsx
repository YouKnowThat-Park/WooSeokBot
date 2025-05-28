import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex gap-4 mt-5">
        <div className="flex flex-col">
          <Image
            src="/stage101.png"
            alt="스테이지101 이미지"
            width={450}
            height={100}
            className="border-2 border-black"
          />
          <p className="text-sm ml-[120px] border-b border-gray-500 w-fit">
            클릭 시 해당 서비스로 이동합니다.
          </p>
        </div>
        <div className="bg-white w-[450px] h-[255px] border">
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
            <p>
              Github:
              <a
                href="https://github.com/YouKnowThat-Park/STAGE_101"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1  border-b-2 border-black"
              >
                github.com/STAGE_101
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
