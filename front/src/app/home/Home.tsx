"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChatSearchInput from "../chatAnswer/[id]/_components/ChatSearchInput";
import PortfolioPage from "../portfolio/PortfolioPage";
import getBaseUrl from "@/utils/getBaseUrl";

const Home: React.FC = () => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(true);

  const handleSearch = async (query: string) => {
    // 1) 프론트 라우팅 (로딩 페이지)
    router.push(`/chatAnswer/temp?q=${encodeURIComponent(query)}`);

    const base = getBaseUrl();

    // 3) POST 요청
    try {
      const res = await fetch(`${base}/api/chat/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("❌ GPT 오류:", text);
        return;
      }

      const { chatId } = await res.json();
      // 4) 결과로 받은 chatId 로 URL 교체
      router.replace(`/chatAnswer/${chatId}?q=${encodeURIComponent(query)}`);
    } catch (err) {
      console.error("❌ 네트워크 오류:", err);
    }
  };

  // 스크롤 내릴 때 검색창 숨기기
  useEffect(() => {
    const handleScroll = () => {
      setShowSearch(window.scrollY <= 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen mr-[-450px] dark:bg-[#111]">
      {/* 메인 콘텐츠 */}
      <div className="relative z-40 mt-[830px]">
        <PortfolioPage />
      </div>

      {/* 홈에서만 보이는 검색창 */}
      {showSearch && (
        <div className="fixed w-[700px] top-[400px] ml-32 z-30">
          <ChatSearchInput onSearch={handleSearch} />
        </div>
      )}
    </div>
  );
};

export default Home;
