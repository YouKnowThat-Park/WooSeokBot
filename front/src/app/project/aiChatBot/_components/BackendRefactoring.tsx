import Image from "next/image";
import React from "react";

const BackendRefactoring = () => {
  return (
    <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb] dark:bg-[#2e2e2e] dark:border-neutral-700 px-8 py-10">
      <h2 className="text-xl font-semibold mb-6">백엔드 로직 구조 변경</h2>

      {/* 기존 구조 문제점 */}
      <details className="group mb-6 transition-all rounded-md border border-neutral-300 bg-white open:bg-[#fbfbfb] dark:bg-[#1a1a1a]">
        <summary className="cursor-pointer font-medium  px-4 py-3">
          기존 유저 흐름 (키워드 기반 분석 방식의 한계)
        </summary>
        <div className="mt-3 px-4 pb-4 text-sm leading-relaxed text-black dark:text-[#fbfbfb]">
          기존 백엔드 구조는 사용자의 요청에서 키워드 일치를 기반으로 분석
          도구를 매칭했습니다. 하지만 이 방식은 다음과 같은 한계를 갖고
          있었습니다:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>띄어쓰기 누락, 오타, 철자 오류 발생 시 분석 실패</li>
            <li>대소문자 민감 / 영어 혼용 미지원 → 유연하지 않음</li>
            <li>정확한 키워드를 기억해야 사용 가능 → 자연어 UX 훼손</li>
            <li>
              예: <code>바나나분석해줘</code>, <code>바나나ㅏ 분석</code> → 매칭
              실패
            </li>
          </ul>
          <p className="mt-4 text-sm italic text-neutral-500">
            자연어 기반 인터페이스라고 보기엔 한계가 컸던 구조입니다.
          </p>
        </div>
      </details>

      {/* 개선 방향 */}
      <details className="group transition-all rounded-md border border-neutral-300 bg-white open:bg-[#fbfbfb] dark:bg-[#1a1a1a]">
        <summary className="cursor-pointer font-medium  px-4 py-3">
          개선 방향: LLM 기반 자연어 의도 분석
        </summary>
        <div className="mt-3 px-4 pb-4 text-sm leading-relaxed text-black dark:text-[#fbfbfb]">
          기존의 키워드 매칭 방식을 폐기하고,
          <strong>LLM 기반 자연어 분석</strong> 구조로 개선했습니다.
          <br />
          <br />
          사용자가 어떤 표현으로 질문하든지, 내부적으로는 LLM이 문장을 분석하여
          적절한 <strong>분석 카테고리</strong>를 도출합니다.
          <br />이 구조는 입력이 부정확하거나 변형된 경우에도 강건하게 대응하며,
          보다 유연하고 자연스러운 챗봇 경험을 제공합니다.
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>오타 / 띄어쓰기 / 철자 오류 → 자동 보정</li>
            <li>자연어 구조 해석 → 의도 분류</li>
            <li>분석 도구 연결까지 자동화된 흐름 구성</li>
            <li>비정형 문장도 처리 가능</li>
          </ul>
          <div className="flex flex-col justify-center items-center gap-4 mt-4">
            <p className="text-xs text-neutral-500 mt-2">
              ※ 개선된 LLM 기반 백엔드 흐름 예시
            </p>
            <Image
              src="/aichatbotbackend.png"
              alt="LLM 기반 백엔드 개선 구조"
              width={400}
              height={300}
            />
          </div>
        </div>
      </details>
    </div>
  );
};

export default BackendRefactoring;
