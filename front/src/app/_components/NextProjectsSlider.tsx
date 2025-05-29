import React, { useRef } from "react";
import ProjectCard from "../portfolio/_components/ProjectCard";
import useAutoSliderController from "@/hooks/useAutoSliderController.ts";
import { projects } from "@/data/project";

const NextProjectsSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const { scrollByDirection } = useAutoSliderController(sliderRef);
  const filteredProjects = projects.filter((p) => p.id !== "Stage101");

  return (
    <div className="w-full mt-10 mb-6">
      <h3 className="mb-4 text-xl font-semibold dark:text-[#fbfbfb]">
        다른 프로젝트
      </h3>
      <div className="relative">
        <button
          onClick={() => scrollByDirection("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 px-2 py-1 rounded-full shadow"
        >
          ←
        </button>
        <button
          onClick={() => scrollByDirection("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 px-2 py-1 rounded-full shadow"
        >
          →
        </button>
        <div
          ref={sliderRef}
          className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {[...filteredProjects, ...filteredProjects].map((project, i) => (
            <ProjectCard key={`${project.id}-${i}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextProjectsSlider;
