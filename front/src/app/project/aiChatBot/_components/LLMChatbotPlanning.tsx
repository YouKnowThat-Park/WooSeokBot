import React from "react";

const LLMChatbotPlanning = () => {
  return (
    <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb] dark:bg-[#2e2e2e] dark:border-neutral-700">
      <div className="flex flex-col justify-center items-start px-10 py-12 text-[15px] leading-relaxed tracking-wide">
        <h2 className="text-[24px] font-bold text-center w-full mb-10">
          🧬 LLM 기반 생물학 챗봇 시스템 기획 및 기술 아키텍처 고도화
        </h2>

        {/* Section 1 */}
        <div className="w-full mb-6 p-5 rounded-md border border-neutral-400 dark:border-neutral-600 bg-white dark:bg-[#1e1e1e]">
          <h3 className="text-[17px] font-semibold text-[#3ecf8e] mb-2">
            1. 생물학 특화 LLM 기반 지능형 챗봇 시스템 설계
          </h3>
          <p className="mb-2">
            본 프로젝트는 생물학 분석 지원을 위한{" "}
            <strong>지능형 챗봇 플랫폼 구축</strong>을 목표로 시작되었습니다.
            기존 키워드 매칭 기반 챗봇의 한계를 극복하고, 자연어를 기반으로
            복잡한 분석을 수행할 수 있는 구조로 고도화했습니다.
          </p>
          <p className="mb-2">
            사용자의 질문을 <strong>LLM이 이해</strong>하고, 자동으로 적절한
            분석 도구를 매칭하며, 분석 결과에 대한{" "}
            <strong>해석 및 후속 제안까지 자동화</strong>하는 구조를
            설계했습니다.
          </p>
        </div>

        {/* Section 2 */}
        <div className="w-full mb-6 p-5 rounded-md border border-neutral-400 dark:border-neutral-600 bg-white dark:bg-[#1e1e1e]">
          <h3 className="text-[17px] font-semibold text-[#3ecf8e] mb-2">
            2. 백엔드 구조: 키워드 기반 → LLM 매칭 방식으로 전환
          </h3>
          <p className="mb-2">
            기존 백엔드는 분석 도구 호출을 <strong>키워드 일치 여부</strong>에
            의존하는 구조였기 때문에, 오타, 띄어쓰기, 다양한 문장 표현에
            유연하게 대응하지 못하는 한계가 있었습니다.
          </p>
          <p className="mb-2">
            이에 따라, 키워드 기반 매칭을 제거하고{" "}
            <strong>LLM 기반 의도 파악 + 자동 카테고리 매핑</strong> 구조로
            전환하여 사용자 표현의 다양성과 실수를 허용하는 자연스러운
            인터페이스를 구현했습니다.
          </p>
        </div>

        {/* Section 3 */}
        <div className="w-full p-5 rounded-md border border-neutral-400 dark:border-neutral-600 bg-white dark:bg-[#1e1e1e]">
          <h3 className="text-[17px] font-semibold text-[#3ecf8e] mb-2">
            3. 프론트 리팩토링 및 사용자 흐름 개선
          </h3>
          <p className="mb-2">
            프론트엔드는 유지보수성과 UX 측면에서 구조 개선이 시급한
            상태였습니다.
            <strong>Zustand 상태관리 도입</strong>,{" "}
            <strong>Custom Hook 통합</strong>,<strong>입력 흐름 단순화</strong>{" "}
            등을 통해 전반적인 코드 품질을 개선하고 사용자 경험을
            향상시켰습니다.
          </p>
          <ul className="list-disc list-inside text-sm text-neutral-800 dark:text-neutral-200 mt-2 space-y-1">
            <li>업로더 기능을 초기화면으로 이동 → 접근성과 기능 인지율 향상</li>
            <li>중복 useEffect 제거 → 공통 로직 Custom Hook으로 분리</li>
            <li>
              타이핑 효과 setInterval → requestAnimationFrame 방식으로 전환
            </li>
          </ul>
          <p className="mt-3">
            이러한 개선은 <strong>성능 최적화</strong>,{" "}
            <strong>불필요한 서버 요청 감소</strong>,
            <strong>재사용성 향상</strong> 등 다각적인 효과를 도출했습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LLMChatbotPlanning;
