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
          title="LoL Project"
          imageSrc="/lol.png"
          serviceUrl="https://lol-project-livid.vercel.app/"
          githubUrl="https://github.com/YouKnowThat-Park/lol-project"
          description="롤 정보 플랫폼"
          devEnv="Next.js, TypeScript, Vercel"
          type="개인 프로젝트"
          imageWidth={400}
          imageHeight={200}
        />
      </div>

      <div className="w-full h-full px-10 py-10 mt-10 mb-10 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#2e2e2e] dark:border-neutral-700">
        <ProjectDescription
          title="개인 프로젝트 과제"
          paragraphs={[
            "데이터 웹 애플리케이션 리그 오브 레전드 데이터를 제공하는 웹 애플리케이션입니다. 챔피언 정보, 아이템 목록, 무료 로테이션 정보를 직관적으로 확인할 수 있습니다.",
          ]}
        />

        <ProjectOverview
          title="Project Overview"
          items={[
            "프로젝트명 : LOL Project",
            "한줄 설명 : 리그 오브 레전드 !",
            "기술 스택 : Next.js, TypeScript, React Query, Tailwind CSS, Riot API",
            "개발 기간 : 2024.12.09 ~ 24.12.19",
          ]}
        />

        <ProjectGoals
          goals={[
            "types 디렉토리 내 필요한 타입 정의 및 Server Actions를 활용한 챔피언, 아이템, 로테이션 데이터 Fetching 구현",
            "외부 API 호출 시 fetch 사용 및 에러 처리 로직 포함",
            "Tanstack Query를 클라이언트 컴포넌트에 적용하여 useQuery, useMutation 활용 및 상태 처리",
            "챔피언 목록 페이지는 ISR 방식,  로테이션 페이지는 CSR, 아이템 목록 페이지는 SSG 방식으로 구현",
            "글로벌 레이아웃 구성 및 네비게이션 메뉴를 통해 각 페이지 간 이동 구현",
            "의도적인 API 지연으로 로딩 시간 시뮬레이션 및 useRouter와 startTransition을 활용한 리셋/재시도 기능 구현",
            "Next.js의 <Image> 컴포넌트와 동적 import, Lazy Loading을 통해 성능 최적화",
            "Tailwind CSS를 활용한 반응형 UI 설계 및 모바일 환경 최적화",
            "TypeScript 유틸리티 타입(Partial, Pick, Omit)을 활용한 타입 최적화",
            "다크 모드 써보기",
            "아이템 업그레이드 UX 만들어보기",
          ]}
        />
      </div>

      <div>
        <Image
          src="/lolchampion.png"
          alt="챔피언 상세 페이지"
          width={1000}
          height={500}
        />
      </div>

      <div className="mt-10 mb-20">
        <Image
          src="/lolitem.png"
          alt="호로스코프 ERD"
          width={1000}
          height={500}
        />
      </div>
    </>
  );
};

export default page;
