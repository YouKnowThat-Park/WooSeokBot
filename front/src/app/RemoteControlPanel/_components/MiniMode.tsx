import KoreanTimeMinute from "@/app/_components/KoreanTimeMinute";
import React from "react";
import { GrMore } from "react-icons/gr";
import clsx from "clsx";
import useDarkMode from "@/hooks/useDarkMode";

export interface MiniModeProps {
  onExpand: () => void;
}

const MiniMode = ({ onExpand }: MiniModeProps) => {
  const { isDark } = useDarkMode();
  return (
    <>
      <div className="fixed top-[470px] right-[100px] w-32 h-16 bg-white bg-transparent dark:bg-[#3A3A3A] rounded-[40px] shadow-xl flex items-center justify-center transition-colors duration-700 z-[9999]">
        <div
          className="flex gap-2 justify-center items-center mt-3"
          onClick={onExpand}
        >
          <GrMore />
          <span
            className={clsx("text-sm", isDark ? "text-white" : "text-black")}
          >
            <KoreanTimeMinute />
          </span>
        </div>
      </div>
    </>
  );
};

export default MiniMode;
