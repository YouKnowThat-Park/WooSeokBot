"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  query: string;
};

const TestResult = ({ query }: Props) => {
  const [answer, setAnswer] = useState("로딩 중...");

  useEffect(() => {
    const fetchAnswer = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/chat/ask/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const data = await res.json();
        setAnswer(data.answer || "응답 없음");
      } catch (error) {
        console.error("API 호출 실패:", error);
        setAnswer("서버 오류");
      }
    };

    fetchAnswer();
  }, [query]);

  return (
    <div className="w-[970px] h-full mt-[10px] mb-[10px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6">
      <div className="flex items-start gap-x-6 mt-8 rounded-md">
        {/* 이미지 */}
        <div>
          <Image
            src="/wooseok.webp"
            alt="우석 프로필 이미지"
            width={200}
            height={300}
            className="rounded-md object-cover bg-white"
          />
        </div>

        {/* 답변 박스 */}
        <div className="flex-1 h-[300px] bg-white rounded-md shadow-sm p-4 overflow-auto">
          <p className="text-gray-800 whitespace-pre-line">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
