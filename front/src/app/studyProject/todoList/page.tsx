import ProjectGoals from "@/app/_components/ProjectGoals";
import ProjectHero from "@/app/_components/ProjectHero";
import ProjectOverview from "@/app/_components/ProjectOverview";
import ProjectDescription from "@/app/project/_components/ProjectDescription";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-[970px] h-full mt-[100px]  mb-[10px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg">
        <ProjectHero
          title="MBTI"
          imageSrc="/todoList.png"
          serviceUrl="https://recoil-six.vercel.app/"
          githubUrl="https://github.com/YouKnowThat-Park/Recoil"
          description="일정 정리 플랫폼"
          devEnv="Next.js, TypeScript, Vercel"
          type="개인 프로젝트"
          imageWidth={300}
          imageHeight={200}
        />
      </div>

      <div className="w-full h-full px-10 py-10 mt-10 mb-10 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#2e2e2e] dark:border-neutral-700">
        <ProjectDescription
          title="개인 프로젝트 과제"
          paragraphs={[
            "이 프로젝트는 Recoil을 중심으로 상태 관리 학습을 위한 연습용 프로젝트입니다. 기능별로 단계를 나누어 점진적으로 구현하며, Recoil의 다양한 기능을 체험하는 것을 목표로 합니다.",
          ]}
        />

        <ProjectOverview
          title="Project Overview"
          items={[
            "프로젝트명 : To Do List",
            "한줄 설명 : 투 두 리스트!",
            "기술 스택 : Next.js, TypeScript, React Query, Tailwind CSS, Recoil",
            "개발 기간 : 2024.05.01 ~ 2024.05.06",
          ]}
        />

        <ProjectGoals
          goals={[
            "Recoil의 핵심 개념 (atom, selector, selectorFamily 등) 이해",
            "전역 상태 관리 구조의 기초 다지기",
            "Zustand, Redux 등과의 비교 학습 기반 마련",
            "기본 To-Do 기능 구현: 할 일 추가 / 삭제 / 완료 처리",
            "Recoil을 활용한 상태 관리 및 로컬 스토리지 연동으로 페이지 새로고침 시에도 데이터 유지",
            "모달 열림/닫힘 상태를 Recoil로 전역 관리하여 여러 컴포넌트에서 공유",
            "요일 필터링 상태를 Recoil로 관리하고 버튼 클릭 시 해당 요일 기준으로 할 일 필터 적용",
            "검색 기능을 atom과 selector로 구현해 입력과 동시에 실시간 필터링 처리 (요일 필터는 무시됨)",
          ]}
        />
      </div>

      <div className="mt-10 mb-20 flex gap-10 mx-auto">
        <Image
          src="/todolist1.webp"
          alt="챔피언 상세 페이지"
          width={460}
          height={100}
        />
        <Image
          src="/todolist2.webp"
          alt="호로스코프 ERD"
          width={460}
          height={100}
        />
      </div>
    </>
  );
};

export default page;
