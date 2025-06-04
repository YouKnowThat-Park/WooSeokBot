import React from "react";

const ConsultingArchitecture = () => {
  return (
    <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb] dark:bg-[#2e2e2e] dark:border-neutral-700">
      <div className="flex flex-col justify-center items-start px-10 py-12 text-[15px] leading-relaxed tracking-wide space-y-10">
        <h2 className="text-[24px] font-bold text-center w-full mb-6 my-10">
          💡 컨설팅 제안 구조
        </h2>

        {/* CrewAI + LangChain Section */}
        <div className="p-6 rounded-md border border-neutral-400 dark:border-neutral-600 bg-white dark:bg-[#1e1e1e] space-y-3">
          <h3 className="text-[18px] font-semibold text-[#3ecf8e]">
            CrewAI + LangChain 구조
          </h3>
          <p>
            CrewAI는 에이전트 지향 구조를 기반으로 복잡한 분석 프로세스를
            분할하고 실행할 수 있으며, 여기에 LangChain의 강력한 Tool 기능을
            연동함으로써 분석 실행을 위한 외부 API 활용이나 데이터 검색 기능을
            효과적으로 결합할 수 있습니다.
          </p>
          <p>예를 들어, 각 에이전트에 다음과 같은 역할 분리가 가능합니다:</p>
          <ul className="list-disc list-inside ml-4">
            <li>분석 에이전트: LangChain Tool (예: PubMed API)로 분석 수행</li>
            <li>해석 에이전트: 이전 분석 내용을 바탕으로 생물학적 의미 해석</li>
            <li>전략 에이전트: 결과를 바탕으로 후속 분석 제안 및 방향 제시</li>
          </ul>
          <p>
            각 에이전트가 독립적으로 구성되며, 역할에 맞는 goal과 backstory를
            부여받기 때문에 분석의 흐름 자체가 하나의 협업적 프로세스로
            자동화됩니다.
          </p>
          <p>
            CrewAI는 순차/병렬 실행, 결과 공유, 메모리 기반 응답 등 구조적
            확장을 지원하고 있으며, &quot분석 → 해석 → 제안&quot이라는 유기적인
            파이프라인을 자연스럽게 구성할 수 있습니다.
          </p>
          <p>
            특히 LangChain의 Tool들은 CrewAI 에이전트의 tools 속성으로 손쉽게
            적용 가능하여, 기존의 RAG 구조, 검색 시스템, 크롤링 툴, 문서 QA 등을
            그대로 이식할 수 있습니다.
          </p>
          <p className="text-green-600 font-medium">
            👉 결과적으로 이 전략은 챗봇이 단순한 대화형 도우미를 넘어, 전문적인
            생물학 분석 전문가 그룹처럼 기능할 수 있는 기반을 마련해줍니다.
          </p>
        </div>

        {/* CrewAI + BioChatter Section */}
        <div className="p-6 rounded-md border border-neutral-400 dark:border-neutral-600 bg-white dark:bg-[#1e1e1e] space-y-3">
          <h3 className="text-[18px] font-semibold text-[#3ecf8e]">
            CrewAI + BioChatter 구조
          </h3>
          <p>
            앞선 구조에 도메인 전문성을 극대화하기 위한 선택으로, BioChatter와
            같은 생물학 특화 LLM을 각 에이전트의 언어모델로 직접 연동하는 방식도
            고려할 수 있습니다.
          </p>
          <p>
            이 경우, 분석 에이전트, 해석 에이전트, 전략 에이전트 각각이
            BioChatter 기반으로 작동하게 되며, 기존 GPT 계열 모델에 비해 훨씬 더
            정확하고 깊이 있는 응답을 생성할 수 있습니다.
          </p>
          <p>예를 들어 다음과 같은 역할이 가능합니다:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              분석자는 유전자 및 단백질 관련 데이터에 대한 정확한 기능 분석 수행
            </li>
            <li>해석자는 해당 분석이 어떤 생물학적 의미를 갖는지 정리</li>
            <li>전략가는 분석 결과의 임상적/연구적 시사점을 제시</li>
          </ul>
          <p>
            각 에이전트는 동일한 BioChatter API를 기반으로 동작하지만, 역할에
            따라 프롬프트 설계가 달라지므로 결과물도 기능에 최적화된 형태로
            도출됩니다.
          </p>
          <p>
            이 구조는 향후 자체 LLM을 도입하거나 파인튜닝할 경우에도 손쉽게
            연동할 수 있으며, 에이전트 단위로 LLM을 교체하거나 실험하기에도
            용이합니다.
          </p>
        </div>

        {/* Final Summary Section */}
        <div className="p-6 rounded-md border border-neutral-400 dark:border-neutral-600 bg-white dark:bg-[#1e1e1e] space-y-3">
          <h3 className="text-[17px] font-semibold text-[#3ecf8e]">
            ✅ PM 관점에서의 요약 및 기대 효과
          </h3>
          <p>
            기존에는 하나의 에이전트가 입력 처리, 분석 실행, 결과 출력 등 모든
            기능을 전담해야 했습니다. 이처럼 과도한 책임 집중은 처리 부하를
            키우고, 분석 정확도 및 응답 품질을 떨어뜨릴 수 있고
          </p>
          <p>
            실제 기획 및 설계에 앞서 진행한 테스트에서도 이러한 결과를 확인할 수
            있었습니다.
          </p>
          <p>
            반면 CrewAI 기반 구조에서는 기능을 명확히 분리하여 각 에이전트를
            최적화할 수 있으므로 챗봇의 성능, 유지보수성, 확장성 모두에서 큰
            개선 효과를 기대할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultingArchitecture;
