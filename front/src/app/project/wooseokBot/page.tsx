"use client";
import ProjectHero from "@/app/_components/ProjectHero";
import AboutMe from "@/app/portfolio/_components/AboutMe";
import InfiniteTechSlider from "@/app/portfolio/_components/InfinteTechSlider";
import LearningStackSection from "@/app/portfolio/_components/LearningStackSection";
import TechProjectsModal from "@/app/portfolio/_components/TechProjectModal";
import React, { useEffect, useRef } from "react";
import ProjectDescription from "../_components/ProjectDescription";
import ProjectOverview from "@/app/_components/ProjectOverview";
import TeamRoles from "@/app/_components/TeamRoles";
import ProjectGoals from "@/app/_components/ProjectGoals";
import UserFlowSection from "../_components/UserFlowSection";
import TechStackTable from "../_components/TechStackTable";
import PerformanceSection from "../dogo/_components/PerformanceSection";
import ProjectDetails from "../_components/ProjectDetails";
import ProjectRetrospective from "../_components/ProjectRetrospective";
import NextProjectsSlider from "../../_components/NextProjectsSlider";
import { StageTeam } from "@/data/StageTeamRoles";
import { StageTechItems } from "@/data/StageTechItems";
import { stage101Performance } from "@/data/stage101Performance";
import { Stage101Details } from "@/data/stage101Details";

const WooSeokBot = () => {
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
      className="w-[970px] h-full mt-[100px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg"
    >
      {/* 재사용 컴포넌트 */}
      <ProjectHero
        title="Wooseok Bot"
        imageSrc="/wooseokbot.png"
        githubUrl="https://github.com/YouKnowThat-Park/WooSeokBot"
        description="AI Portfolio"
        devEnv="Next.js, TypeScript, Django, Vercel, Reader"
        type="개인 프로젝트"
        imageWidth={1000}
        imageHeight={200}
      />

      <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#2e2e2e] dark:border-neutral-700">
        <ProjectDescription
          title='"Your Interview Begins Here."'
          paragraphs={[
            "면접관 앞에 제가(AI) 서있고 면접관분들이 이력서를 보듯이 포트폴리오도 그런 느낌을 주려고 했습니다.",
            "처음에는 내 정보를 담고 있는 챗봇을 보여주고, 스크롤을 올리면 포트폴리오가 나오는 구조로 만들었습니다.",
            "창의성 없는 따분한 포트폴리오 페이지보다 조금 더 나를 표현할 수 있는 방식은 무엇이 있을까라는 생각으로 시작했습니다.",
            "실제 면접보는 환경을 구현해 봤고, 대신 저의 뇌를 갖고 있는 AI가 답변해 드리는 콘셉트로 제작했습니다.",
          ]}
        />

        <div className="ml-10 mt-10 dark:text-[#fbfbfb]">
          <ProjectOverview
            title="Project Overview"
            items={[
              "프로젝트명 : STAGE_101",
              "한줄 설명 : 하나의 공간에서 무한한 가능성을 단 한 번의 경험으로 STAGE_101",
              "반응형 디자인 : 모든 페이지는 최소 430px을 기준으로 반응형 구현되어 모바일, 데스크탑 모두 최적화 되었습니다.",
              "스켈레톤 UI : 데이터 로딩 시간이 길어질 때 사용자에게 빈 화면 대신 스켈레톤 UI를 제공하여 더 나은 UX 제공",
              "개발 기간 : 4~5주 정도 진행 되었습니다.",
            ]}
          />
          <TeamRoles title="👥 팀 구성 및 역할" members={StageTeam} />
          <ProjectGoals
            goals={[
              "다양한 기능을 직접 구현하며 기술 스펙트럼을 확장 시키기 위함",
              "실제 서비스처럼 유저 흐름이 완성된 플랫폼을 목표",
              "단순히 개발 만의 목적이 아닌 기획&설계 관점에서도 비지니스 서비스 극대화",
              "사용자의 경험과 동선을 중심에 두고 기능을 설계",
            ]}
          />{" "}
        </div>

        {/* 재사용 컴포넌트 */}
        <UserFlowSection
          images={[
            { src: "/stage101user1.png", alt: "유저 플로우 왼쪽", width: 300 },
            {
              src: "/stage101user2.png",
              alt: "유저 플로우 오른쪽",
              width: 400,
            },
          ]}
        />

        {/* 재사용 컴포넌트 */}
        <TechStackTable
          title="📌 내가 사용한 기술 스택과 라이브러리 선택 이유"
          description="(프로젝트 내에 자세한 설명이 추가되어 있습니다.)"
          items={StageTechItems}
        />
      </div>

      {/* <PerformanceSection
        title="Performance"
        performanceItems={stage101Performance}
      /> */}

      <ProjectDetails
        title="Project Details"
        sections={Stage101Details}
        imageSize={{ width: 400, height: 200 }}
      />

      {/* 재사용 컴포넌트 */}
      <ProjectRetrospective
        learned={`이번 프로젝트를 통해 단순히 화면을 구현하는 것을 넘어, 서비스의 흐름과 사용자의 입장을 함께 고민하며 개발하는 경험을 할 수 있었습니다. 처음에는 내가 구현해야 할 기능만 보였지만, 점점 이 기능이 사용자에게 어떤 흐름 속에서 필요한지, 불편함은 없는지, 어떤 예외 상황이 생길 수 있을지를 스스로 묻고 판단하면서 개발을 진행하게 되었습니다. 또한 프로젝트 전체를 직접 구조화하고, 구현 순서를 정하고, 상황에 따라 기획을 수정하는 과정을 통해 기능 구현뿐 아니라 왜 이 기능이 필요한지를 설명할 수 있는 힘도 함께 기를 수 있었다고 생각합니다.`}
        regret={`이번 프로젝트에서 가장 아쉬웠던 점은 Supabase의 스키마 구조를 설계 초기에 충분히 고민하지 못해 기능 구현 중 여러 차례 테이블 구조를 수정해야 했고 그로 인해 연쇄적으로 다른 로직까지 반복적으로 리팩토링 해야 했던 경험이었습니다. 프론트엔드 개발자라 하더라도 백엔드 데이터 흐름에 대한 충분한 이해와 구조적 설계 능력이 중요하다는 것을 체감했으며, 이후에도 ERD 설계 도구 등을 활용해 더 체계적으로 접근해야겠다는 필요성을 느낄 수 있는 프로젝트였습니다.`}
      />

      {/* 재사용 컴포넌트 */}
      <NextProjectsSlider excludeId="WooseokBot" />
    </div>
  );
};

export default WooSeokBot;
