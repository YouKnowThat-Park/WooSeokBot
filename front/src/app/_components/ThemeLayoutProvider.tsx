"use client";

import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ThemeLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [margin, setMargin] = useState(500);
  const pathname = usePathname();

  // chatbotButton 관련 페이지
  const chatbotPages = [
    "/project/stage101",
    "/project/dogo",
    "/project/wooseokBot",
    "/project/aiChatBot",
  ];
  const showChatbot = chatbotPages.some((path) => pathname.startsWith(path));

  // 경로 바뀔 때 margin 초기화
  useEffect(() => {
    if (!showChatbot) setMargin(500);
  }, [pathname, showChatbot]);
  console.log("📍 pathname", pathname);
  console.log("✅ showChatbot", showChatbot);

  return (
    <div
      className="transition-all duration-300"
      style={{ marginLeft: `${margin}px` }}
    >
      <ThemeToggle
        onChatbotClick={() => setMargin(200)}
        onChatbotClose={() => setMargin(500)}
        enableChatbot={showChatbot}
      />
      {children}
    </div>
  );
}
