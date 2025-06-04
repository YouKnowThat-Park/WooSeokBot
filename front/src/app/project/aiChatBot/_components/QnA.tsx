import React from "react";

const QnA = () => {
  return (
    <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb] dark:bg-[#2e2e2e] dark:border-neutral-700 px-8 py-6">
      <h2 className="text-xl font-semibold mb-6">Q&A</h2>

      <details className="group mb-6 transition-all rounded-md border border-neutral-300 bg-white open:bg-[#fbfbfb] dark:bg-[#1a1a1a] ">
        <summary className="cursor-pointer font-medium  px-4 py-3">
          ❔ BioChatter도 프레임워크인데 어떻게 LangChain과 같이 사용하나요?
        </summary>
        <div className="mt-3 px-4 pb-4 text-sm leading-relaxed text-black dark:text-[#fbfbfb]">
          BioChatter를 LangChain에 LLM 형태로 등록해서 사용하는 것은 맞습니다.
          <br />
          다만 메인 LLM처럼 전체 흐름을 처리하기보다는, LangChain의 Tool 또는
          LLMWrapper로 통합하여, 특정 상황에서만 선택적으로 호출되는 구조로
          구성하는 방향을 고민하고 있습니다.
          <br />
          <br />
          예를 들어, GPT가 질의 내용을 처리하던 중 해석이 어려운 생물학 전문
          영역이라고 판단되면, 해당 부분을 BioChatter에 넘겨 도메인 기반의
          정밀한 해석과 설명을 수행하는 방식입니다.
          <br />
          <br />
          👉 정리하면: BioChatter는 GPT가 어려움을 겪는 전문 영역에서 조건적으로
          동작하는 <b>도메인 특화 해석 도구</b>로써 통합합니다.
        </div>
      </details>

      <details className="group mb-6 transition-all rounded-md border border-neutral-300  bg-white open:bg-[#fbfbfb] dark:bg-[#1a1a1a] ">
        <summary className="cursor-pointer font-medium  px-4 py-3">
          ❔ BioChatter도 외부 LLM을 가져와서 써야 하나요?
        </summary>
        <div className="mt-3 px-4 pb-4 text-sm leading-relaxed text-black dark:text-[#fbfbfb]">
          네, BioChatter도 DeepSeek나 OpenAI처럼 외부 LLM을 호출하는 구조는
          맞습니다.
          <br />
          <br />
          다만 BioChatter는 생물학 도메인에 맞춰 설계된 해석 특화 LLM입니다.
          내부적으로 전문 용어 처리, 생물학 개념 인식, 논문 기반 응답 구성,
          실험적 해석 방식 등이 프롬프트 레벨에서 최적화되어 있습니다.
          <br />
          <br />
          즉, 일반 GPT나 DeepSeek 같은 범용 LLM에 비해 도메인 응답 품질과 해석
          정밀도 면에서 더 높은 수준의 아웃풋을 기대할 수 있습니다.
        </div>
      </details>

      <details className="group transition-all rounded-md border border-neutral-300  bg-white open:bg-[#fbfbfb] dark:bg-[#1a1a1a] ">
        <summary className="cursor-pointer font-medium  px-4 py-3">
          ❔ 모든 질의를 BioChatter로 처리하면 비효율적인가요?
        </summary>
        <div className="mt-3 px-4 pb-4 text-sm leading-relaxed text-black dark:text-[#fbfbfb]">
          네. 대부분의 질문이 생물학적 지식을 포함하더라도 질문의 깊이에 따라
          다르게 접근해야 한다고 생각합니다.
          <br />
          <br />
          얕고 단순한 분석 요청이라면 GPT로도 충분히 답할 수 있으며, 이 경우
          BioChatter를 사용하면 응답이 과도하게 길거나 무거워질 수 있습니다.
          <br />
          <br />
          결과적으로 사용자 입장에서는 응답 시간이 늘어나고, 불필요한 정보까지
          포함되며, 이는 만족도에 부정적 영향을 줄 수 있습니다.
        </div>
      </details>
    </div>
  );
};

export default QnA;
