"use client";
import React, { useState } from "react";
import ChatSearchInput from "../chatbot/ChatSearchInput";
import PortfolioPage from "../portfolio/PortfolioPage";
import ChatResult from "../chatbot/ChatResult";
import ChatBotIcon from "../chatbot/ChatBotIcon";

const Home = () => {
  const [isSearched, setIsSearched] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* ✅ ChatBotIcon: 최상단 */}
      <div className="fixed bottom-10 right-10 z-50">
        <ChatBotIcon />
      </div>

      {/* ✅ 콘텐츠 영역 */}
      <div className="relative z-40 mt-[850px]">
        {!isSearched ? <PortfolioPage /> : <ChatResult />}
      </div>

      {/* ✅ 검색창: 콘텐츠보다 아래 */}
      <div className="fixed w-[700px] top-[400px] left-[600px] z-30">
        <ChatSearchInput />
      </div>
    </div>
  );
};

export default Home;
