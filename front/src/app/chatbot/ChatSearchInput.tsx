"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

interface SearchProps {
  onSearch?: (query: string) => void;
}

const ChatSearchInput = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const [botAttacks, setBotAttacks] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBotAttacks(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (pathname.startsWith("/chatAnswer")) {
      const followUp = (
        window as typeof window & {
          __handleFollowUp?: (q: string) => void;
        }
      ).__handleFollowUp;
      if (typeof followUp === "function") followUp(query);
    } else {
      onSearch?.(query);
    }

    setQuery("");
  };

  const shadowStyle = isDark
    ? `8px 8px 0px rgba(255, 255, 255, 0.05),
       16px 16px 4px rgba(255, 255, 255, 0.04),
       24px 24px 8px rgba(255, 255, 255, 0.03),
       32px 32px 16px rgba(255, 255, 255, 0.02),
       40px 40px 32px rgba(255, 255, 255, 0.01)`
    : `8px 8px 0px rgba(0, 0, 0, 0.1),
       16px 16px 4px rgba(0, 0, 0, 0.08),
       24px 24px 8px rgba(0, 0, 0, 0.06),
       32px 32px 16px rgba(0, 0, 0, 0.04),
       40px 40px 32px rgba(0, 0, 0, 0.02)`;

  return (
    <form onSubmit={handleSubmit} className="w-full ml-5">
      <div className="relative h-[140px] mb-10 flex justify-center items-center">
        <div
          className="relative flex items-center transition-all duration-700"
          style={{
            transform: botAttacks ? "translateX(-20px)" : "translateX(0px)",
          }}
        >
          <h2
            className="text-[100px] font-black text-gray-900 dark:text-[#F4F5F4]"
            style={{ textShadow: shadowStyle }}
          >
            WooSeok
          </h2>

          <span
            className={`
              text-[100px] font-black ml-4
              text-gray-900 dark:text-[#F4F5F4]
              transition-all duration-700
              ${
                botAttacks
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }
            `}
            style={{ textShadow: shadowStyle }}
          >
            Bot
          </span>
        </div>
      </div>

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
