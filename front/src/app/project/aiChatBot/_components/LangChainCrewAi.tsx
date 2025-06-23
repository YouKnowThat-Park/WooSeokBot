import Image from "next/image";
import React from "react";

const LangChainCrewAi = () => {
  return (
    <div className="px-8 py-6 mt-10 mb-10  mx-10 border border-neutral-300 rounded-md bg-white dark:bg-[#1a1a1a] dark:border-neutral-700 dark:text-[#fbfbfb]">
      <h2 className="text-xl font-semibold mb-6 text-center">
        2. CrewAI + LangChain + BioChatter 연결
      </h2>

      <p className="mb-4 leading-relaxed text-sm">
        CrewAI 기반 구조에 LangChain과 BioChatter를 함께 도입하면, 분석 실행
        도구 활용 + 도메인 특화 해석 + 전략 설계까지 유기적으로 연결되는
        고도화된 생물학 분석 파이프라인을 구현할 수 있습니다.
      </p>

      <div className="flex justify-center mb-6">
        <Image
          src="/aichatbotCrewAiuserflow.webp"
          alt="AI 챗봇 유저 플로우"
          width={500}
          height={300}
          className="border rounded-md"
        />
      </div>

      {/* 장점 */}
      <div className="mb-8">
        <h3 className="text-base font-semibold text-blue-600 mb-2">🔷 장점</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>
            각 에이전트별 LLM 분리 적용 가능 → LangChain으로 도구 실행,
            BioChatter로 해석 및 전략 수행
          </li>
          <li>역할 기반 구조로 분업화 → 다단계 분석에 최적</li>
          <li>CrewAI의 병렬 실행 및 협업 구조 → 복잡한 흐름 자동화 가능</li>
          <li>LangChain Tool과 BioChatter 해석이 자연스럽게 결합됨</li>
          <li>기존 LangChain 코드와 높은 호환성 → 도입 부담 적음</li>
          <li>전문성과 해석 정확도까지 고려한 지능형 분석 챗봇 구조</li>
        </ul>
      </div>

      {/* 단점 */}
      <div className="mb-8">
        <h3 className="text-base font-semibold text-red-500 mb-2">🔻 단점</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>CrewAI는 초기 프레임워크 → 안정성 및 실무 적용은 검토 필요</li>
          <li>에이전트 간 상태 공유 및 협업 설계 복잡</li>
          <li>BioChatter API 의존성 → 사용량 증가 시 비용/속도 리스크</li>
          <li>에이전트별 프롬프트 설계 필요 → 초기 설계 비용 상승</li>
        </ul>
      </div>

      {/* 추천 이유 */}
      <div>
        <h3 className="text-base font-semibold text-green-600 mb-3">
          ✅ 그럼에도 추가하면 좋은 이유
        </h3>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            각 기능별로 최적화된 LLM을 에이전트 단위로 적용할 수 있어 복잡한
            분석 파이프라인을 효율적으로 자동화할 수 있음
          </li>
          <li>
            분석 실행(LangChain)과 해석 및 전략 제시(BioChatter)를 분리하여 응답
            정확도와 전문성 확보
          </li>
          <li>
            기존 LangChain 코드 유지하면서 CrewAI만 확장 가능 → 구조 변경 부담
            없음
          </li>
          <li>
            분석 결과 해석 및 후속 제안까지 연결되므로 챗봇이 전문 분석 도구로
            진화 가능
          </li>
          <li>
            장기적으로 BioChatter를 자체 LLM으로 대체하거나 파인튜닝할 수 있어
            미래 확장성도 뛰어남
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LangChainCrewAi;
