import Image from "next/image";
import React from "react";

const LangChainBioChatter = () => {
  return (
    <div className="mb-6 mx-10 rounded-md border border-neutral-300 bg-white dark:bg-[#1a1a1a]">
      <div className="flex flex-col justify-center items-center px-10 py-8">
        <h3 className="text-xl font-semibold text-center mb-4">
          3. LangChain + BioChatter 연결
        </h3>
        <p className="text-sm text-center text-neutral-700 dark:text-neutral-300 mb-2 leading-relaxed">
          현재 LangChain은 다양한 Tool과 LLM을 유연하게 연결할 수 있는 구조적
          장점이 있지만, 일반적인 GPT 계열 LLM은 생물학 도메인 질문에 있어
          정확도와 전문성 면에서 한계를 보입니다.
          <br />
          이를 보완하기 위해 <strong>BioChatter</strong>와 같은 생물학 특화
          LLM을 LangChain에
          <span className="text-green-600 font-medium">
            {" "}
            Tool 또는 LLMWrapper
          </span>{" "}
          형태로 연동하는 방식은 매우 효과적이며,
          <br />
          분석 응답의 신뢰성과 반복된 전문 질의 대응 측면에서 강점을 가집니다.
        </p>

        <Image
          src="/aichatbotBioChatter.png"
          alt="바이오채터 유저플로우"
          width={300}
          height={300}
          className="my-5 border rounded-md"
        />

        <div className="w-full mt-4">
          <h4 className="text-[16px] font-semibold text-green-600 mb-2">
            🔎 장점
          </h4>
          <ul className="list-disc list-inside text-sm space-y-2 dark:text-neutral-200">
            <li>
              <strong>도메인 특화 응답 품질 향상:</strong> GPT보다 유전자,
              단백질, 약물-표적 상호작용 등 생물학적 질의에 대해 더{" "}
              <strong>정확하고 신뢰성 높은 응답</strong>을 제공합니다.
            </li>
            <li>
              <strong>좁고 깊은 질문에 특화:</strong> 생물학 중심으로 사전학습된
              모델이라, 복잡한 용어나 논문 기반의 질문에 대해 정밀한 분석과
              설명이 가능합니다.
            </li>
            <li>
              <strong>LangChain 구조와의 호환성 우수:</strong> 기존 LangChain의
              Tool, LLMRouter, MultiPromptChain 등과 통합이 자연스럽고, 구조
              수정 없이 도입이 가능합니다.
            </li>
            <li>
              <strong>전환 전략 및 확장성 확보:</strong> GPT 기반 LLM 한계
              보완을 위해 BioChatter를 도입하고, 추후 자체 LLM으로 전환할 수
              있는 단계적 확장 전략에 적합합니다.
            </li>
          </ul>
        </div>

        <div className="w-full mt-6">
          <h4 className="text-[16px] font-semibold text-red-500 mb-2">
            ⚠️ 단점
          </h4>
          <ul className="list-disc list-inside text-sm space-y-2 dark:text-neutral-200">
            <li>
              <strong>외부 API 의존성:</strong> SaaS 형태일 경우 속도 지연,
              사용량 제한, 요금 정책 등의 리스크가 있습니다. SLA나 상업적 사용
              제약도 고려해야 합니다.
            </li>
            <li>
              <strong>Prompt 설계 부담:</strong> 범용 LLM보다 프롬프트 민감도가
              높아, 각 역할에 맞는 세분화된 설계가 필요합니다.
            </li>
            <li>
              <strong>기능 제한 가능성:</strong> API 방식이라 LangChain의 Memory
              구조나 일부 커스터마이징 기능과의 호환성이 떨어질 수 있습니다.
            </li>
            <li>
              <strong>모델 응답 속도:</strong> GPT 대비 응답이 느리거나 형식이
              달라질 수 있어, 구조적 대응이 필요합니다.
            </li>
          </ul>
        </div>

        <div className="w-full mt-8">
          <h4 className="text-[16px] font-semibold text-blue-500 mb-2">
            💡 그럼에도 도입이 유효한 이유
          </h4>
          <ul className="list-disc list-inside text-sm space-y-2 dark:text-neutral-200">
            <li>
              플랫폼의 응답 품질을 눈에 띄게 향상시키며, 사용자 신뢰와 전문성
              측면에서 브랜드 가치 상승에 기여합니다.
            </li>
            <li>
              기존 LangChain 코드와 충돌 없이{" "}
              <strong>LLM만 선택적으로 교체</strong>할 수 있어 개발 부담이
              적습니다.
            </li>
            <li>
              GPT가 종종 범하는 "그럴듯하지만 틀린" 응답 가능성을 실질적으로
              줄일 수 있습니다.
            </li>
            <li>
              BioChatter 도입은 <strong>단기 성능 확보와 중장기 확장</strong>
              이라는 두 마리 토끼를 동시에 잡을 수 있는 전략입니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LangChainBioChatter;
