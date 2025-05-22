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
