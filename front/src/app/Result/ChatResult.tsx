"use client";

import React, { useState } from "react";
import TestResult from "../chatbot/_components/TestResult";

const ChatResult = () => {
  const [queries, setQueries] = useState<string[]>([]);

  const handleFollowUp = (query: string) => {
    setQueries((prev) => [...prev, query]);
  };

  // 전역 함수 등록
  if (typeof window !== "undefined") {
    (window as any).__handleFollowUp = handleFollowUp;
  }

  return (
    <div className="space-y-4 mb-20">
      {queries.map((q, i) => (
        <TestResult key={i} query={q} />
      ))}
    </div>
  );
};

export default ChatResult;
