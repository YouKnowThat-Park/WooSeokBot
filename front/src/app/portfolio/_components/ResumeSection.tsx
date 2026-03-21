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
    subtitle: "React, Vite, React Hook, CSS",
    description: "2024.10.29 ~ 24.11.01",
  },
  {
    title: "🧌 Pokemon",
    subtitle: "React, React Router, styled-components, Vite",
    description: "2024.11.06 ~ 24.11.14",
  },
  {
    title: "🚶‍♂️‍➡️ Voir le chemin",
    subtitle: "React, Vite, ContextAPI, Supabase, React Query",
    description: "2024.11.15 ~ 24.11.21",
  },
  {
    title: "🤔 MBTI Test",
    subtitle: "React, Vite, styled-components, Axios, Tailwind CSS",
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
    subtitle: "Next.js, Recoil, Django, TypeScript, PostgreSQL",
    description: "2025.05.22 ~ 25.06.25",
  },
  {
    title: "✍️ Full Stack Project",
    subtitle: "Next.js, Django, PostgreSQL",
    description: "2025.07.05 ~ 중지 ",
  },
  {
    title: " ♻️ Stage101 infra Refactoring",
    subtitle: "Vercel, Supabase → AWS, PostgreSQL",
    description: "2025.10.31 ~ 2025.11.24",
  },
  {
    title: " ♻️ Stage101 Design + Feature Refactoring",
    subtitle: "Next.js, FastAPI, PostgreSQL, TypeScript, AWS",
    description: "2026.01.02 ~ 2026.02.06",
  },
  {
    title: " ⚽ SportShip",
    subtitle: "Vue.js, Supabase, TypeScript, Vercel",
    description: "2026.03.23 ~ ",
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
    <div className="relative mx-auto bg-gradient-to-b from-white to-gray-50 dark:from-[#0c0c0c] dark:to-[#111111] dark:text-[#fbfbfb] py-20 px-4">
      {/* 스크롤 버튼 */}
      <button
        onClick={scrollLeft}
        aria-label="슬라이드 왼쪽으로 넘기기"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition"
      >
        ←
      </button>
      <button
        onClick={scrollRight}
        aria-label="슬라이드 오른쪽으로 넘기기"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition"
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
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 -translate-y-1/2 z-0" />

          {timelineItems.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[250px] flex-shrink-0 mx-4 flex flex-col items-center snap-center"
            >
              {/* 위쪽 아이템 */}
              {item.position === "top" && (
                <div className="absolute bottom-[230px] text-center w-[250px] p-4 rounded-xl bg-white/60 dark:bg-[#1a1a1a]/60 backdrop-blur-sm shadow-md">
                  <p className="text-base font-semibold text-black dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {item.subtitle}
                  </p>
                  <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              )}

              {/* 중앙 점 */}
              <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-[#111111] z-10" />

              {/* 아래쪽 아이템 */}
              {item.position === "bottom" && (
                <div className="absolute bottom-[60px] text-center w-[250px] p-4 rounded-xl bg-white/60 dark:bg-[#1a1a1a]/60 backdrop-blur-sm shadow-md">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.subtitle}
                  </p>
                  <p className="text-base font-semibold text-black dark:text-white mt-1">
                    {item.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 안내 텍스트 */}
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-6">
        👉 좌우 버튼 또는 스크롤로 타임라인을 이동해보세요
      </p>
    </div>
  );
};

export default ResumeSection;
