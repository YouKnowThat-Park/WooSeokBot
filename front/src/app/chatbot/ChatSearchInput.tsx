// components/chatbot/ChatSearchInput.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface SearchProps {
  onSearch: (query: string) => void;
}

const ChatSearchInput = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    onSearch(query);
    setQuery("");
  };

  const shadowStyle = isDark
    ? `
        8px 8px 0px rgba(255, 255, 255, 0.05),
        16px 16px 4px rgba(255, 255, 255, 0.04),
        24px 24px 8px rgba(255, 255, 255, 0.03),
        32px 32px 16px rgba(255, 255, 255, 0.02),
        40px 40px 32px rgba(255, 255, 255, 0.01)
      `
    : `
        8px 8px 0px rgba(0, 0, 0, 0.1),
        16px 16px 4px rgba(0, 0, 0, 0.08),
        24px 24px 8px rgba(0, 0, 0, 0.06),
        32px 32px 16px rgba(0, 0, 0, 0.04),
        40px 40px 32px rgba(0, 0, 0, 0.02)
      `;

  return (
    <form onSubmit={handleSubmit} className=" w-full ml-5">
      <h2
        className="text-[100px] font-black flex justify-center relative -top-20 text-gray-900 dark:text-[#F4F5F4]"
        style={{ textShadow: shadowStyle }}
      >
        WooSeok Bot
      </h2>

      <div className="border-b border-gray-400 flex items-center gap-4 pb-2 z-30">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="우석이에게 궁금한 것을 물어봐주세요."
          className="flex-grow text-center w-[700px] outline-none text-lg bg-transparent placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-[#F4F5F4]"
        />
        <button
          type="submit"
          className="text-lg text-black dark:text-white underline hover:opacity-70 whitespace-nowrap"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default ChatSearchInput;
