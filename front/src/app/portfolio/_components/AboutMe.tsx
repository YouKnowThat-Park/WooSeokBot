import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex items-start gap-x-6 px-10  mt-8 rounded-md">
      {/* 이미지 */}
      <div>
        <Image
          src="/wooseok.png"
          alt="우석 프로필 이미지"
          width={200}
          height={300}
          className="rounded-md object-cover bg-white border dark:border-gray-500 dark:bg-[#111111]"
        />
      </div>

      {/* 텍스트/내용 박스 */}
      <div className="flex-1 h-[300px] bg-white rounded-md shadow-sm p-4 dark:bg-[#121212] dark:text-[#F4F5F4]">
        <h2 className="text-xl font-bold">
          박우석 <span className="text-sm">(WooSeok Park)</span>
        </h2>
        <h3 className="mt-3 font-semibold">
          &quot;The world is open to me. A world that welcomes challenges more
          than frustration is open to me.&quot;
        </h3>
        <h3 className="mt-3">
          좌절보다 도전을 선택하며, 오늘보다 더 나은 내일을 향해 달려가는
          프론트엔드 개발자 박우석입니다.
        </h3>
        <div className="mt-2 space-y-1 w-auto">
          {/* 이메일 */}
          <a
            href="mailto:youkn0wthat@naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-fit hover:underline"
          >
            <Image src="/email.png" alt="email 아이콘" width={40} height={40} />
            <span>youkn0wthat@naver.com</span>
          </a>

          {/* 깃허브 */}
          <a
            href="https://github.com/YouKnowThat-Park"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-fit hover:underline"
          >
            <Image
              src="/github.png"
              alt="깃허브 아이콘"
              width={40}
              height={40}
            />
            <span>YouKnowThat-Park</span>
          </a>

          {/* 티스토리 */}
          <a
            href="https://youkn0wthat.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-fit hover:underline"
          >
            <Image
              src="/tstory.png"
              alt="티스토리 블로그 아이콘"
              width={40}
              height={40}
            />
            <span>youkn0wthat.tistory.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
