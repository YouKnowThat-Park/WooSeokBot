"use client";
import NextStudyProjectsSlider from "@/app/_components/NextStudyProjectSlider";
import ProjectGoals from "@/app/_components/ProjectGoals";
import ProjectHero from "@/app/_components/ProjectHero";
import ProjectOverview from "@/app/_components/ProjectOverview";
import TeamRoles from "@/app/_components/TeamRoles";
import ProjectDescription from "@/app/project/_components/ProjectDescription";
import { HoroscopeTeamRoles } from "@/data/HoroscopeTeamRoles";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-[970px] h-full mt-[100px]  mb-[10px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg">
        <ProjectHero
          title="Horoscope"
          imageSrc="/horoscope.png"
          githubUrl="https://github.com/Noonsae/Horoscope-Project?tab=readme-ov-file"
          description="운세 및 별자리 테스트"
          devEnv="Next.js, TypeScript, Vercel"
          type="팀 프로젝트"
          imageWidth={720}
          imageHeight={200}
        />
      </div>

      <div className="w-[970px] h-full mt-10 border p-4 border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#2e2e2e] dark:border-neutral-700">
        <ProjectDescription
          title="팀 프로젝트 과제"
          paragraphs={[
            "점성술과 별자리를 통해 일상에 재미와 통찰을 더하는 것을 목표로 합니다. 사용자는 오늘의 운세와 별자리 정보를 확인하고, 궁합과 덕담을 통해 사람들과 소통하며 자신만의 특별한 경험을 만들어갈 수 있습니다.",
          ]}
        />

        <ProjectOverview
          title="Project Overview"
          items={[
            "프로젝트명 : Horoscope",
            "한줄 설명 : 생년월일에 맞는 별자리 정보를 확인할 수 있어요!",
            "기술 스택 : Next.js, TypeScript, Supabase, React Query, Zustand, sweetalert2, day-picker",
            "개발 기간 : 2024.12.20(금) ~ 2024.12.30(월)",
          ]}
        />

        <TeamRoles title="👥 팀 구성 및 역할" members={HoroscopeTeamRoles} />

        <ProjectGoals
          goals={[
            "Zustand를 활용하여 컴포넌트 간 전역 상태를 효율적으로 관리하는 방법을 실습",
            "Supabase를 직접 연결하여 백엔드 없이도 데이터베이스와 인증, API 설계 흐름을 이해",
            "Tailwind CSS를 활용해 빠르고 일관된 UI를 구현하며 Utility-first 방식에 익숙해짐",
          ]}
        />
      </div>

      <div>
        <Image
          src="/chatbotHoroscopefigma.jpg"
          alt="호로스코프 와이어프레임"
          width={1000}
          height={500}
        />
      </div>

      <div className="mt-10 mb-20">
        <Image
          src="/horoscopeERD.jpg"
          alt="호로스코프 ERD"
          width={1000}
          height={500}
        />
      </div>
      <div className="w-[1000px]">
        <NextStudyProjectsSlider excludeId="Horoscope" />
      </div>
    </>
  );
};

export default page;
