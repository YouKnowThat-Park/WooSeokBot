"use client";

import RemoteControlPanel from "../RemoteControlPanel/RemoteControlPanel";
import { useEffect, useState, ReactNode, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ThemeLayoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [side, setSide] = useState<"left" | "right">("right");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [chatbotWidth, setChatbotWidth] = useState(0);

  const pathname = usePathname();
  const prevTablet = useRef(false);
  const chatbotPages = [
    "/project/stage101",
    "/project/dogo",
    "/project/wooseokBot",
    "/project/aiChatBot",
  ];

  const showChatbot = chatbotPages.some((path) => pathname.startsWith(path));

  // 페이지 이동 시 챗봇 닫기
  useEffect(() => {
    if (!showChatbot) {
      setIsChatbotOpen(false);
    }
  }, [pathname, showChatbot]);

  // viewport 감지 + 챗봇 width 계산
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      const tablet = width < 1024;
      setIsTablet(tablet);

      // ⭐ tablet → desktop 전환 감지
      if (prevTablet.current && !tablet) {
        setIsChatbotOpen(false);
      }

      prevTablet.current = tablet;

      const vwWidth = width * 0.35;
      const calculated = Math.min(Math.max(vwWidth, 320), 500);

      setChatbotWidth(calculated);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 챗봇 열렸을 때 offset
  const offset = isChatbotOpen && !isTablet ? chatbotWidth + 40 : 0;

  // content width 계산
  const contentMaxWidth = isTablet
    ? "100%"
    : isChatbotOpen
      ? `min(970px, calc(100vw - ${offset}px))`
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
          marginLeft:
            isChatbotOpen && !isTablet && side === "left"
              ? `${chatbotWidth + 40}px`
              : "0px",

          marginRight:
            isChatbotOpen && !isTablet && side === "right"
              ? `${chatbotWidth + 40}px`
              : "0px",
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
