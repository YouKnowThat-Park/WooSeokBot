import Image from "next/image";
import React from "react";
import InfiniteTechSlider from "./_components/InfinteTechSlider";
import AboutMe from "./_components/AboutMe";
import LearningStackSection from "./_components/LearningStackSection";
import WorkStyleSection from "./_components/WorkStyleSection";
import ResumeSection from "./_components/ResumeSection";

const PortfolioPage = () => {
  return (
    <div className="w-[970px] h-[3000px] mt-[400px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6  border">
      {/* 사진 & 간편 소개 & 블로그 */}
      <AboutMe />

      {/* 사용할줄 아는 기술 스택 아이콘들 */}
      <div className="w-full mt-20 mb-20">
        <InfiniteTechSlider />
      </div>

      {/* 배우고 있는, 배우고 싶은 기술 스택 */}
      <div className="mb-20">
        <LearningStackSection />
      </div>

      <div className="mb-10">
        <WorkStyleSection />
      </div>

      <div className="border" />

      <ResumeSection />
    </div>
  );
};

export default PortfolioPage;
