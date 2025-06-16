"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ChatSearchInput from "../chatbot/ChatSearchInput";
import PortfolioPage from "../portfolio/PortfolioPage";

const Home = () => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(true);

  const handleSearch = async (query: string) => {
    try {
      const res = await fetch("http://localhost:8000/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        const error = await res.text();
        console.error("❌ GPT 오류:", error);
        return;
      }

      const { chatId } = await res.json(); // ✅ answer, token 안 씀
      router.push(`/chatAnswer/${chatId}`);
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
    <div className="relative min-h-screen mx-auto  dark:bg-[#11111]">
      <div className="relative z-40 mt-[850px]">
        <PortfolioPage />
      </div>

      {showSearch && (
        <div className="fixed w-[700px] top-[400px] left-[600px] z-30">
          <ChatSearchInput onSearch={handleSearch} />
        </div>
      )}
    </div>
  );
};

export default Home;
