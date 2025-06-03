"use client";
import React from "react";
import ProjectHero from "../../_components/ProjectHero";
import NextProjectsSlider from "../_components/NextProjectsSlider";
import ConsultingArchitecture from "./_components/ConsultingArchitecture";
import AlternativeConsultingStructure from "./_components/AlternativeConsultingStructure";
import LangChainLangGraph from "./_components/LangChainLangGraph";
import LangChainBioChatter from "./_components/LangChainBioChatter";
import LangChainCrewAi from "./_components/LangChainCrewAi";
import LangChain from "./_components/LangChain";
import QnA from "./_components/QnA";
import FrontendRefactoring from "./_components/FrontendRefactoring ";
import BackendRefactoring from "./_components/BackendRefactoring";
import LLMChatbotPlanning from "./_components/LLMChatbotPlanning";

const AiChatBot = () => {
  return (
    <div className="w-[970px] h-full mt-[100px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg [&>p]:py-2 text-center">
      <ProjectHero
        title="AiChatBot"
        imageSrc="/aichatbot.png"
        description="생물학 분석 특화 챗봇"
        devEnv="Next.js, TypeScript, LangChain, ContextAPI"
        type="개발PM"
        imageWidth={360}
        imageHeight={250}
      />
      <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#1a1a1a] dark:border-neutral-700 py-5">
        <div className="flex flex-col justify-center items-center">
          <h2>🚨 본 기획 및 설계의 저작권 및 소유권은 박우석에게 있으며,</h2>
          <p>해당 회사는 박우석 포트폴리오에 추가되는 것을 동의했습니다.</p>
          <p>
            다만 회사의 요청으로 회사명은 언급하지 못하는 점 양해 부탁드립니다.
          </p>
        </div>
      </div>

      <div className="w-full h-full mt-20 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#1a1a1a] dark:border-neutral-700 mb-2 px-5 py-5">
        <div className="flex flex-col justify-center items-center">
          <h2>🙏 회사 요구사항</h2>
          <p className=" mt-2">
            기존 LangChain 기반 챗봇을 구조적으로 고도화할 수 있도록
          </p>
          <p>
            분석 흐름, 도구 연계, 후속 제안까지 포함한 기획안을 설계해 주세요.
          </p>
        </div>
      </div>

      <LLMChatbotPlanning />

      <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#1a1a1a] dark:border-neutral-700">
        <div className="flex flex-col justify-center items-center px-20 py-5 text-center">
          <div className="flex flex-col justify-center items-center px-10 py-5">
            <p>LangChain 단독으로는 분석 흐름 설계, 후속 제안, 해석 등</p>
            <p>
              일련의 구조적 요구 사항을 완전하게 충족시키는 데 한계가 있다고
              판단됩니다.
            </p>
            <p>
              기존 LangChain 로직을 최대한 유지하되 필요한 부분만 확장하는 전략,
            </p>
            <p>
              혹은 전체 구조를 CrewAI 중심으로 재설계하는 도전적인 전략, 이 두
              가지 방향으로 구분하여 판단해보았습니다.
            </p>
          </div>
        </div>
      </div>

      <ConsultingArchitecture />

      <AlternativeConsultingStructure />

      <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb]  dark:bg-[#2e2e2e] dark:border-neutral-700">
        <h2 className="text-[20px] py-10 font-bold">📊 장단점 및 구조</h2>
        <LangChain />

        <div className="border my-10 mx-10 " />

        <LangChainCrewAi />

        <div className="border my-10 mx-10 " />

        <LangChainLangGraph />

        <div className="border my-10 mx-10 " />

        <LangChainBioChatter />
      </div>

      <QnA />

      <FrontendRefactoring />

      <BackendRefactoring />

      <NextProjectsSlider excludeId="AiChatBot" />
    </div>
  );
};

export default AiChatBot;
