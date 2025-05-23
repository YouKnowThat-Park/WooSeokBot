// components/chatbot/ChatSearchInput.tsx
"use client";
import React, { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

const ChatSearchInput = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    onSearch(query); // 🔥 상위로 검색어 전달
    setQuery(""); // 입력창 초기화 (선택)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2
        className="text-[100px] font-black flex justify-center relative -top-20 text-gray-900"
        style={{
          textShadow: `
      8px 8px 0px rgba(0, 0, 0, 0.1),
      16px 16px 4px rgba(0, 0, 0, 0.08),
      24px 24px 8px rgba(0, 0, 0, 0.06),
      32px 32px 16px rgba(0, 0, 0, 0.04),
      40px 40px 32px rgba(0, 0, 0, 0.02)
    `,
        }}
      >
        WooSeok Bot
      </h2>

      <div className="border-b border-gray-400 flex items-center gap-4 pb-2 z-30">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="우석이에게 궁금한 것을 물어봐주세요."
          className="flex-grow text-center w-[700px] outline-none text-lg bg-transparent placeholder-gray-500"
        />
        <button
          type="submit"
          className="text-lg text-black underline hover:opacity-70 whitespace-nowrap"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default ChatSearchInput;
