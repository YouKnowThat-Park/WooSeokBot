"use client";

import { useRef } from "react";
import AboutMe from "./_components/AboutMe";
import LearningStackSection from "./_components/LearningStackSection";
import ResumeSection from "./_components/ResumeSection";
import ProjectCard from "./_components/ProjectCard";
import InfiniteTechSlider from "./_components/InfinteTechSlider";
import TechProjectsModal from "./_components/TechProjectModal";
import { projects, studyProjects } from "@/data/project";
import useAutoSliderController from "@/hooks/useAutoSliderController.ts";
import TopWorkStyleSection from "./_components/TopWorkStyleSection";
import MiddleWorkStyleSection from "./_components/MiddleWorkStyleSection";
import BottomWorkStyleSection from "./_components/BottomWorkStyleSection";
import NextProjectsSlider from "../_components/NextProjectsSlider";
import NextStudyProjectsSlider from "../_components/NextStudyProjectSlider";

const PortfolioPage = () => {
  const projectSliderRef = useRef<HTMLDivElement | null>(null);
  const studySliderRef = useRef<HTMLDivElement | null>(null);

  const { scrollByDirection: scrollProjects } =
    useAutoSliderController(projectSliderRef);
  const { scrollByDirection: scrollStudies } =
    useAutoSliderController(studySliderRef);

  return (
    <>
      <div className="w-[970px] h-auto mt-[400px] mb-[84px]  bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden border  dark:bg-[#111111] dark:border-white">
        <AboutMe />

        <div className="w-full mt-20 mb-20 dark:text-white">
          <InfiniteTechSlider />
          <TechProjectsModal />
        </div>

        <div className=" px-10 py-40 bg-[#F3F4F6] dark:bg-[#2e2e2e]">
          <LearningStackSection />
        </div>
        <TopWorkStyleSection />
        <MiddleWorkStyleSection />
        <BottomWorkStyleSection />
      </div>

      <div className="w-[970px]">
        <ResumeSection />
      </div>

      {/* Projects */}
      <div className="w-[970px] h-auto  mb-[84px] bg-white py-10 px-5 overflow-hidden border  dark:bg-[#111111] dark:border-white">
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
