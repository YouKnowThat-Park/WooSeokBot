import ProjectGoals from "@/app/_components/ProjectGoals";
import ProjectHero from "@/app/_components/ProjectHero";
import ProjectOverview from "@/app/_components/ProjectOverview";
import TeamRoles from "@/app/_components/TeamRoles";
import ProjectDescription from "@/app/project/_components/ProjectDescription";
import { GhostHouseTeamRoles } from "@/data/GhostHouseTeamRoles";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-[970px] h-full mt-[100px]  mb-[10px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg">
        <ProjectHero
          title="GhostHouse"
          imageSrc="/ghosthouse.png"
          serviceUrl="https://ghosthouse-omega.vercel.app/"
          githubUrl="https://github.com/cara656513/ghosthouse"
          description="흉가 공유 사이트"
          devEnv="Next.js, TypeScript, Vercel"
          type="팀 프로젝트"
          imageWidth={800}
          imageHeight={400}
        />
      </div>

      <div className="w-full h-full px-10 py-10 mt-10 mb-10 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#2e2e2e] dark:border-neutral-700">
        <ProjectDescription
          title="팀 프로젝트 과제"
          paragraphs={[
            "* 주의 * 갑자기 등장하는 귀신 사진이 정말 많습니다. * 주의 *",
            "지도 API를 활용한 기발한 아이디어가 없을까? 하는 생각에서 시작되었습니다.",
            "흉가를 직접 방문하여 위치를 지정 후 게시물을 올릴 수 있는 사이트를 기획, 구현하였습니다.",
          ]}
        />

        <ProjectOverview
          title="Project Overview"
          items={[
            "프로젝트명 : GhostHouse",
            "한줄 설명 : 우리 집 근처에도 흉가가?!! 본인이 알고 있는 흉가를 소개하고 공유하는 웹사이트입니다.",
            "기술 스택 : React, JavaScript, Supabase, React Query, Zustand, Styled-Component, Kakao SDK",
            "개발 기간 : 2024.11.29(금) ~ 2024.12.05(월)",
          ]}
        />

        <TeamRoles title="👥 팀 구성 및 역할" members={GhostHouseTeamRoles} />

        <ProjectGoals
          goals={[
            "Zustand를 활용해 클라이언트 상태를 전역에서 효율적으로 관리하고, 컴포넌트 간 상태 공유를 체험",
            "TanStack Query를 사용해 Supabase와의 서버 상태를 안정적으로 관리하고, 데이터 동기화 방식 이해",
            "Supabase를 연동하여 로그인/회원가입, 게시물 CRUD 기능까지 포함한 백엔드 없는 풀스택 아키텍처 구현",
            "카카오 지도 API를 활용하여 지도 위에 마커를 표시하고 사용자 상호작용을 통해 위치 기반 기능 구현",
            "react-router-dom의 중첩 라우팅과 useNavigate, useParams 등 라우팅 관련 기능을 실무 수준으로 활용",
            "Tailwind CSS를 사용하여 반응형, 일관성 있는 UI를 빠르게 구성하고 Utility-first 디자인 패턴을 익힘",
            "Custom Hook을 작성하여 비즈니스 로직을 재사용 가능하게 분리하고 유지보수성과 가독성 향상",
          ]}
        />
      </div>

      <div>
        <Image
          src="/ghosthousefigma.webp"
          alt="호로스코프 와이어프레임"
          width={1000}
          height={500}
        />
      </div>

      <div className="mt-10 mb-20">
        <Image
          src="/ghosthouseERD.webp"
          alt="호로스코프 ERD"
          width={1000}
          height={500}
        />
      </div>
    </>
  );
};

export default page;
