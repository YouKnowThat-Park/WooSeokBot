import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 px-6 sm:px-10 py-8 mx-auto mt-10 bg-gradient-to-br from-white to-gray-50 dark:from-[#121212] dark:to-[#1e1e1e] rounded-xl shadow-md max-w-4xl border dark:border-gray-700">
      {/* 프로필 이미지 */}
      <div className="flex-shrink-0">
        <Image
          src="/wooseok.webp"
          alt="우석 프로필 이미지"
          width={180}
          height={240}
          className="rounded-lg object-cover border border-gray-300 dark:border-gray-600 shadow-sm scale-x-[-1]"
        />
      </div>

      {/* 텍스트/내용 박스 */}
      <div className="flex-1 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            박우석{" "}
            <span className="text-base font-medium text-gray-500 dark:text-gray-400">
              (WooSeok Park)
            </span>
          </h2>
        </div>

        <blockquote className="text-lg italic font-medium text-gray-800 dark:text-gray-300 border-l-4 border-blue-500 pl-4">
          &quot;The world is open to me. A world that welcomes challenges more
          than frustration is open to me. &quot;
        </blockquote>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          좌절보다 도전을 선택하며, 오늘보다 더 나은 내일을 향해 달려가는
          프론트엔드 개발자 박우석입니다.
        </p>

        {/* 소셜 링크들 */}
        <div className="space-y-3 pt-2">
          <a
            href="mailto:youkn0wthat@naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-fit hover:underline group transition-all duration-200"
          >
            <Image
              src="/email.webp"
              alt="email 아이콘"
              width={28}
              height={28}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-sm text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              youkn0wthat@naver.com
            </span>
          </a>

          <a
            href="https://github.com/YouKnowThat-Park"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-fit hover:underline group transition-all duration-200"
          >
            <Image
              src="/github.webp"
              alt="깃허브 아이콘"
              width={28}
              height={28}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-sm text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              YouKnowThat-Park
            </span>
          </a>

          <a
            href="https://youkn0wthat.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-fit hover:underline group transition-all duration-200"
          >
            <Image
              src="/tstory.webp"
              alt="티스토리 블로그 아이콘"
              width={28}
              height={28}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-sm text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              youkn0wthat.tistory.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
