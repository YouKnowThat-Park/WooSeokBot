import Image from "next/image";
import React from "react";

const LearningStackSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mx-auto max-w-5xl py-10 px-4 dark:text-[#F4F5F4]">
      {/* 배우고 있는 기술 스택 */}
      <div className="bg-white dark:bg-[#111111] border dark:border-gray-700 rounded-xl shadow-md w-full p-6 relative">
        <h3 className="text-lg font-bold text-center mb-4">
          배우고 있는 기술 스택
        </h3>

        <a
          href="https://youkn0wthat.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1b1b1b] rounded-md transition p-3"
        >
          <Image
            src="/workimage.webp"
            alt="공부하는 모습 아이콘"
            width={50}
            height={50}
            className="border border-black/30 rounded-full -scale-x-100"
          />
          <p className="text-sm leading-relaxed">프론트엔드 이론 공부</p>
        </a>
        <span className="absolute bottom-3 right-4 text-[10px] text-gray-500 dark:text-gray-400">
          해당 카드를 클릭하면 진행 상황을 확인할 수 있습니다.
        </span>
      </div>

      {/* 배우고 싶은 기술 스택 */}
      <div className="bg-white dark:bg-[#111111] border dark:border-gray-700 rounded-xl shadow-md w-full p-6">
        <h3 className="text-lg font-bold text-center mb-4">
          배우고 싶은 기술 스택
        </h3>

        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/react-native.webp"
            alt="React Native 아이콘"
            width={50}
            height={50}
          />
          <p className="text-sm ">Web, 반응형 뿐만 아니라 Application 확장</p>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="/flutter.webp"
            alt="Flutter 아이콘"
            width={50}
            height={50}
          />
          <p className="text-sm leading-relaxed">
            React Native 외 다른 App 프레임워크 확장
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningStackSection;
