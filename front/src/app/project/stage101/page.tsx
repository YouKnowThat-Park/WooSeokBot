"use client";

import React from "react";
import PerformanceSection from "../_components/Performance";
import ProjectHero from "../../_components/ProjectHero";
import ProjectRetrospective from "../_components/ProjectRetrospective";
import NextProjectsSlider from "@/app/_components/NextProjectsSlider";
import UserFlowSection from "../_components/UserFlowSection";
import TechStackTable from "../_components/TechStackTable";
import { StageTechItems } from "@/data/StageTechItems";
import ProjectDescription from "../_components/ProjectDescription";
import ProjectOverview from "../../_components/ProjectOverview";
import TeamRoles from "../../_components/TeamRoles";
import { stage101Performance } from "@/data/stage101Performance";
import ProjectDetails from "../_components/ProjectDetails";
import { Stage101Details } from "@/data/stage101Details";
import { StageTeam } from "@/data/StageTeamRoles";
import ProjectGoals from "../../_components/ProjectGoals";

const Stage101 = () => {
  return (
    <div className="w-[970px] h-full mt-[100px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg">
      {/* 재사용 컴포넌트 */}
      <ProjectHero
        title="STAGE_101"
        imageSrc="/stage101.webp"
        serviceUrl="https://www.stage101.shop/"
        githubUrl="https://github.com/YouKnowThat-Park/STAGE_101"
        description="소극장 예약 페이지"
        devEnv="Next.js, TypeScript, FastAPI, AWS"
        type="개인 프로젝트"
        imageWidth={920}
        imageHeight={200}
      />

      <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#2e2e2e] dark:border-neutral-700">
        <ProjectDescription
          title='"One space. One moment. Infinite possibilities."'
          paragraphs={[
            "STAGE_101은 기획부터 개발, 디자인까지 혼자서 진행한 풀스택 개인 프로젝트입니다.",
            "평소 영화 감상과 평론을 즐기던 취향에서 출발해,",
            "소극장 기반 영화 예약 플랫폼이라는 아이디어로 발전하게 되었고",
            "단순히 상영작 정보를 보여주는 것이 아니라,",
            "날짜별 예매가 가능한 소극장 조회부터 티켓 결제까지 실제 사용자 흐름을 고려한 구조로 설계·구현했습니다.",
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
              "개발 기간 : 10주 정도 진행 되었습니다. / 리펙터링 기간 : 약 3주",
            ]}
          />
          <TeamRoles title="👥 팀 구성 및 역할" members={StageTeam} />
          <ProjectGoals
            goals={[
              "다양한 기능을 직접 구현하며 기술 스펙트럼을 확장 시키기 위함",
              "실제 서비스처럼 유저 흐름이 완성된 플랫폼을 목표",
              "단순히 개발 만의 목적이 아닌 기획&설계 관점에서도 비지니스 서비스 극대화",
              "사용자의 경험과 동선을 중심에 두고 기능을 설계",
              "리펙터링 목표 : FastAPI & AWS 사용 및 공부",
            ]}
          />{" "}
        </div>

        {/* 재사용 컴포넌트 */}
        <UserFlowSection
          images={[
            { src: "/stage101user1.webp", alt: "유저 플로우 왼쪽", width: 300 },
            {
              src: "/stage101user2.webp",
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

      <PerformanceSection
        title="Performance"
        performanceItems={stage101Performance}
      />

      <ProjectDetails
        title="Project Details"
        sections={Stage101Details}
        imageSize={{ width: 400, height: 200 }}
      />

      {/* 재사용 컴포넌트 */}
      <ProjectRetrospective
        learned={`이번 리팩토링 프로젝트를 통해 단순히 기능을 구현하는 수준을 넘어, 
서비스 전체의 구조와 동작 원리를 스스로 설계하며 개발하는 경험을 할 수 있었습니다. 

기존에는 Supabase·Vercel·Django처럼 기본적인 구조가 이미 갖춰진 환경에서 개발을 진행해 
플랫폼이 제공하는 틀 안에서 필요한 부분만 채워 넣으면 되었지만,  
FastAPI  + AWS 인프라를 직접 구성하면서는 모든 요소를 제가 직접 설계해야 했습니다.

라우팅, 데이터 흐름, 인증 구조, 배포 방식, 로드밸런싱까지  
하나하나 스스로 선택하고 구축하면서 “왜 이런 구조가 필요한가”를 근본적으로 고민할 수 있었고,  
이 과정에서 백엔드와 인프라에 대한 이해도가 크게 높아졌습니다.  
특히 문제가 발생했을 때 원인을 프레임워크가 아니라 내가 설계한 구조 자체에서 찾아야 하는 상황을 겪으며  
서비스 전체를 바라보는 시야가 넓어진 것을 느꼈습니다.`}
        regret={`이번 프로젝트에서 가장 아쉬웠던 부분은 기존 Supabase 기반 구조를 FastAPI와 PostgreSQL로 이전하는 과정에서,
초기 설계의 중요성을 크게 체감하게 된 점입니다. 이전 구조는 급하게 구현된 테이블 스키마와 일관성이 부족한 API 구조가 많아
FastAPI 기반으로 변환하는 과정에서 "왜 이런 방식으로 구현했지?"라는 고민을 수없이 하게 되었고,
이를 수정하는 데 예상보다 많은 시간이 들었습니다.

이 경험을 통해 백엔드 기술을 무엇으로 사용하든, 결국 초기에 데이터 모델과 API 흐름을 얼마나 탄탄하게 잡아두는지가
프로젝트 전체의 유지 보수성과 확장성을 좌우한다는 것을 실감했습니다.  
다음 프로젝트에서는 ERD 설계와 데이터 흐름 정의를 먼저 명확히 하고, 구조적으로 일관된 설계를 기반으로 개발을 진행해
중간에 불필요한 리팩토링이 반복되지 않도록 더 체계적으로 접근하려고 합니다.`}
      />

      {/* 재사용 컴포넌트 */}
      <NextProjectsSlider excludeId="Stage101" />
    </div>
  );
};

export default Stage101;
