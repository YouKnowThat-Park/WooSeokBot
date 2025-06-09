"use client";

import ThemeToggle from "../_components/ThemeToggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ProjectLayout({
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
  ];
  const showChatbot = chatbotPages.some((path) => pathname.startsWith(path));

  // 경로 바뀔 때 margin 초기화
  useEffect(() => {
    if (!showChatbot) setMargin(500);
  }, [pathname, showChatbot]);

  return (
    <div
      className="transition-all duration-300"
      style={{ marginLeft: `${margin}px` }}
    >
      <ThemeToggle
        onChatbotClick={() => setMargin(200)}
        enableChatbot={showChatbot}
      />
      {children}
    </div>
  );
}
