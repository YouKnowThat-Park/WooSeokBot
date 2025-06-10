"use client";
import NextStudyProjectsSlider from "@/app/_components/NextStudyProjectSlider";
import ProjectGoals from "@/app/_components/ProjectGoals";
import ProjectHero from "@/app/_components/ProjectHero";
import ProjectOverview from "@/app/_components/ProjectOverview";
import TeamRoles from "@/app/_components/TeamRoles";
import ProjectDescription from "@/app/project/_components/ProjectDescription";
import { VoirTeamRoles } from "@/data/VoirTeamRoles";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-[970px] h-full mt-[100px]  mb-[10px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg">
        <ProjectHero
          title="Voir Le Chemin"
          imageSrc="/vairlechemin.png"
          serviceUrl="https://newspeedproject.vercel.app/"
          githubUrl="https://github.com/hansolChoi29/newsfeed-project"
          description="여행 SNS"
          devEnv="Vite.js, JavaScript, Supabase, Vercel"
          type="팀 프로젝트"
          imageWidth={400}
          imageHeight={200}
        />
      </div>

      <div className="w-[970px] h-full mt-10 p-4 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#2e2e2e] dark:border-neutral-700">
        <ProjectDescription
          title="팀 프로젝트 과제"
          paragraphs={[
            "추천하고싶은 여행지나 가보고 싶은 여행지를 마음껏 말해보는 브라우저입니다. 다른 사용자들이 이동한 코스나 맛집에 대한 정보를 구경할 수 있고 본인이 마음에 든 여행지에 대해 북마크를 설정해두고 필요할 때 찾아볼 수 있습니다.",
          ]}
        />

        <ProjectOverview
          title="Project Overview"
          items={[
            "프로젝트명 : Voir Le Chemin (길을 보다)",
            "한줄 설명 : 여행지와 맛집을 올려주세요! 다른 사용자들이 글을 보고 여행을 떠나고 싶을만큼",
            "기술 스택 : React, Vite.js, JavaScript, Context API,  ",
            "개발 기간 : 2024.11.15 ~ 24.11.21",
          ]}
        />

        <TeamRoles title="👥 팀 구성 및 역할" members={VoirTeamRoles} />

        <ProjectGoals
          goals={[
            "styled-components를 이용한 고도화된 컴포넌트 스타일링 기법",
            "context API를 이용한 리액트 전역상태 관리 방법",
            "react-router-dom을 이용한 라우팅 기법",
            "비밀번호 재설정 기능 구현",
          ]}
        />
      </div>

      <div>
        <Image
          src="/voirfigma.png"
          alt="호로스코프 와이어프레임"
          width={1000}
          height={500}
        />
      </div>

      <div className="mt-10 mb-20">
        <Image
          src="/voirERD.png"
          alt="호로스코프 ERD"
          width={1000}
          height={500}
        />
      </div>
      <div className="w-[980px]">
        <NextStudyProjectsSlider excludeId="Voir Le Chemin" />
      </div>
    </>
  );
};

export default page;
