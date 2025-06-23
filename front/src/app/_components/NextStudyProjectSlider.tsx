import React, { useRef } from "react";
import ProjectCard from "../portfolio/_components/ProjectCard";
import useAutoSliderController from "@/hooks/useAutoSliderController.ts";
import { studyProjects } from "@/data/project";

interface NextProjectsSliderProps {
  excludeId: string;
}

const NextStudyProjectsSlider = ({ excludeId }: NextProjectsSliderProps) => {
  const studySliderRef = useRef<HTMLDivElement | null>(null);
  const filteredProjects = studyProjects.filter((p) => p.id !== excludeId);

  const { scrollByDirection } = useAutoSliderController(studySliderRef);

  return (
    <>
      <div className="border mt-10 mb-6 mx-auto" />
      <h3 className="mb-4 text-xl font-semibold dark:text-[#fbfbfb]">
        Study Project
      </h3>
      <div className="relative">
        <button
          onClick={() => scrollByDirection("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 px-2 py-1 rounded-full shadow"
          aria-label="슬라이드 왼쪽으로 넘기기"
        >
          ←
        </button>
        <button
          onClick={() => scrollByDirection("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 px-2 py-1 rounded-full shadow"
          aria-label="슬라이드 오른쪽으로 넘기기"
        >
          →
        </button>
        <div
          ref={studySliderRef}
          className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {[...filteredProjects, ...filteredProjects].map((project, i) => (
            <ProjectCard key={`${project.id}-${i}`} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NextStudyProjectsSlider;
