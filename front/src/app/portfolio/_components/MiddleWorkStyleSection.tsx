"use client";

import Image from "next/image";
import React from "react";

const MiddleWorkStyleSection = () => {
  const style = {
    title: "목적 중심 기능 설계",
    question:
      "(Voir)팀원 C:\n이미지를 여러 장 업로드하는 건 디자인도 복잡하고 기술적으로도 어려운데 다른 방법이 있을까요?",
    answer1: "튜터님 : 사진 한장만 올릴 수 있게 하는건 어떤가요?",
    answer2:
      "박우석:\n그건 안됩니다. 여행 SNS에서 사진은 핵심 콘텐츠입니다. 텍스트 몇 줄과 사진 한 장만으로는 사용자의 감정을 자극하기엔 부족하다 생각합니다.\n\nVoir는 여행 감정을 공유하는 서비스입니다. 그 목적에 맞는 기능이라면, 구현이 어렵더라도 반드시 들어가야 합니다. 힘들다고 핵심 기능을 빼면, 플랫폼의 존재 의미가 사라집니다.",
  };

  return (
    <section className="w-full px-6 py-16 bg-[#F9FAFB] dark:bg-[#2e2e2e] shadow-lg text-black dark:text-white flex flex-col items-center">
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

        <div className="w-full mx-auto md:w-[440px] ml-5 bg-white dark:bg-neutral-900 shadow-xl rounded-xl p-5 space-y-4 transition-transform duration-300 ease-in-out hover:scale-105">
          {/* 질문 */}
          <div className="flex items-start gap-3">
            <Image
              src="/girl.webp"
              alt="팀원"
              width={28}
              height={28}
              className="rounded-full mt-1"
            />
            <div className="bg-blue-100 dark:bg-blue-700 text-sm text-black dark:text-white p-3 rounded-xl whitespace-pre-wrap max-w-[85%]">
              {style.question}
            </div>
          </div>

          {/* 답변1 */}
          <div className="flex items-start justify-end gap-3">
            <div className="bg-blue-100 dark:bg-blue-700 text-sm text-black dark:text-white p-3 rounded-xl whitespace-pre-wrap max-w-[85%]">
              {style.answer1}
            </div>
            <Image
              src="/wooseok.webp"
              alt="튜터"
              width={28}
              height={28}
              className="rounded-full mt-1"
            />
          </div>

          {/* 답변2 */}
          <div className="flex items-start gap-3">
            <Image
              src="/wooseok.webp"
              alt="박우석"
              width={28}
              height={28}
              className="rounded-full mt-1"
            />
            <div className="bg-gray-100 dark:bg-gray-800 text-sm text-black dark:text-white p-3 rounded-xl whitespace-pre-wrap max-w-[85%]">
              {style.answer2}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleWorkStyleSection;
