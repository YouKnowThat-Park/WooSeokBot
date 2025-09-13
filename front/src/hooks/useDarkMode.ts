import { useTheme } from "next-themes";

const useDarkMode = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return { setTheme, isDark, theme, toggle };
};

export default useDarkMode;
