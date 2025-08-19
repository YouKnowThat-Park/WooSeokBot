"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
    }, 400);
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

  const kVariants = {
    initial: {
      y: 0,
      rotate: 0,
      scale: 1,
    },
    attack: {
      y: [0, -100, -100, 0], // 올라가서 고정 후 내려옴
      rotate: [0, 0, 360, 360], // 올라갈 때는 회전 X, 공중에서만 회전
      scale: [1, 1.1, 1.1, 1],
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1], // ← 타이밍 제어
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="w-full ml-5">
      <div className="relative h-[140px] mb-10 flex justify-center items-center">
        <div
          className="relative flex items-center transition-all duration-700"
          style={{
            transform: botAttacks ? "translateX(-20px)" : "translateX(0px)",
          }}
        >
          <h2 className="text-[140px] font-black  dark:text-[#F4F5F4] flex">
            {"WooSeo".split("").map((char, idx) => (
              <span
                key={idx}
                className="inline-block"
                style={{ textShadow: shadowStyle }}
              >
                {char}
              </span>
            ))}

            <motion.span
              variants={kVariants}
              initial="initial"
              animate={botAttacks ? "attack" : "initial"}
              className="inline-block origin-center"
              style={{
                textShadow: shadowStyle,
                display: "inline-block",
              }}
            >
              k
            </motion.span>
          </h2>

          <span
            className={`
              text-[140px] font-black ml-4
              dark:text-[#F4F5F4]
              transition-all duration-100
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

      <div className="flex items-center justify-center mt-40 z-30">
        <div className="flex w-full max-w-xl bg-white dark:bg-[#1F1F1F] rounded-full shadow-md px-4 py-2 border border-gray-300 dark:border-gray-600">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="우석이에게 궁금한 것을 물어봐주세요."
            className="flex-grow bg-transparent outline-none text-lg placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-[#F4F5F4] px-4"
          />
          <button
            type="submit"
            aria-label="검색하기 버튼"
            className="flex items-center justify-center text-white bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-80 px-5 py-2 rounded-full transition-all duration-200"
          >
            🔍
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatSearchInput;
