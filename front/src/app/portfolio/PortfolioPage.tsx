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

        <div className=" px-10 py-40 bg-[#EDEDED] dark:bg-[#2e2e2e]">
          <LearningStackSection />
        </div>
        <TopWorkStyleSection />
        <MiddleWorkStyleSection />
        <BottomWorkStyleSection />
      </div>

      <ResumeSection />

      {/* Projects */}
      <div className="w-[970px] h-auto  mb-[84px] bg-white py-10 px-5 overflow-hidden border  dark:bg-[#111111] dark:border-white">
        <h3 className="text-xl font-semibold mb-2 dark:text-[#fbfbfb]">
          Projects
        </h3>
        <div className="relative">
          <button
            onClick={() => scrollProjects("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 dark:bg-black/40 px-2 py-1 rounded-full shadow"
          >
            ←
          </button>
          <button
            onClick={() => scrollProjects("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 dark:bg-black/40  px-2 py-1 rounded-full shadow"
          >
            →
          </button>
          <div
            ref={projectSliderRef}
            className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          >
            {[...projects, ...projects].map((project, i) => (
              <ProjectCard key={`${project.id}-${i}`} {...project} />
            ))}
          </div>
        </div>

        {/* Study Projects */}
        <div className="border mt-10 mb-6" />
        <h3 className="mb-4 text-xl font-semibold dark:text-[#fbfbfb]">
          Study Project
        </h3>
        <div className="relative">
          <button
            onClick={() => scrollStudies("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 dark:bg-black/40  px-2 py-1 rounded-full shadow"
          >
            ←
          </button>
          <button
            onClick={() => scrollStudies("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 dark:bg-black/50  px-2 py-1 rounded-full shadow"
          >
            →
          </button>
          <div
            ref={studySliderRef}
            className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          >
            {[...studyProjects, ...studyProjects].map((project, i) => (
              <ProjectCard key={`${project.id}-${i}`} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
