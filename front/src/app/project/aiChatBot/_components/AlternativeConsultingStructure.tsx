import React from "react";

const AlternativeConsultingStructure = () => {
  return (
    <>
      <div className="w-full h-full mt-10  border border-neutral-300 dark:text-[#fbfbfb] dark:bg-[#2e2e2e] dark:border-neutral-700">
        <h3 className="text-2xl font-bold dark:text-[#fbfbfb] my-20 text-center">
          4. 차선 컨설팅 구조
        </h3>
        <div className="space-y-10 mb-20 px-4 md:px-10">
          {/* LangGraph Section */}
          <div className="rounded-md border border-neutral-300 bg-white dark:bg-[#1a1a1a] dark:border-neutral-700 p-6 md:p-10">
            <h4 className="text-xl font-semibold text-[#3ecf8e] mb-3 text-center">
              ✅ LangChain + LangGraph
            </h4>
            <p className="text-sm mb-2 text-neutral-700 dark:text-neutral-300">
              현재 사용 중인 LangChain 구조는 Chain과 Agent를 통해 프롬프트 기반
              분석 흐름을 유연하게 처리할 수 있는 장점이 있습니다. 하지만, 분석
              흐름이 복잡해지고 조건 분기나 반복 처리가 필요한 단계로 진입할
              경우 유지보수 및 확장성 측면에서 명확한 한계가 존재합니다.
            </p>
            <p className="text-sm mb-2 text-neutral-700 dark:text-neutral-300">
              LangGraph는 LangChain의 상위 프레임워크 개념으로, 복잡한 분석
              흐름을 상태 기반(State Machine) 또는 그래프(DAG) 형태로 구조화할
              수 있습니다. 이를 통해 의도 파악 → 파라미터 추출 → 도구 실행 →
              해석 및 후속 제안이라는 흐름을 명확하게 구성하고, 조건 분기 및
              병렬 실행까지 포함하는 정교한 분석 파이프라인 설계가 가능합니다.
            </p>

            <ul className="list-disc list-inside text-sm text-neutral-800 dark:text-neutral-200 mt-4 mb-6">
              <li>상태 전이 기반으로 각 단계를 명시적으로 정의 가능</li>
              <li>조건 분기, 루프, 병렬 실행 등 고급 흐름 처리 가능</li>
              <li>복잡한 플로우의 가독성과 디버깅 용이성 향상</li>
              <li>반복 로직은 서브그래프로 모듈화하여 재사용 가능</li>
            </ul>

            <p className="text-green-600 font-medium mb-2">
              ✅ 실제 테스트 및 기대 효과
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              실무 설계 전 유사 흐름을 LangGraph로 시뮬레이션하여 조건 분기,
              사용자 재질문, 도구 대체 전략 등이 명확히 구현 가능함을
              확인했습니다. 분석 실패 시 fallback 전략, 유효성 검증 로직을
              시각적으로 설계할 수 있었고, 복잡도 증가에 유연한 구조로 판단되어
              차선 구조 중 최우선 고려안으로 평가하였습니다.
            </p>
          </div>

          {/* BioChatter Section */}
          <div className="rounded-md border border-neutral-300 bg-white dark:bg-[#1a1a1a] dark:border-neutral-700 p-6 md:p-10">
            <h4 className="text-xl font-semibold text-[#3ecf8e] mb-3 text-center">
              ✅ LangChain + BioChatter
            </h4>
            <p className="text-sm mb-2 text-neutral-700 dark:text-neutral-300">
              현재 LangChain은 GPT 계열 LLM과 연동하여 다양한 분석을 수행할 수
              있지만, 생물학 도메인에 특화된 고난이도 질문에서는 해석 정확도가
              떨어지거나 잘못된 정보를 생성하는 문제가 발생할 수 있습니다.
            </p>
            <p className="text-sm mb-2 text-neutral-700 dark:text-neutral-300">
              BioChatter는 생물학 전문 LLM으로 유전자, 단백질, 약물 상호작용에
              대한 고도화된 해석력을 보유하고 있습니다. 이를 LangChain의 Tool
              또는 LLMWrapper로 연동할 수 있으며, 기존 구조에 큰 수정 없이 도입
              가능합니다.
            </p>

            <ul className="list-disc list-inside text-sm text-neutral-800 dark:text-neutral-200 mt-4 mb-6">
              <li>PubMed, KEGG, UniProt 기반 질문에 높은 정확도로 대응</li>
              <li>좁고 깊은 지식 구조에 최적화되어 일관성 있는 해석 제공</li>
              <li>GPT ↔ BioChatter 전환을 LLMRouter로 유연하게 구성 가능</li>
              <li>도메인별 역할별 프롬프트 분기 설계로 에이전트 분화 가능</li>
            </ul>

            <p className="text-green-600 font-medium mb-2">
              ✅ 실제 검토 및 구조 제안
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              도메인 질의 테스트 결과, GPT는 개체명 혼동 및 모호한 요약이 잦은
              반면 BioChatter는 전문 DB에 기반한 정확한 분석 결과를
              제공했습니다. PM으로서 해당 구조의 도입 효과, 안정성, 추후 LLM
              교체 확장성까지 고려하여 하이브리드 구조로 리팩토링 방향을
              제안하고 실제 구조 설계에 반영한 상태입니다.
            </p>
          </div>

          {/* Conclusion Section */}
          <div className="rounded-md border border-neutral-300 bg-white dark:bg-[#1a1a1a] dark:border-neutral-700 p-6 md:p-10">
            <h4 className="text-xl font-semibold text-[#3ecf8e] mb-3 text-center">
              ✅ 종합 결론
            </h4>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 mb-2">
              LangGraph는 복잡한 분석 파이프라인을 유연하게 시각화하고
              유지보수할 수 있는 기반을 제공하며, BioChatter는 생물학 도메인에
              필요한 정밀 해석 능력을 탑재한 전략적 LLM입니다.
            </p>
            <p className="text-sm text-neutral-800 dark:text-neutral-300">
              두 구조 모두 LangChain과의 호환성이 뛰어나며, 기획 단계부터 도입
              타당성 검토 → 구조 설계 → 실제 적용 가능성 테스트까지 직접
              주도하였습니다. 본 제안은 개발 PM으로서 실효성을 기반으로 구성한
              전략적 대안 구조입니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlternativeConsultingStructure;
