// Home.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChatSearchInput from "../chatAnswer/[id]/_components/ChatSearchInput";
import PortfolioPage from "../portfolio/PortfolioPage";
import getBaseUrl from "@/utils/getBaseUrl";

const Home = () => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(true);

  const handleSearch = async (query: string) => {
    // 👉 1) 먼저 router.push로 이동
    router.push(`/chatAnswer/temp?q=${encodeURIComponent(query)}`);

    // 👉 2) 바로 비동기로 POST
    try {
      const res = await fetch(`${getBaseUrl()}/api/chat/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        const error = await res.text();
        console.error("❌ GPT 오류:", error);
        return;
      }

      const { chatId } = await res.json();

      // ✅ chatId 나오면 다시 교체
      router.replace(`/chatAnswer/${chatId}?q=${encodeURIComponent(query)}`);
    } catch (error) {
      console.error("❌ 네트워크 오류:", error);
    }
  };

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
      <div className="relative z-40 mt-[850px]">
        <PortfolioPage />
      </div>

      {/* 검색창 (오직 홈에서) */}
      {showSearch && (
        <div className="fixed w-[700px] top-[400px] ml-32 z-30">
          <ChatSearchInput onSearch={handleSearch} />
        </div>
      )}
    </div>
  );
};

export default Home;
