import React from "react";
import clsx from "clsx";
import useDarkMode from "@/hooks/useDarkMode";

const ThemeToggle = () => {
  const { toggle, isDark } = useDarkMode();

  return (
    <>
      <button
        onClick={() => toggle()}
        className={clsx(
          "relative w-[3.5em] h-[2em] left-[400px] rounded-full transition-colors duration-300",
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
    </>
  );
};

export default ThemeToggle;
