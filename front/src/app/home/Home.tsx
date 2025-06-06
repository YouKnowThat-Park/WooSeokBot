"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProjectRouter from "../_components/ProjectRouter";
import ChatSearchInput from "../chatbot/ChatSearchInput";

const Home = () => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(true);

  const handleSearch = async (query: string) => {
    const res = await fetch("http://localhost:8000/api/chat/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const { chatId, token, answer } = await res.json();

    sessionStorage.setItem(`token:${chatId}`, token);
    sessionStorage.setItem(`answer:${chatId}`, answer); // 💡 답변도 저장
    router.push(`/chatAnswer/${chatId}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowSearch(window.scrollY <= 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen dark:bg-[#11111]">
      <div className="relative z-40 mt-[850px]">
        <ProjectRouter />
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
