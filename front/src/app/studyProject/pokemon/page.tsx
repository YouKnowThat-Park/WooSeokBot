"use client";
import NextStudyProjectsSlider from "@/app/_components/NextStudyProjectSlider";
import ProjectGoals from "@/app/_components/ProjectGoals";
import ProjectHero from "@/app/_components/ProjectHero";
import ProjectOverview from "@/app/_components/ProjectOverview";
import ProjectDescription from "@/app/project/_components/ProjectDescription";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-[970px] h-full mt-[100px]  mb-[10px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg">
        <ProjectHero
          title="Pokemon Dex"
          imageSrc="/pokemon.png"
          serviceUrl="https://pokemon-project-vb86.vercel.app/"
          githubUrl="https://github.com/YouKnowThat-Park/Pokemon-Project"
          description="포캣몬 도감"
          devEnv="React, Vite.js, JavaScript, Vercel"
          type="개인 프로젝트"
          imageWidth={720}
          imageHeight={200}
        />
      </div>

      <div className="w-[970px] h-full mt-10 p-4 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#2e2e2e] dark:border-neutral-700">
        <ProjectDescription
          title="개인 프로젝트 과제"
          paragraphs={[
            "귀여운 포켓몬 도감을 통해 원하는 포켓몬 정보를 확인할 수 있어요!",
          ]}
        />
        <ProjectOverview
          title="Project Overview"
          items={[
            "프로젝트명 : Pokemon Dex",
            "한줄 설명 : 귀여운 포캣몬 도감!",
            "기술 스택 : React, Vite.js, JavaScript",
            "개발 기간 : 2024.11.06 ~ 2024.11.14",
          ]}
        />

        <ProjectGoals
          goals={[
            "react-router-dom의 useNavigate를 활용한 페이지 간 라우팅 구현",
            "도감 페이지 및 디테일 페이지 구현",
            "알림 기능은 react-toastify를 활용",
            "검색 기능 구현",
            "styled-components를 활용한 컴포넌트 스타일링 및 전역 스타일 적용 ",
          ]}
        />
      </div>
      <div className="w-[1000px]">
        <NextStudyProjectsSlider excludeId="pokemon" />
      </div>
    </>
  );
};

export default page;
