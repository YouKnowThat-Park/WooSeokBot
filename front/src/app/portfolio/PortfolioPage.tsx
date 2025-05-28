"use client";

import { useEffect, useRef } from "react";
import AboutMe from "./_components/AboutMe";
import LearningStackSection from "./_components/LearningStackSection";
import WorkStyleSection from "./_components/WorkStyleSection";
import ResumeSection from "./_components/ResumeSection";
import ProjectCard from "./_components/ProjectCard";
import InfiniteTechSlider from "./_components/InfinteTechSlider";
import TechProjectsModal from "./_components/TechProjectModal";

const projects = [
  {
    id: "DoGo",
    title: "DoGo",
    role: "서비스 기획 PM, Front",
    description: "Team Project(4 Front, 1 Designer)",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/dogo.png",
    link: "/project/dogo",
  },
  {
    id: "Stage101",
    title: "Stage101",
    description: "Personal Project",
    role: "서비스 기획 PM, Front",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/stage101.png",
    link: "/project/stage101",
  },
  {
    id: "WooseokBot",
    title: "WooseokBot",
    description: "Personal Project",
    role: "서비스 기획 PM, Front",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/wooseokbot.png",
    link: "/project/WooseokBot",
  },
  {
    id: "AI ChatBot",
    title: "AI ChatBot",
    description: "개발PM",
    role: "서비스 기획 PM, Front",
    date: "2025.04.21 ~ 2025.04.28",
    image: "/aichatbot.png",
    link: "/project/AiChatBot",
  },
];

const studyProjects = [
  {
    id: "GhostHouse",
    title: "GhostHouse",
    description: "Team Project",
    role: "서비스 기획 PM, Front",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/ghosthouse.png",
    link: "/project/GhostHouse",
  },
  {
    id: "LoLProject",
    title: "LoL Project",
    description: "Personal Project",
    role: "서비스 기획 PM, Front",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/lol.png",
    link: "/project/LoLProject",
  },
  {
    id: "Horoscope",
    title: "Horoscope",
    description: "Team Project",
    role: "서비스 기획 PM, Front",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/horoscope.png",
    link: "/project/Horoscope",
  },
  {
    id: "Vair Le Chemin",
    title: "Vair Le Chemin",
    description: "Team Project",
    role: "서비스 기획 PM, Front",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/vairlechemin.png",
    link: "/project/VairLeChemin",
  },
  {
    id: "To Do List",
    title: "To Do List",
    description: "Personal Project",
    role: "서비스 기획 PM, Front",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/todolist.png",
    link: "/project/ToDoList",
  },
  {
    id: "mbti",
    title: "mbti",
    description: "Personal Project",
    role: "서비스 기획 PM, Front",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/mbti.png",
    link: "/project/Mbti",
  },
  {
    id: "pokemon",
    title: "pokemon",
    description: "Personal Project",
    role: "Front",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/pokemon.png",
    link: "/project/Pokemon",
  },
];

const PortfolioPage = () => {
  const projectSliderRef = useRef<HTMLDivElement | null>(null);
  const studySliderRef = useRef<HTMLDivElement | null>(null);

  const initAutoScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;

    const container = ref.current;
    const cardWidth = 340;
    let scrollIndex = 0;
    let intervalId: NodeJS.Timeout | null = null;

    const start = () => {
      intervalId = setInterval(() => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        scrollIndex++;
        const nextScroll = scrollIndex * cardWidth;

        if (nextScroll >= maxScrollLeft) {
          scrollIndex = 0;
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollTo({ left: nextScroll, behavior: "smooth" });
        }
      }, 3000);
    };

    const stop = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    start();

    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);

    return () => {
      stop();
      container.removeEventListener("mouseenter", stop);
      container.removeEventListener("mouseleave", start);
    };
  };

  useEffect(() => {
    const clean1 = initAutoScroll(projectSliderRef);
    const clean2 = initAutoScroll(studySliderRef);
    return () => {
      clean1?.();
      clean2?.();
    };
  }, []);

  const handleScroll = (
    dir: "left" | "right",
    ref: React.RefObject<HTMLDivElement>
  ) => {
    const container = ref.current;
    if (!container) return;
    const cardWidth = 340;
    const offset = dir === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="w-[970px] h-auto mt-[400px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border shadow-xl dark:bg-[#111111] dark:border-white">
      <AboutMe />

      <div className="w-full mt-20 mb-20 dark:text-whit ">
        <InfiniteTechSlider />
        <TechProjectsModal />
      </div>

      <div className="mb-20">
        <LearningStackSection />
      </div>

      <div className="mb-10">
        <WorkStyleSection />
      </div>

      <div className="border" />
      <ResumeSection />
      <div className="border mt-10 mb-6" />

      {/* Projects */}
      <h3 className="text-xl font-semibold mb-2">Projects</h3>
      <div className="relative">
        <button
          onClick={() => handleScroll("left", projectSliderRef)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70  px-2 py-1 rounded-full shadow"
        >
          ←
        </button>
        <button
          onClick={() => handleScroll("right", projectSliderRef)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 px-2 py-1 rounded-full shadow"
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
      <h3 className="mb-4 text-xl font-semibold">Study Project</h3>
      <div className="relative">
        <button
          onClick={() => handleScroll("left", studySliderRef)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 px-2 py-1 rounded-full shadow"
        >
          ←
        </button>
        <button
          onClick={() => handleScroll("right", studySliderRef)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 px-2 py-1 rounded-full shadow"
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
  );
};

export default PortfolioPage;
