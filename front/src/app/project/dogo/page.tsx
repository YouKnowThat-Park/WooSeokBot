"use client";

import React from "react";

import ProjectHero from "../../_components/ProjectHero";
import ProjectRetrospective from "../_components/ProjectRetrospective";
import NextProjectsSlider from "@/app/_components/NextProjectsSlider";
import UserFlowSection from "../_components/UserFlowSection";
import TechStackTable from "../_components/TechStackTable";
import { DoGoTechItems } from "@/data/DoGoTechItems";
import ProjectDescription from "../_components/ProjectDescription";
import ProjectOverview from "../../_components/ProjectOverview";
import TeamRoles from "../../_components/TeamRoles";
import ProjectDetails from "../_components/ProjectDetails";
import { DoGoDetails } from "@/data/DoGoDetails";
import ProjectGoals from "../../_components/ProjectGoals";
import { DoGoTeam } from "@/data/DoGoTeamRoles";

const DoGo = () => {
  return (
    <div className="w-[970px] h-full mt-[100px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg">
      {/* 재사용 컴포넌트 */}
      <ProjectHero
        title="DoGo"
        imageSrc="/dogo.webp"
        serviceUrl="https://do-go-project.vercel.app/"
        githubUrl="https://github.com/Noonsae/DoGo_project"
        description="호텔 예약 페이지"
        devEnv="Next.js, TypeScript, Vercel"
        type="팀 프로젝트"
        imageWidth={900}
        imageHeight={200}
      />

      <ProjectDescription
        title="Start Your Journey in Style with DoGo"
        paragraphs={[
          "DoGo는 부트캠프 React 7기에서 진행한 5인 팀 프로젝트 였으며 해당 주제는 제가 직접 기획한 아이디어로 시작되었습니다.",
          "아이디어 제안을 적극적으로 했고, 팀 내부에서 아이디어 기반으로 프로젝트를 시작하게 되었고,",
          "그 중 국내 프리미엄 호텔 예약 플랫폼이라는",
          "주제가 실제 서비스로 연결될 수 있겠다는 판단 아래 전체 컨셉을 정리한 기획안을 공유하며 팀원들과 프로젝트를 시작했습니다.",
          "단순한 여행 숙박 앱이 아닌, 리스트 → 상세정보 → 예약까지 자연스럽게 이어지는",
          "흐름과 고급스러운 UX에 중점을 두고 서비스 전반을 설계하고 구현하는 데 주도적인 적할을 맡았습니다.",
        ]}
      />
      <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#2e2e2e] dark:border-neutral-700">
        <div className="ml-10 mt-10 dark:text-[#fbfbfb]">
          <ProjectOverview
            title="Project Overview"
            items={[
              "프로젝트명 : DoGo",
              "한줄 설명 : DoGo 프로젝트란 국내 4,5성 호텔 숙박 중개 애플리케이션 개발 프로젝트입니다.",
              "반응형 디자인 : 모든 페이지는 반응형으로 구현되어 모바일·데스크탑 모두 최적화되었습니다.",
              "스켈레톤 UI : 호텔 리스트 / 상세 페이지에서 데이터 로딩 시 스켈레톤 UI를 적용하여 사용자 대기 피로도 개선",
              "개발 기간 : 12월 31일부터 2월 7일까지 진행되었습니다.",
              "작업 위치 : 호텔 리스트 페이지, 호텔 상세 페이지 개발",
            ]}
          />
          <TeamRoles title="👥 팀 구성 및 역할" members={DoGoTeam} />
          <ProjectGoals
            goals={[
              "4성급, 5성급 호텔 예약이 가능한 프리미엄 숙박 플랫폼을 구현하고자 했습니다.",
              "사용자가 호텔을 검색하고 예약하는 과정에서 불편함 없이 자연스럽게 흐름을 이어갈 수 있는 기본 기능을 충실히 갖추는 데 집중했습니다.",
              "반응형 디자인을 적용해 데스크탑뿐 아니라 모바일 환경에서도 일관된 사용자 경험을 제공하고자 했습니다.",
            ]}
          />
        </div>

        {/* 재사용 컴포넌트 */}
        <UserFlowSection
          images={[{ src: "/dogouser.webp", alt: "유저 플로우", width: 500 }]}
        />

        {/* 재사용 컴포넌트 */}
        <TechStackTable
          title="📌 내가 사용한 기술 스택과 선택 이유"
          description=""
          items={DoGoTechItems}
        />
      </div>

      {/* 재사용 컴포넌트 */}
      <ProjectDetails
        title="Project Details"
        sections={DoGoDetails}
        imageSize={{ width: 500, height: 200 }}
      />

      {/* 재사용 컴포넌트 */}
      <ProjectRetrospective
        learned={`이번 프로젝트를 통해 저는 단순히 기능을 구현 , 트렌디한 기술 사용이 아니라 기능 하나에도 명확한 목적과 사용자 편의성을 기준으로 두고 고민하는 습관을 갖게 되었습니다. “왜 이 기능이 있어야 하는가?”, “다양한 방법 중에서 왜 이 방법을 선택했는가?”, “이 방식이 사용자에게 어떤 편리함과 개선점을 줄 수 있는가?” 이런 질문을 끊임없이 스스로에게 던지며 설계하고 구현했던 프로젝트였습니다.`}
        regret={`협업 과정에서 기능 구현 진척도나 코드 품질에 대한 소통이 원활하지 않아 팀 내 갈등이 발생하기도 했습니다. 역할 간 기대치의 차이와 커뮤니케이션 부족으로 기능 완성도에 차질이 생긴 부분이 아쉬웠습니다. 이를 통해 사전 조율과 일정 공유의 중요성을 절감하게 되었습니다. 그로 인해, 전체적인 일정 공유나 진척 상황을 파악하기 어려웠고, 일부 기능은 기한 내 완성되지 못하는 상황도 발생했습니다. 이 경험을 통해, 사전에 역할 분담과 커뮤니케이션 방식에 대한 명확한 합의의 중요성, 그리고 기술적인 협업 못지않게 협업 문화가 프로젝트 완성도에 직접적인 영향을 준다는 사실을 절실히 느꼈습니다.`}
      />

      {/* 재사용 컴포넌트 */}
      <NextProjectsSlider excludeId="DoGo" />
    </div>
  );
};

export default DoGo;
