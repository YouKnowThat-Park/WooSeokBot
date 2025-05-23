// src/app/portfolio/PortfolioPage.tsx
"use client";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { activeProjectAtom } from "@/recoil/ProjectAtom";
import Stage101 from "@/app/project/Stage101";
import InfiniteTechSlider from "./_components/InfinteTechSlider";
import AboutMe from "./_components/AboutMe";
import LearningStackSection from "./_components/LearningStackSection";
import WorkStyleSection from "./_components/WorkStyleSection";
import ResumeSection from "./_components/ResumeSection";
import Image from "next/image";

const PortfolioPage = () => {
  const activeProject = useRecoilValue(activeProjectAtom);
  const setActiveProject = useSetRecoilState(activeProjectAtom);

  if (activeProject === "Stage101") {
    return <Stage101 />; // ✅ 뷰 전환: 이 컴포넌트로 전체 페이지 교체
  }

  return (
    <div className="w-[970px] h-[3000px] mt-[400px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border">
      <AboutMe />
      <div className="w-full mt-20 mb-20">
        <InfiniteTechSlider />
      </div>
      <div className="mb-20">
        <LearningStackSection />
      </div>
      <div className="mb-10">
        <WorkStyleSection />
      </div>
      <div className="border" />
      <ResumeSection />
      <div className="border mt-10" />
      <div>
        <h3>Project</h3>
        <button onClick={() => setActiveProject("Stage101")}>
          <Image
            src="/stage101.png"
            alt="스테이지101 이미지"
            width={100}
            height={100}
          />
        </button>
      </div>
    </div>
  );
};

export default PortfolioPage;
