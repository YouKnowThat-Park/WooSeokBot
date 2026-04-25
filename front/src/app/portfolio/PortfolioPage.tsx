"use client";

import AboutMe from "./_components/AboutMe";
import LearningStackSection from "./_components/LearningStackSection";
import ResumeSection from "./_components/ResumeSection";
import InfiniteTechSlider from "./_components/InfinteTechSlider";
import TechProjectsModal from "./_components/TechProjectModal";
import TopWorkStyleSection from "./_components/TopWorkStyleSection";
import MiddleWorkStyleSection from "./_components/MiddleWorkStyleSection";
import BottomWorkStyleSection from "./_components/BottomWorkStyleSection";
import NextProjectsSlider from "../_components/NextProjectsSlider";
import NextStudyProjectsSlider from "../_components/NextStudyProjectSlider";

const PortfolioPage = () => {
  return (
    <>
      <div className="w-[970px] h-auto mt-[1000px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden border shadow-xl dark:bg-[#111111] dark:border-white max-[1279px]:w-full max-[1279px]:max-w-[970px] max-[1279px]:rounded-tl-[32px] max-[767px]:mt-[240px] sm:max-[1279px]:mt-[820px] md:max-[1279px]:mt-[900px] lg:max-[1279px]:mt-[960px]">
        <AboutMe />

        <div className="w-full  mt-20 mb-20 dark:text-white">
          <InfiniteTechSlider />
          <TechProjectsModal />
        </div>

        <div className="px-10 bg-[#F9FAFB] dark:bg-[#2e2e2e] max-[1279px]:px-4 sm:max-[1279px]:px-6 md:max-[1279px]:px-8">
          <LearningStackSection />
        </div>
        <TopWorkStyleSection />
        <MiddleWorkStyleSection />
        <BottomWorkStyleSection />
      </div>

      <div className="w-[970px] max-[1279px]:w-full max-[1279px]:max-w-[970px]">
        <ResumeSection />
      </div>

      {/* Projects */}
      <div className="w-[970px] h-auto mb-[84px] bg-white py-10 px-5 overflow-hidden border dark:bg-[#111111] dark:border-white max-[1279px]:w-full max-[1279px]:max-w-[970px] max-[1279px]:px-4 sm:max-[1279px]:px-5">
        <NextProjectsSlider
          excludeId="
        "
        />

        {/* Study Projects */}
        <NextStudyProjectsSlider excludeId="" />
      </div>
    </>
  );
};

export default PortfolioPage;
