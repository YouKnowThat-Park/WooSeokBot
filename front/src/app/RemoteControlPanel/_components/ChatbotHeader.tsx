import React from "react";
import clsx from "clsx";
import KoreanTimeMinute from "@/app/_components/KoreanTimeMinute";
import useDarkMode from "@/hooks/useDarkMode";
import { GrMore } from "react-icons/gr";

export interface SetMiniModeProps {
  SetMiniMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatbotHeader = ({ SetMiniMode }: SetMiniModeProps) => {
  const { isDark } = useDarkMode();
  return (
    <>
      <div className="w-full px-6 text-sm opacity-40 flex justify-between items-center">
        <span className={clsx(isDark ? "text-white" : "text-black")}>
          <KoreanTimeMinute />
        </span>
        <button
          aria-label="... 판업 작아지는 버튼"
          onClick={() => SetMiniMode(true)}
        >
          <GrMore />
        </button>
      </div>
    </>
  );
};

export default ChatbotHeader;
