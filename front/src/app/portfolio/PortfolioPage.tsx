import Image from "next/image";
import React from "react";

const PortfolioPage = () => {
  return (
    <div className="w-[970px] h-[3000px] mt-[400px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6">
      <div className="flex items-start gap-x-6   mt-8 rounded-md">
        {/* 이미지 */}
        <div>
          <Image
            src="/wooseok.png"
            alt="우석 프로필 이미지"
            width={200}
            height={300}
            className="rounded-md object-cover bg-white"
          />
        </div>

        {/* 텍스트/내용 박스 */}
        <div className="flex-1 h-[300px] bg-white rounded-md shadow-sm p-4">
          <h2 className="text-xl font-bold">박우석</h2>
          <h3>
            좌절보다는 도전을 선택하며, 오늘보다 더 나은 내일을 향해 달려가는
            프론트엔드 개발자 박우석입니다.
          </h3>
          <p>이름, 짧은 자기소개,번호, 이메일, 깃허브 주소, 블로그 주소</p>
        </div>
      </div>

      <div className="flex  w-full h-[100px] mt-10 justify-between gap-2">
        <p className="w-[200px] h-[200px] bg-white">Front-End</p>
        <p className="w-[200px] h-[200px] bg-white">Back-End</p>
        <p className="w-[200px] h-[200px] bg-white">lib</p>
        <p className="w-[200px] h-[200px] bg-white">DB</p>
        <p className="w-[200px] h-[200px] bg-white">Style</p>
      </div>
      <div className="flex  w-full h-[100px] mt-[120px] justify-between gap-2">
        <p className="w-[200px] h-[200px] bg-white">Front-End</p>
        <p className="w-[200px] h-[200px] bg-white">Back-End</p>
        <p className="w-[200px] h-[200px] bg-white">lib</p>
        <p className="w-[200px] h-[200px] bg-white">DB</p>
        <p className="w-[200px] h-[200px] bg-white">Style</p>
      </div>

      <div className="flex gap-2 mt-32">
        <p className="bg-white w-full h-[200px]">배우고 있는 기술 스택</p>

        <p className="bg-white w-full h-[200px]">배우고 싶은 기술</p>
      </div>

      <div className="flex flex-col gap-10 h-[500px] mt-4 bg-white">
        <h2>업무 방식</h2>
        <p>사용자의 실제 행동 흐름에 맞춘 UI/UX 흐름을 설계하고 구현합니다.</p>
        <p>
          단순히 동작하는 기능이 아니라, '왜 이 기능이 필요하고, 어떤 비즈니스
          가치를 만들 수 있는지'까지 고민하며 개발합니다.
        </p>
        <p>배움을 두려워 하지 않고 새로운 기술들을 계속 학습합니다.</p>
      </div>
    </div>
  );
};

export default PortfolioPage;
