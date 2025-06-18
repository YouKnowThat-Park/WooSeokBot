"use client";

import React, { useState } from "react";

const ChattingBox = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (typeof window !== "undefined") {
      const followUp = (
        window as unknown as { __handleFollowUp?: (q: string) => void }
      ).__handleFollowUp;
      if (typeof followUp === "function") {
        followUp(query);
      }
    }

    setQuery("");
  };

  return (
    <div className="w-full mx-auto ml-[90px]">
      <form
        onSubmit={handleSubmit}
        className="flex items-center px-4 py-2 mb-10 w-full max-w-2xl h-[100px] bg-white dark:bg-[#2e2e2e] border rounded-2xl shadow-md"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="지원자 Ai(박우석)에게 궁금한것을 물어봐주세요."
          className="flex-1 text-sm outline-none bg-transparent dark:text-white placeholder-gray-500"
        />
        <button
          type="submit"
          className="w-8 h-8 mt-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChattingBox;
