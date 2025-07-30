import Image from "next/image";
import React from "react";

const LearningStackSection = () => {
  return (
    <div className="flex gap-2 mx-auto  dark:text-[#F4F5F4] ">
      <div className="bg-white w-full h-[200px] dark:bg-[#111111] border relative">
        <h3 className="flex justify-center mt-5 font-semibold">
          배우고 있는 기술 스택
        </h3>

        <div className=" rounded-md cursor-pointer transition mt-3 h-fit">
          <a
            href="https://github.com/YouKnowThat-Park/StudyProject"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-start p-2"
          >
            <Image
              src="/django.webp"
              alt="장고 아이콘"
              width={70}
              height={70}
            />
            <div className="flex flex-col">
              <span className="mt-2">
                : Full Stack 개발자가 되기 위한 Django 백엔드 공부
              </span>
            </div>
          </a>

          {/* 오른쪽 하단 텍스트 위치 고정 */}
          <span className="absolute bottom-2 right-3 text-[10px] text-gray-500">
            해당 카드를 클릭하면 진행 상황을 확인할 수 있습니다.
          </span>
        </div>
      </div>

      <div className="bg-white w-full h-[200px] dark:bg-[#111111] border">
        <h3 className="flex justify-center mt-5 font-semibold">
          배우고 싶은 기술 스택
        </h3>
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
