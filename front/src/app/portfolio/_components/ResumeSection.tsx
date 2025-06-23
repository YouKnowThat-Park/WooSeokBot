"use client";

import React, { useEffect, useRef } from "react";

interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  position: "top" | "bottom";
}

const rawItems: Omit<TimelineItem, "position">[] = [
  {
    title: "🌱 입소",
    subtitle: "KDT 내일배움캠프 React_7기",
    description: "2024.09.30 ~ ",
  },
  {
    title: "📝 Mypage Project",
    subtitle: "HTML, CSS",
    description: "2024.10.02 ~ 24.10.07",
  },
  {
    title: "🍿 Movie Search",
    subtitle: "HTML5, CSS, JS, TMDB API",
    description: "2024.10.15 ~ 24.10.24",
  },
  {
    title: "🏅 Medal Table",
    subtitle: "React, Vite.js, React Hook, CSS",
    description: "2024.10.29 ~ 24.11.01",
  },
  {
    title: "🧌 Pokemon",
    subtitle: "React, React Router, styled-components, Vite.js",
    description: "2024.11.06 ~ 24.11.14",
  },
  {
    title: "🚶‍♂️‍➡️ Voir le chemin",
    subtitle: "React, Vite.js, ContextAPI, Supabase, React Query",
    description: "2024.11.15 ~ 24.11.21",
  },
  {
    title: "🤔 MBTI Test",
    subtitle: "React, Vite.js, styled-components, Axios, Tailwind CSS",
    description: "2024.11.22 ~ 24.11.28",
  },
  {
    title: "👻 GhostHouse",
    subtitle: "React, Styled-components, React Query, Supabase, Kakao SDK",
    description: "2024.11.29 ~ 24.12.05",
  },
  {
    title: "🤺 LOL Project",
    subtitle: "Next.js, TypeScript, React Query, LOL API, Tailwind CSS",
    description: "2024.12.09 ~ 24.12.19",
  },
  {
    title: "🔮 Horoscope",
    subtitle:
      "Next.js, TypeScript, React Query, Zustand, Tailwind CSS, Supabase",
    description: "2024.12.20 ~ 24.12.30",
  },
  {
    title: "🧳 DoGo",
    subtitle: "Next.js, TypeScript, React Query, Zustand, Kakao SDK, Supabase",
    description: "2024.12.31 ~ 25.02.07",
  },
  {
    title: "🌳 수료",
    subtitle: "KDT 내일배움캠프 React_7기",
    description: " ~ 2025.02.10",
  },
  {
    title: "📽️ STAGE_101",
    subtitle: "Next.js, TypeScript, Zustand, Tailwind CSS",
    description: "2025.03.02 ~ 2025.04.10",
  },
  {
    title: "🤖 AI_ChatBot",
    subtitle: "개발PM",
    description: "2025.04.21 ~ 2025.04.28",
  },
  {
    title: "📒 ToDo List",
    subtitle: "Next.js, Recoil",
    description: "2025.05.01 ~ 25.05.6",
  },
  {
    title: "🤝 WooSeok Bot",
    subtitle: "Next.js, Recoil, Django, TypeScript, React Query",
    description: "Git 기반 협업",
  },
];

const timelineItems: TimelineItem[] = rawItems.map((item, idx) => ({
  ...item,
  position: idx % 2 === 0 ? "top" : "bottom",
}));

const ResumeSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 60, behavior: "smooth" });
  }, []);

  return (
    <div className="relative mx-auto bg-white dark:bg-[#111111] dark:text-[#fbfbfb] pb-14">
      {/* 스크롤 버튼 */}
      <button
        onClick={scrollLeft}
        aria-label="슬라이드 왼쪽으로 넘기기"
        className="absolute left-2 top-[50%] transform -translate-y-1/2 z-30 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
      >
        ←
      </button>
      <button
        onClick={scrollRight}
        aria-label="슬라이드 오른쪽으로 넘기기"
        className="absolute right-2 top-[50%] transform -translate-y-1/2 z-30 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
      >
        →
      </button>

      {/* 스크롤 가능한 영역 */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth px-12 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        <div className="relative z-10 h-[400px] flex snap-x snap-mandatory w-max pr-8">
          {/* 중심선 */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 dark:bg-gray-600 -translate-y-1/2 z-0" />

          {timelineItems.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[250px] flex-shrink-0 mx-4 flex flex-col items-center snap-center"
            >
              {/* 위쪽 아이템 */}
              {item.position === "top" && (
                <div className="absolute bottom-[230px] text-center w-[250px]">
                  <p className="text-[16px] font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm dark:text-gray-300">
                    {item.subtitle}
                  </p>
                  <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              )}

              {/* 중앙 점 */}
              <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-black dark:bg-white rounded-full border-4 border-white dark:border-[#111111] z-10" />

              {/* 아래쪽 아이템 */}
              {item.position === "bottom" && (
                <div className="absolute bottom-[95px] text-center w-[250px]">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                  <p className="text-sm dark:text-gray-300">{item.subtitle}</p>
                  <p className="text-[16px] font-semibold mt-1">{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 안내 텍스트 */}
      <p className="text-sm text-gray-400 text-center mt-3">
        👉 좌우 버튼 또는 스크롤로 타임라인을 이동해보세요
      </p>
    </div>
  );
};

export default ResumeSection;
