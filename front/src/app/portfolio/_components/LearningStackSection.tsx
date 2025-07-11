import Image from "next/image";
import React from "react";

const LearningStackSection = () => {
  return (
    <div className="flex gap-2 mx-auto  dark:text-[#F4F5F4] ">
      <div className="bg-white w-full h-[200px] dark:bg-[#111111] border">
        <h3 className="flex justify-center mt-5">배우고 있는 기술 스택</h3>

        <div className="flex">
          <Image src="/django.webp" alt="장고 아이콘" width={70} height={70} />
          <span className="mt-5">
            : Full Stack 개발자가 되기 위한 Django 백엔드 공부
          </span>
        </div>
        <div className="flex">
          <Image src="/ai.webp" alt="ai 아이콘" width={70} height={80} />
          <span className="mt-5">
            : 멀티 에이전트 기반 AI 애플리케이션 구조를 학습 중
          </span>
        </div>
      </div>

      <div className="bg-white w-full h-[200px] dark:bg-[#111111] border">
        <h3 className="flex justify-center mt-5">배우고 싶은 기술 스택</h3>
        <div className="flex">
          <Image
            src="/react-native.webp"
            alt="리엑트 네이티브 아이콘"
            width={70}
            height={70}
          />
          <span className="mt-5">
            : Web,반응형 뿐만 아니라 Application 확장
          </span>
        </div>
        <div className="flex">
          <Image src="/flutter.webp" alt="ai 아이콘" width={70} height={80} />
          <span className="mt-5">
            : React Native 외 다른 App 프레임워크 확장
          </span>
        </div>
      </div>
    </div>
  );
};

export default LearningStackSection;
