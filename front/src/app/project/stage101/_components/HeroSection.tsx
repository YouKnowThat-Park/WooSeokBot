import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex gap-4 mt-5 ">
        <div className="flex flex-col">
          <a
            href="https://stage-101.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/stage101.png"
              alt="스테이지101 이미지"
              width={450}
              height={100}
              className="border-2 rounded-tl-[45px] cursor-pointer"
            />
          </a>
          <p className="text-sm ml-[120px] border-b text-gray-300 border-gray-300 w-fit">
            클릭 시 해당 서비스로 이동합니다.
          </p>
        </div>
        <div className="w-[450px] h-[255px] border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#2e2e2e] text-[#111] dark:text-[#fbfbfb] rounded-lg shadow-sm">
          <div className="flex flex-col gap-2 mt-3 ml-4 pr-4">
            <h2 className="text-2xl font-black">STAGE_101</h2>

            <p className="font-semibold">
              Service Page :
              <a
                href="https://stage-101.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 border-b-2 border-black dark:border-[#fbfbfb] hover:text-[#0070f3]"
              >
                stage-101.vercel.app
              </a>
            </p>

            <p className="text-sm">
              Dev Environment : Next.js, TypeScript, Vercel
            </p>
            <p className="text-sm">Project Introduction: 소극장 예약 페이지</p>
            <p className="text-sm">Project Type: 개인 프로젝트</p>

            <p className="text-sm">
              Github:
              <a
                href="https://github.com/YouKnowThat-Park/STAGE_101"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 border-b-2 border-black dark:border-[#fbfbfb] hover:text-[#0070f3]"
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
