"use client";

import React, { useState } from "react";

const ChattingBox = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (typeof window !== "undefined") {
      const followUp = (
        window as unknown as { __handleFollowUp?: (q: string) => void }
      ).__handleFollowUp;
      if (typeof followUp === "function") {
        followUp(query);
      }
    }

    setQuery("");
  };

  return (
    <div className=" w-full h-[180px] cursor-move bg-white shadow-lg border rounded-md z-50 p-4 flex flex-col">
      <form onSubmit={handleSubmit} className="flex gap-2 mt-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="우석이에게 추가 질문을 해보세요"
          className="flex-1 border rounded px-4 py-2 outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:opacity-80"
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default ChattingBox;
