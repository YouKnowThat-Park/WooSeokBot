"use client";

import Image from "next/image";
import React, { useState } from "react";

const workStyles = [
  {
    title: "사용자의 흐름에 맞춘 UI/UX 설계",
    question:
      "(DoGo)팀원 김 :\n 우석님, 왜 예약하기 버튼이 카드랑 모달 양쪽에 있는 건가요? 밖에만 있어도 되는 거 아닌가요?",
    answer:
      "박우석 : 많은 사용자가 여러 호텔을 반복해서 비교합니다. 예를 들어 A호텔의 B객실을 봤다가, C호텔의 A객실을 본 뒤 다시 A호텔의 B객실로 돌아오는 식이죠.\n 이때 어떤 사용자는 상세 정보를 보고 바로 예약하고 싶어하고, 어떤 사용자는 카드를 보고 다시 예약하려 할 수 있습니다. 만약 버튼이 모달에만 있다면, 예약하려고 할 때마다 다시 모달을 열어야 하는 번거로움이 생깁니다.",
  },
  {
    title: "챗봇 자연어 고도화",
    question:
      "A 회사 개발팀장 :\n기존 키워드 기반 분기가 보편적인 AI 같은데, 굳이 자연어 기반 분기로 바꿔야 하는 이유가 뭔가요?",
    answer:
      "박우석 :\n 키워드 기반은 입력이 조금만 달라도 인식이 어렵습니다. 예: '바나나분석 해줘', '바나나ㅏ 분석'처럼 오타 하나로도 의도가 누락되죠. 이런 방식은 UX를 해칠 뿐 아니라 챗봇 본연의 목적성도 잃게 됩니다.\n 자연어 분기는 사용자의 표현을 유연하게 해석합니다. GPT처럼 철자가 틀려도 의도를 파악하고, 가장 적절한 분기로 연결하는 구조가 필요합니다.",
  },
  {
    title: "직관적 파일 분석 기능 배치",
    question:
      "A 회사 개발팀장:\n왜 기존 키워드 입력 방식에서 벗어나, 초기 화면에 업로더를 노출시키는 방식으로 바꿔야 하나요?",
    answer:
      "박우석:\n현재는 키워드 입력 전까지 파일 분석 기능이 보이지 않고, 반복 분석 시마다 키워드 입력과 업로더 열기를 반복해야 해 UX 흐름이 끊기고 피로도가 높습니다.\n업로더를 초기 화면에 고정하면 진입 즉시 기능을 인지하고, 반복 분석도 빠르게 이어갈 수 있습니다. 이는 단순 UI 개선을 넘어, 핵심 기능 전달력을 높이는 전략입니다.",
  },
];

const TopWorkStyleSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % workStyles.length);
  };

  const getCardStyle = (index: number) => {
    const position =
      (index - currentIndex + workStyles.length) % workStyles.length;

    switch (position) {
      case 0:
        return "z-20 scale-100 rotate-0 translate-x-0";
      case 1:
        return "z-10 scale-95 rotate-6 translate-x-[120px] translate-y-[20px]";
      case 2:
        return "z-0 scale-90 rotate-12 translate-x-[180px] translate-y-[40px]";
      default:
        return "hidden";
    }
  };

  return (
    <section className="w-full px-6 py-16 bg-white dark:bg-[#111111] text-black dark:text-white flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full max-w-[1200px]">
        {/* 왼쪽 소개 */}
        <div className="md:w-2/5 text-left space-y-4 mt-28 ml-2">
          <h3 className="text-xl font-semibold mb-2">사용자 중심</h3>
          <p className="text-sm text-gray-700 dark:text-neutral-300 leading-relaxed">
            실제 사용자의 흐름과 비즈니스 목적을 동시에 고려하여 기능을 설계하고
            구현합니다. 기술에 안주하지 않고, 늘 더 나은 방식과 구조를 고민하며
            성장하고자 합니다.
          </p>
        </div>

        {/* 오른쪽 카드 */}
        <div className="md:w-3/5 relative h-[420px] flex items-center justify-center">
          {workStyles.map((style, index) => {
            const position =
              (index - currentIndex + workStyles.length) % workStyles.length;

            const isFront = position === 0;

            return (
              <div
                key={index}
                onClick={nextCard}
                className={`absolute transition-all border duration-500 ease-in-out w-[300px] h-[385px] rounded-xl shadow-xl py-2 px-4 whitespace-pre-wrap cursor-pointer
        ${getCardStyle(index)} 
        ${isFront ? "hover:scale-[1.05]" : ""}
      bg-white dark:bg-[#1f1f1f]`}
              >
                <h4 className="text-lg font-bold 		text-emerald-500 mb-2">
                  {style.title}
                </h4>

                <>
                  <div className="flex items-start justify-end gap-3 flex-row-reverse mb-3">
                    <Image
                      src="/interviewer.webp"
                      alt="팀원"
                      width={28}
                      height={28}
                      className="rounded-full mt-1"
                    />
                    <div className="bg-blue-100 dark:bg-blue-700 text-sm text-black dark:text-white p-3 rounded-xl whitespace-pre-wrap max-w-[85%]">
                      {style.question}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image
                      src="/wooseok.png"
                      alt="박우석"
                      width={28}
                      height={28}
                      className="rounded-full mt-1"
                    />
                    <div className="bg-gray-100 dark:bg-gray-800 text-sm text-black dark:text-white p-1.5 text-[12px] rounded-xl whitespace-pre-wrap max-w-[85%]">
                      {style.answer}
                    </div>
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopWorkStyleSection;
