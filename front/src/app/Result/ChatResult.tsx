"use client";

import React, { useEffect, useState } from "react";
import TestResult from "../chatbot/_components/TestResult";

const ChatResult = () => {
  const [queries, setQueries] = useState<string[]>([]);

  const handleFollowUp = (query: string) => {
    setQueries((prev) => [...prev, query]);
  };

  // ✅ 여기서 window 타입 확장
  useEffect(() => {
    (
      window as Window & { __handleFollowUp?: (query: string) => void }
    ).__handleFollowUp = handleFollowUp;

    return () => {
      (
        window as Window & { __handleFollowUp?: (query: string) => void }
      ).__handleFollowUp = undefined;
    };
  }, []);

  return (
    <div className="space-y-4 mb-20">
      {queries.map((q, i) => (
        <TestResult key={i} query={q} />
      ))}
    </div>
  );
};

export default ChatResult;
