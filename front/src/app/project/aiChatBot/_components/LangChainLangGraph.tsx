import Image from "next/image";
import React from "react";

const LangChainLangGraph = () => {
  return (
    <div className="mb-6 mx-10 rounded-md border border-neutral-300 bg-white dark:bg-[#1a1a1a] dark:border-neutral-700 px-8 py-6">
      <div className="flex flex-col justify-center items-center mt-10 mb-5">
        <h3 className="text-lg font-bold mb-2">
          3. LangChain + LangGraph 구조 통합
        </h3>
        <p className="text-sm text-center mb-4">
          LangGraph는 LangChain 기반 구조에 상태 전이 기반 제어 흐름을 더한
          워크플로우 프레임워크입니다. <br />
          기존의 단일 분석 흐름에서 벗어나, 조건 분기 / 병렬 실행 / 후속 처리
          등을 구조적으로 설계할 수 있습니다.
        </p>

        <Image
          src="/aichatbotGragpuserflow.webp"
          alt="LangGraph 구조도"
          width={700}
          height={300}
          className="rounded border"
        />

        <div className="w-full mt-6">
          <p className="text-base font-semibold text-[#3ecf8e] mb-2">🔷 장점</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              각 분석 단계를 명확히 상태(State)로 구분하여 흐름을 시각적으로
              설계 가능
            </li>
            <li>
              조건 분기, 실패 처리, 병렬 실행 등을 코드가 아닌 상태 기계
              기반으로 표현
            </li>
            <li>
              LangChain의 Agent/Chain 구조를 상위 추상화로 감싸며 복잡도 제어
            </li>
            <li>
              반복 로직을 서브그래프로 모듈화 → 대형 워크플로우 확장에 유리
            </li>
            <li>흐름이 눈에 보이므로 협업 시 설계 의도 전달 및 디버깅 용이</li>
          </ul>

          <p className="text-base font-semibold text-red-500 mt-6 mb-2">
            🔻 단점
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>상태 전이 기반 프레임워크라 진입 장벽이 높고 러닝커브 존재</li>
            <li>
              복잡한 흐름일수록 사전 설계에 많은 시간 필요 (다이어그램 기반 정의
              권장)
            </li>
            <li>
              시각화/디버깅 도구는 아직 미성숙 (LangGraph Studio 프리뷰 단계)
            </li>
          </ul>

          <h4 className="text-base font-semibold mt-8 mb-2 text-[#3ecf8e]">
            🔻 그럼에도 추가하면 좋은 이유
          </h4>
          <ul className="list-disc list-inside text-sm flex flex-col gap-2">
            <li>
              지금은 단일 분석 흐름이지만, 추후에는 다단계 분석, 조건 분기, 결과
              기반 후속 추천 등 복잡한 흐름이 필연적
            </li>
            <li>
              각 기능 및 해석 단계를 노드로 분리하여 좁고 깊은 전문 분석 구조에
              최적
            </li>
            <li>
              GPT 또는 BioChatter를 활용한 분석 흐름을 선택적으로 라우팅 가능
            </li>
            <li>
              결과 기반 자동 분석 제안 흐름 구성 등 챗봇의 분석 전략 고도화 가능
            </li>
            <li>
              LangChain을 유지하면서 LangGraph만 확장적으로 도입 가능 → 안정성
              확보
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LangChainLangGraph;
