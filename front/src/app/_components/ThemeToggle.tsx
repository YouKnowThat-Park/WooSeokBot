"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ChatBotIcon from "../chatbot/ChatBotIcon";
import Draggable from "react-draggable";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Draggable>
      <div className="relative w-72 h-[360px] bg-white bg-transparent dark:bg-[#3A3A3A] rounded-[40px] shadow-xl flex flex-col items-center justify-start py-4 transition-colors duration-700">
        {/* 상태 바 */}
        <div className="w-full px-6 text-sm opacity-40 flex justify-between items-center">
          <span className={clsx(isDark ? "text-white" : "text-black")}>
            4:20
          </span>
          <div className="flex items-center gap-2">
            <div
              className={clsx(
                "w-0 h-0 border-solid border-t-[7.2px] border-l-[6.8px] border-r-[6.8px] rotate-[135deg]",
                isDark ? "border-t-white" : "border-t-black",
                "border-transparent"
              )}
            ></div>
            <div
              className={clsx(
                "w-[0.85rem] h-[0.45rem]",
                isDark ? "bg-white" : "bg-black"
              )}
            />
          </div>
        </div>

        {/* 달 아이콘 */}
        <div
          className={clsx(
            "relative w-32 h-32 rounded-full mx-auto mt-4 transition-all duration-700",
            isDark
              ? "bg-gradient-to-br from-[#8983F7] to-[#A3DAFB]"
              : "bg-gradient-to-br from-[#FF0080] to-[#FF8C00]"
          )}
        >
          <div
            className={clsx(
              "absolute right-0 w-24 h-24 rounded-full transition-transform origin-top-right duration-700",
              isDark ? "scale-100 bg-[#3A3A3A]" : "scale-0 bg-white"
            )}
          />
        </div>

        {/* 토글 버튼 */}
        <label
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="relative w-[220px] h-11 bg-black/10 dark:bg-white/20 rounded-full mt-8 mb-2 cursor-pointer transition-all duration-300"
        >
          <div
            className={clsx(
              "absolute top-0 left-0 w-1/2 h-full rounded-full shadow-md transition-transform duration-300",
              isDark
                ? "translate-x-full bg-[#34323D]"
                : "translate-x-0 bg-white"
            )}
          />
          <div className="absolute top-[25%] left-[17.5%] w-[65%] flex justify-between text-[90%] font-bold select-none">
            <p className={clsx(isDark ? "text-white/50" : "text-black")}>
              Light
            </p>
            <p className={clsx(isDark ? "text-white" : "text-black/50")}>
              Dark
            </p>
          </div>
        </label>
        <div className="flex">
          <ChatBotIcon />
          <Image
            src="/reset.png"
            alt="리셋 아이콘"
            width={60}
            height={55}
            className="mt-2"
          />
        </div>
      </div>
    </Draggable>
  );
};

export default ThemeToggle;
