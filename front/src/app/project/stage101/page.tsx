"use client";

import React, { useEffect, useRef } from "react";
import TeamRolesSection from "./_components/TeamRolesSection";
import ProjectOverviewSection from "./_components/ProjectOverviewSection";
import HeroSection from "./_components/HeroSection";
import TechStackSection from "./_components/TechStackSection";
import UserFlowSection from "./_components/UserFlowSection";
import ProjectGoalsSection from "./_components/ProjectGoalsSection";
import PerformanceSection from "./_components/PerformanceSection";
import ProjectDetailsSection from "@/app/portfolio/_components/ProjectDetailsSection";

const Stage101 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const top =
        containerRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - 150,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[970px] h-full mt-[100px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#3a3a3a] dark:shadow-lg"
    >
      <HeroSection />

      <div className="w-full h-full mt-10  border dark:text-[#fbfbfb]">
        <h2 className="flex justify-center items-center w-auto mt-4 text-[25px] font-semibold  ">
          &quot;One space. One moment. Infinite possibilities.&quot;
        </h2>
        <p>프로젝트 개요</p>
        <p>
          STAGE_101은 기획부터 개발, 디자인까지 혼자서 진행한 풀스택 개인
          프로젝트입니다.
        </p>
        <p>평소 영화 감상과 평론을 즐기던 취향에서 출발해,</p>
        <p>소극장 기반 영화 예약 플랫폼이라는 아이디어로 발전하게 되었고</p>
        <p>단순히 상영작 정보를 보여주는 것이 아니라,</p>
        <p>
          날짜별 예매가 가능한 소극장 조회부터 티켓 결제까지 실제 사용자 흐름을
          고려한 구조로 설계·구현했습니다.
        </p>
        {/* Project Overview */}
        <div className="ml-10 mt-10 dark:text-[#fbfbfb]">
          <ProjectOverviewSection />

          {/* 구성 및 역할 */}
          <TeamRolesSection />

          {/* 프로젝트 목표 */}
          <ProjectGoalsSection />
        </div>
        <UserFlowSection />
        <TechStackSection />
        프로젝트 개요 , 프로젝트 소개, 프로젝트 목표, 유저플로우, 기술 스택 선택
        이유
      </div>

      <PerformanceSection />

      <ProjectDetailsSection />
      <div className="w-full h-[500px] mt-10 bg-white border">회고</div>
      <div className="w-full h-[500px] mt-10 bg-white border">
        다른 프로젝트
      </div>
    </div>
  );
};

export default Stage101;
