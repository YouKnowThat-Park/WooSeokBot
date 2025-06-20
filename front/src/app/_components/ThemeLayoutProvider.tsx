"use client";

import ThemeToggle from "./ThemeToggle";
import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function ThemeLayoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [offset, setOffset] = useState(0);
  const [side, setSide] = useState<"left" | "right">("right");
  const pathname = usePathname();

  const chatbotPages = [
    "/project/stage101",
    "/project/dogo",
    "/project/wooseokBot",
    "/project/aiChatBot",
  ];
  const showChatbot = chatbotPages.some((path) => pathname.startsWith(path));

  // 경로가 바뀌면 오프셋 초기화
  useEffect(() => {
    if (!showChatbot) {
      setOffset(0);
    }
  }, [pathname, showChatbot]);

  return (
    <div className="flex relative">
      {/* fixed 위치의 챗봇 토글 (레이아웃 이동에 영향 없음) */}
      <ThemeToggle
        enableChatbot={showChatbot}
        onChatbotClick={(dir) => {
          setSide(dir);
          setOffset(400); // 챗봇 열린 방향의 반대쪽으로 200px 밀기
        }}
        onChatbotClose={() => {
          setOffset(0); // 닫을 땐 원위치
        }}
      />

      {/* margin-left 로 슬라이딩 적용, fixed 요소에 영향 없음 */}
      <div
        className="flex-1 transition-all duration-300"
        style={{
          marginLeft: side === "right" ? `-${offset}px` : `${offset}px`,
        }}
      >
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[970px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
