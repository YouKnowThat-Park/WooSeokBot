"use client";

import { useEffect, useRef } from "react";
import AboutMe from "./_components/AboutMe";
import LearningStackSection from "./_components/LearningStackSection";
import WorkStyleSection from "./_components/WorkStyleSection";
import ResumeSection from "./_components/ResumeSection";
import ProjectCard from "./_components/ProjectCard";
import InfiniteTechSlider from "./_components/InfinteTechSlider";

const projects = [
  {
    id: "DoGo",
    title: "DoGo",
    description: "Team Project(4 Front, 1 Designer)",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/dogo.png",
    link: "/project/dogo",
  },
  {
    id: "Stage101",
    title: "Stage101",
    description: "Personal Project",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/stage101.png",
    link: "/project/stage101",
  },
  {
    id: "WooseokBot",
    title: "WooseokBot",
    description: "Personal Project",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/wooseokbot.png",
    link: "/project/WooseokBot",
  },
];

const studyProjects = [
  {
    id: "GhostHouse",
    title: "GhostHouse",
    description: "Study Project",
    date: "2025.03.20 ~ 2025.04.30",
    image: "/ghosthouse.png",
    link: "/project/GhostHouse",
  },
];

const PortfolioPage = () => {
  const projectSliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = projectSliderRef.current;
    if (!container) return;

    const cardWidth = 340;
    let scrollIndex = 0;
    let intervalId: NodeJS.Timeout | null = null;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (!container) return;

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

    const stopAutoScroll = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    // ✅ 초기 실행
    startAutoScroll();

    // ✅ 마우스 이벤트 등록
    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);

    // ✅ 클린업
    return () => {
      stopAutoScroll();
      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  const handleScroll = (dir: "left" | "right") => {
    const container = projectSliderRef.current;
    if (!container) return;
    const cardWidth = 340;
    const offset = dir === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="w-[970px] h-auto mt-[400px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border shadow-xl">
      {/* 사진 , 주소 링크 , 한 줄 설명 */}
      <AboutMe />

      {/* 기술 스택 아이콘 */}
      <div className="w-full mt-20 mb-20">
        <InfiniteTechSlider />
      </div>

      {/* 배우고 있는 , 배우고 싶은 기술 스택 */}
      <div className="mb-20">
        <LearningStackSection />
      </div>

      {/* 업무 스타일 */}
      <div className="mb-10">
        <WorkStyleSection />
      </div>

      {/* 학력 , 자격증, 경력, 수료 */}
      <div className="border" />
      <ResumeSection />
      <div className="border mt-10 mb-6" />

      {/* Projects Section */}
      <h3 className="text-xl font-semibold mb-2">Projects</h3>
      <div className="relative">
        {/* 좌우 버튼 */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70  px-2 py-1 rounded-full shadow"
        >
          ←
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300/70 px-2 py-1 rounded-full shadow"
        >
          →
        </button>

        {/* 슬라이더 */}
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
      <div>
        <h3 className="mb-4 text-xl font-semibold">Study Project</h3>
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden">
          {studyProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
