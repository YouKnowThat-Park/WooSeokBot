"use client";

import React, { useEffect, useState } from "react";
import ChatSearchInput from "../chatbot/ChatSearchInput";
import PortfolioPage from "../portfolio/PortfolioPage";
import ChatResult from "../chatbot/ChatResult";
import ChatBotIcon from "../chatbot/ChatBotIcon";

const Home = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    setIsSearched(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowSearch(false);
      } else {
        setShowSearch(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 챗봇 아이콘 */}
      <div className="fixed bottom-10 right-10 z-50">
        <ChatBotIcon />
      </div>

      {/* 콘텐츠 영역 */}
      <div className="relative z-40 mt-[850px]">
        {!isSearched ? <PortfolioPage /> : <ChatResult query={query} />}
      </div>

      {/* 검색창 */}
      {showSearch && (
        <div className="fixed w-[700px] top-[400px] left-[600px] z-30 transition-opacity duration-300">
          <ChatSearchInput onSearch={handleSearch} />
        </div>
      )}
    </div>
  );
};

export default Home;
