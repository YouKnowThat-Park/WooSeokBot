"use client";

import ThemeToggle from "../_components/ThemeToggle";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [margin, setMargin] = useState(500); // 초기값: 500px
  const pathname = usePathname();

  const showThemeToggle = [
    "/project/stage101",
    "/project/dogo",
    "/project/wooseokBot",
  ].some((path) => pathname.startsWith(path));

  return (
    <div className={clsx("transition-all duration-300", `ml-[${margin}px]`)}>
      {showThemeToggle && <ThemeToggle onChatbotClick={() => setMargin(170)} />}
      {children}
    </div>
  );
}
