import React from "react";
import clsx from "clsx";
import useDarkMode from "@/hooks/useDarkMode";

const ThemeToggle = () => {
  const { toggle, isDark } = useDarkMode();

  return (
    <>
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

      <label
        onClick={toggle}
        className="relative w-[220px] h-11 bg-black/10 dark:bg-white/20 rounded-full mt-8 mb-2 cursor-pointer transition-all duration-300"
      >
        <div
          className={clsx(
            "absolute top-0 left-0 w-1/2 h-full rounded-full shadow-md transition-transform duration-300",
            isDark ? "translate-x-full bg-[#34323D]" : "translate-x-0 bg-white"
          )}
        />
        <div className="absolute top-[25%] left-[17.5%] w-[65%] flex justify-between text-[90%] font-bold select-none">
          <p className={clsx(isDark ? "text-white/50" : "text-black")}>Light</p>
          <p className={clsx(isDark ? "text-white" : "text-black/50")}>Dark</p>
        </div>
      </label>
    </>
  );
};

export default ThemeToggle;
