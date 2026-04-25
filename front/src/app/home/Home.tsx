"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChatSearchInput from "../chatAnswer/[id]/_components/ChatSearchInput";
import PortfolioPage from "../portfolio/PortfolioPage";
import getBaseUrl from "@/utils/getBaseUrl";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(true);
  const [showScroll, setShowScroll] = useState(true);

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

  useEffect(() => {
    const handleScrollIndicator = () => {
      setShowScroll(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScrollIndicator);
    return () => window.removeEventListener("scroll", handleScrollIndicator);
  }, []);

  return (
    <div className="relative min-h-screen mr-[-450px] dark:bg-[#111] max-[1279px]:w-full max-[1279px]:max-w-[970px] max-[1279px]:mr-0">
      {/* 메인 콘텐츠 */}
      <div className="relative z-40 ">
        {showScroll && (
          <motion.div
            className="w-[100px] h-[30px] absolute top-[-140px] right-0 text-sm text-gray-300 font-semibold max-[1279px]:hidden"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Scroll 👇🏻
          </motion.div>
        )}
        <PortfolioPage />
      </div>

      {/* 홈에서만 보이는 검색창 */}
      {showSearch && (
        <div className="fixed w-[700px] top-[350px] ml-32 z-30 max-[767px]:hidden max-[1279px]:left-1/2 max-[1279px]:top-[220px] max-[1279px]:ml-0 max-[1279px]:w-[calc(100vw-2rem)] max-[1279px]:max-w-[700px] max-[1279px]:-translate-x-1/2 sm:max-[1279px]:top-[260px] md:max-[1279px]:top-[300px] lg:max-[1279px]:top-[320px]">
          <ChatSearchInput onSearch={handleSearch} />
        </div>
      )}
    </div>
  );
};

export default Home;
