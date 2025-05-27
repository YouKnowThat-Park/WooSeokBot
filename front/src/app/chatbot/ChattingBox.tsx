"use client";

import React, { useState } from "react";
import Draggable from "react-draggable"; // ✅ 이거 꼭 추가해야 함

interface ChattingProps {
  onClose: () => void;
}

const ChattingBox = ({ onClose }: ChattingProps) => {
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
    <Draggable>
      <div className="fixed bottom-[30px] left-[600px] w-[700px] h-[180px] bg-white shadow-lg border rounded-md z-50 p-4 flex flex-col">
        <div className="flex justify-between items-center mb-2 cursor-move">
          <h2 className="text-lg font-semibold">박우석 챗봇</h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-red-500"
          >
            닫기 ✕
          </button>
        </div>

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
    </Draggable>
  );
};

export default ChattingBox;
