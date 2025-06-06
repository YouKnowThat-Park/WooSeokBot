"use client";

import React from "react";

const workStyles = [
  {
    title: "풀스택을 향한 확장, Django",
    description:
      "프론트엔드로 시작했지만 백엔드까지 다룰 수 있는 개발자가 되기 위해 Django를 배우고 있습니다. 실제로 이 플랫폼 'Wooseok Bot'에도 Django가 적용되어 있으며, 이를 통해 서버 사이드 구조와 데이터 흐름을 익히고 있습니다.",
  },
  {
    title: "상태 관리의 폭을 넓히다, Recoil",
    description:
      "기존에는 Zustand를 사용했지만, 더 다양한 상태 관리 방식에 익숙해지기 위해 Recoil도 함께 학습하고 있습니다. 여러 프로젝트에 적용해보며 컴포넌트 간 구조적인 상태 설계에 대한 이해를 넓혔습니다.",
  },
  {
    title: "크로스 플랫폼을 위한 React Native 학습",
    description:
      "웹 개발에 익숙한 만큼, 모바일 환경에서도 일관된 사용자 경험을 제공할 수 있도록 React Native를 학습 중입니다. 하나의 코드베이스로 iOS와 Android 모두를 지원하는 구조에 매력을 느끼고 있으며, 실무 적용을 준비하고 있습니다.",
  },
];

const BottomWorkStyleSection = () => {
  return (
    <section className="w-full py-16 px-6 bg-white dark:bg-[#111111] text-black dark:text-white">
      <h2 className="text-center text-[22px] font-bold mb-14">새로운 기술</h2>

      <div className="flex justify-center items-center relative h-[400px] max-w-[1100px] mx-auto">
        {/* Left card */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2  scale-95 opacity-70 z-10 transition-all duration-300">
          <div className="w-[280px] h-[360px] rounded-lg shadow-xl bg-white dark:bg-[#1f1f1f] p-6 text-left">
            <h4 className="text-base font-bold text-[#3ecf8e] mb-2">
              {workStyles[0].title}
            </h4>
            <p className="text-sm text-neutral-800 dark:text-neutral-300">
              {workStyles[0].description}
            </p>
          </div>
        </div>

        {/* Center card */}
        <div className="z-20 scale-100 shadow-2xl">
          <div className="w-[300px] h-[380px] rounded-lg bg-white dark:bg-[#1f1f1f] p-6 text-left">
            <h4 className="text-lg font-bold text-[#3ecf8e] mb-2">
              {workStyles[1].title}
            </h4>
            <p className="text-sm text-neutral-800 dark:text-neutral-300">
              {workStyles[1].description}
            </p>
          </div>
        </div>

        {/* Right card */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2  scale-95 opacity-70 z-10 transition-all duration-300">
          <div className="w-[280px] h-[360px] rounded-lg shadow-xl bg-white dark:bg-[#1f1f1f] p-6 text-left">
            <h4 className="text-base font-bold text-[#3ecf8e] mb-2">
              {workStyles[2].title}
            </h4>
            <p className="text-sm text-neutral-800 dark:text-neutral-300">
              {workStyles[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomWorkStyleSection;
