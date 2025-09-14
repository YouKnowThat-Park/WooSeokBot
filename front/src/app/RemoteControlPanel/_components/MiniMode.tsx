import KoreanTimeMinute from "@/app/_components/KoreanTimeMinute";
import React from "react";
import { FiSquare } from "react-icons/fi";
import clsx from "clsx";
import useDarkMode from "@/hooks/useDarkMode";

export interface MiniModeProps {
  onExpand: () => void;
}

const MiniMode = ({ onExpand }: MiniModeProps) => {
  const { isDark, toggle } = useDarkMode();
  return (
    <>
      <div
        className={clsx(
          "fixed top-6 right-[50px] w-[180px] h-[50px] border rounded-md shadow-xl duration-700 z-[9999]",
          isDark ? "bg-[#3A3A3A] text-white" : "bg-white text-black"
        )}
      >
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-between p-2" onClick={onExpand}>
            <p className="cursor-pointer">
              <FiSquare />
            </p>
          </div>
          <div>
            <button
              onClick={() => toggle()}
              className={clsx(
                "relative w-[3.5em] h-[2em] mt-2 rounded-full transition-colors duration-300",
                isDark ? "bg-[#303136]" : "bg-[#f4f4f5]"
              )}
              aria-label="다크모드, 라이트 모드"
            >
              <span
                className={clsx(
                  "absolute top-1/2 transform -translate-y-1/2 w-[1.4em] h-[1.4em] rounded-full transition-all duration-300",
                  isDark
                    ? "left-[calc(100%-1.7em)] bg-[#303136] shadow-[inset_-3px_-2px_5px_-2px_#8983f7,inset_-10px_-4px_0_0_#a3dafb]"
                    : "left-[0.3em] bg-gradient-to-br from-[#ff0080] to-[#ff8c00]"
                )}
              />
            </button>
          </div>
          <span>
            <KoreanTimeMinute />
          </span>
        </div>
      </div>
    </>
  );
};

export default MiniMode;
