"use client";
import ProjectHero from "@/app/_components/ProjectHero";
import React from "react";
import ProjectDescription from "../_components/ProjectDescription";
import ProjectOverview from "@/app/_components/ProjectOverview";
import TeamRoles from "@/app/_components/TeamRoles";
import ProjectGoals from "@/app/_components/ProjectGoals";
import UserFlowSection from "../_components/UserFlowSection";
import TechStackTable from "../_components/TechStackTable";
import ProjectDetails from "../_components/ProjectDetails";
import ProjectRetrospective from "../_components/ProjectRetrospective";
import NextProjectsSlider from "../../_components/NextProjectsSlider";
import { WooseokBot } from "@/data/WooseokBot";
import { WooseokBotTechItems } from "@/data/WooseokBotTechItems";
import { WooSeokBotDetails } from "@/data/WooSeokBotDetails";

const WooSeokBot = () => {
  return (
    <div className="w-[970px] h-full mt-[100px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg">
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
              "프로젝트명 : WooSeok Bot",
              "한줄 설명 : AI 챗봇으로 구현한 인터랙티브 포트폴리오",
              "자연어 유연성 처리: 오타, 말줄임, 문장 순서가 바뀐 질문에도 의도를 파악할 수 있도록 설계하여, 실사용자 환경에서도 안정적인 대화 흐름을 제공합니다.",
              "대화 문맥 유지: 이전 질문과의 맥락을 기억하고 이어서 응답하는 구조로 설계되어, 단발성 응답이 아닌 인터뷰처럼 연속된 대화 경험을 제공합니다.",
              "개발 기간 : 2025.5.22 ~ 2025.6.20",
            ]}
          />
          <TeamRoles title="👥 팀 구성 및 역할" members={WooseokBot} />
          <ProjectGoals
            goals={[
              "Django 기반 백엔드 개발과 PostgreSQL을 활용한 데이터베이스 설계 역량 강화",
              "자연어 처리를 활용한 고도화된 AI 챗봇 구현 경험",
              "사용자 경험(UX)을 중심으로 챗봇 인터랙션 설계 및 개선",
            ]}
          />
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
          description=""
          items={WooseokBotTechItems}
        />
      </div>

      {/* <PerformanceSection
        title="Performance"
        performanceItems={stage101Performance}
      /> */}

      <ProjectDetails
        title="Project Details"
        sections={WooSeokBotDetails}
        imageSize={{ width: 400, height: 200 }}
      />

      {/* 재사용 컴포넌트 */}
      <ProjectRetrospective
        learned={`이번 프로젝트를 통해 백엔드와 AI 챗봇 개발에 대한 실질적인 경험을 쌓을 수 있었습니다. 단순히 기능 구현에 그치지 않고, 챗봇의 응답 흐름과 사용자 인터랙션을 설계하면서 서비스의 본질을 고민할 수 있었고, 특히 AI와 사용자 간의 자연스러운 소통을 위해 어떤 데이터를 어떻게 처리하고 학습시켜야 할지를 체득하는 계기가 되었습니다. WooSeok Bot은 제 정보를 기반으로 동작하는 챗봇이기 때문에, 개발 과정 내내 '나'라는 사람을 되돌아보고 표현하는 과정을 거칠 수밖에 없었습니다. 이는 단순히 기술적인 구현을 넘어 나 자신을 깊이 있게 마주하고 정리하는 과정이었고, 동시에 쉽지 않은 작업이었습니다. 덕분에 기술뿐만 아니라 나 자신에 대해서도 더 명확하게 이해할 수 있었던 값진 경험이었습니다.`}
        regret={``}
      />

      {/* 재사용 컴포넌트 */}
      <NextProjectsSlider excludeId="WooseokBot" />
    </div>
  );
};

export default WooSeokBot;
