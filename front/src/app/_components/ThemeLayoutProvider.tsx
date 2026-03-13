"use client";

import RemoteControlPanel from "../RemoteControlPanel/RemoteControlPanel";
import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function ThemeLayoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [side, setSide] = useState<"left" | "right">("right");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const pathname = usePathname();

  const chatbotPages = [
    "/project/stage101",
    "/project/dogo",
    "/project/wooseokBot",
    "/project/aiChatBot",
  ];

  const showChatbot = chatbotPages.some((path) => pathname.startsWith(path));

  // 페이지 이동 시 초기화
  useEffect(() => {
    if (!showChatbot) {
      setIsChatbotOpen(false);
    }
  }, [pathname, showChatbot]);

  // viewport 감지
  useEffect(() => {
    const handleResize = () => {
      const tablet = window.innerWidth < 1024;
      setIsTablet(tablet);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // offset 계산 (state 필요 없음)
  const offset = isChatbotOpen && !isTablet ? 400 : 0;

  // content width 계산
  const contentMaxWidth = isTablet
    ? "100%"
    : isChatbotOpen
      ? "min(970px, calc(100vw - 400px))"
      : "970px";

  return (
    <div className="relative flex w-full">
      <RemoteControlPanel
        enableChatbot={showChatbot}
        onChatbotClick={(dir) => {
          setSide(dir);
          setIsChatbotOpen(true);
        }}
        onChatbotClose={() => {
          setIsChatbotOpen(false);
        }}
      />

      <div
        className="flex-1 min-w-0 transition-all duration-300"
        style={{
          marginLeft: side === "left" ? `${offset}px` : "0px",
          marginRight: side === "right" ? `${offset}px` : "0px",
        }}
      >
        <div className="flex w-full justify-center px-4 sm:px-6">
          <div
            className="w-full min-w-0 transition-all duration-300"
            style={{ maxWidth: contentMaxWidth }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
