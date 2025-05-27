"use client";

import React, { useEffect, useState } from "react";
import ChatSearchInput from "../chatbot/ChatSearchInput";
import ChatResult from "../Result/ChatResult";
import ProjectRouter from "../_components/ProjectRouter";

const Home = () => {
  const [isSearched, setIsSearched] = useState(false);
  // const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  // searchTerm: string << 타입 추가 해야됨
  const handleSearch = () => {
    // setQuery(searchTerm);
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
    <div className="relative min-h-screen dark:bg-[#3A3A3A]">
      {/* 챗봇 아이콘 */}

      {/* 콘텐츠 영역 */}
      <div className="relative z-40 mt-[850px]">
        {!isSearched ? <ProjectRouter /> : <ChatResult />}
      </div>

      {/* 검색창 */}
      {showSearch && (
        <div className="fixed w-[700px] top-[400px] left-[600px] z-30 transition-opacity duration-300 ">
          <ChatSearchInput onSearch={handleSearch} />
        </div>
      )}
    </div>
  );
};

export default Home;
