import Image from "next/image";
import React from "react";

const LangChain = () => {
  return (
    <div className="mb-6 mx-10 rounded-md border border-neutral-300 bg-white dark:bg-[#1a1a1a] dark:border-neutral-700 px-8 py-6">
      <div className="flex flex-col justify-center items-center mt-10 mb-5">
        <Image
          src="/aichatbotstar.png"
          alt="LangChain 구조 별점"
          width={700}
          height={300}
          className="rounded border"
        />
        <h3 className="text-lg font-bold mb-2 mt-10">
          1. 기존 LangChain 구조 평가
        </h3>
        <p className="text-sm text-center mb-4">
          현재 사용 중인 LangChain 중심의 구조에 대해, 성능, 확장성, 유지보수
          측면에서 <br />
          내부 평가를 진행하였고, 보완이 필요한 지점을 정리하였습니다.
        </p>
        <p className="text-sm text-center mb-2 text-neutral-500">
          👉 만약 구조적 완성도와 사용자 편의성을 기준으로 별점을 준다면, <br />
          <strong className="text-red-500">
            현재 LangChain 단독 구조는 별점 2점 수준
          </strong>
          으로 평가됩니다.
        </p>
      </div>

      <div className="w-full mt-6">
        <h4 className="text-base font-semibold text-red-500 mb-2">🔻 단점</h4>
        <ul className="list-disc list-inside text-sm text-neutral-800 dark:text-neutral-200 space-y-1">
          <li>
            <strong>에이전트 기반 구조의 성능/비용 부담</strong> - 사용자
            질의마다 여러 번 LLM 호출이 발생하여 처리 시간이 길고 API 호출
            비용이 누적됨
          </li>
          <li>
            <strong>LangChain 종속성 문제</strong> - 패키지 업데이트 속도가 매우
            빠르며, Breaking Change가 잦아 안정적인 운영이 어려움
          </li>
          <li>
            <strong>분석 정확도 및 응답 품질의 한계</strong> - 하나의 에이전트가
            모든 처리 과정을 담당하면서, 질문 다양성에 충분히 대응하지 못함
          </li>
          <li>
            <strong>에이전트 흐름의 순차적 제한</strong> - 복수 분석 과정을
            하나의 흐름으로 유연하게 통합하기 어려움 (단일 스텝 처리 방식)
          </li>
        </ul>

        <div className="mt-6 text-sm text-neutral-700 dark:text-neutral-300">
          💬 <b>추가 설명</b>:
          <br />
          LangChain은 강력한 LLM 연결성과 유틸리티 제공이 강점이나, 구조적으로
          “1개의 에이전트가 질문 → 도구 실행 → 응답 생성”을 모두 처리하는
          구조라, 질문이 조금만 복잡해져도 응답 품질이 불안정해졌습니다.
          <br />
          따라서 Agent를 세분화하거나, LangGraph / CrewAI 기반 구조로의 전환이
          필요하다고 판단했습니다.
        </div>
      </div>
    </div>
  );
};

export default LangChain;
