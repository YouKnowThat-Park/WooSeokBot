"use client";

import React from "react";

const WorkStyle2Section = () => {
  const style = {
    title: "사용자의 흐름에 맞춘 UI/UX 설계",
    question:
      "팀원 김 :\n우석님, 왜 예약하기 버튼이 카드랑 모달 양쪽에 있는 건가요? 밖에만 있어도 되는 거 아닌가요?",
    answer:
      "박우석 : 많은 사용자가 여러 호텔을 반복해서 비교합니다. 예를 들어 A호텔의 B객실을 봤다가, C호텔의 A객실을 본 뒤 다시 A호텔의 B객실로 돌아오는 식이죠.\n\n이때 어떤 사용자는 상세 정보를 보고 바로 예약하고 싶어하고, 어떤 사용자는 카드를 보고 다시 예약하려 할 수 있습니다. 만약 버튼이 모달에만 있다면, 예약하려고 할 때마다 다시 모달을 열어야 하는 번거로움이 생깁니다.",
  };

  return (
    <section className="w-full px-6 py-16 bg-[#EDEDED] dark:bg-[#111111] text-black dark:text-white flex flex-col items-center">
      <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-10 w-full max-w-[1200px]">
        {/* 오른쪽 텍스트 */}
        <div className="md:w-2/5 text-left space-y-4 mt-28 mr-2">
          <h3 className="text-xl font-semibold mb-2">목적 중심</h3>
          <p className="text-sm text-gray-700 dark:text-neutral-300 leading-relaxed">
            실제 사용자의 흐름과 비즈니스 목적을 동시에 고려하여 기능을 설계하고
            구현합니다. 기술에 안주하지 않고, 늘 더 나은 방식과 구조를 고민하며
            성장하고자 합니다.
          </p>
        </div>

        {/* 왼쪽 카드 */}
        <div className="md:w-3/5 relative h-[420px] flex items-center justify-center">
          <div
            className={`w-[300px] h-[390px] rounded-xl shadow-xl p-4 whitespace-pre-wrap bg-white dark:bg-[#1f1f1f] transition-transform duration-300 ease-in-out  cursor-default`}
          >
            <h4 className="text-lg font-bold text-[#3ecf8e] mb-2">
              {style.title}
            </h4>

            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-1">
              {style.question}
            </p>
            <div className="border my-2" />
            <p className="text-[13px] text-neutral-800 dark:text-neutral-300">
              {style.answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkStyle2Section;
