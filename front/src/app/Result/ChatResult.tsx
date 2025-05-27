"use client";

import React, { useState } from "react";
import CResult from "../chatbot/_components/CResult";
import FallbackResult from "../chatbot/_components/FallbackResult";

// 🆕 fallback 질문 리스트 받도록 설정
const ChatResult = () => {
  const [fallbacks, setFallbacks] = useState<string[]>([]);

  // 챗봇 박스에서 이 함수 호출
  const handleFollowUp = (query: string) => {
    setFallbacks((prev) => [...prev, query]);
  };

  // window에 공유 (간단히 전역 이벤트 시스템 대체)
  if (typeof window !== "undefined") {
    // 전역에서 접근 가능하도록 등록
    (window as any).__handleFollowUp = handleFollowUp;
  }

  return (
    <div className="space-y-4">
      {/* 기본 검색 결과 */}
      <CResult />

      {/* 추가 질문에 대한 Fallback */}
      {fallbacks.map((q, i) => (
        <div key={i}>
          <FallbackResult />
        </div>
      ))}
    </div>
  );
};

export default ChatResult;
