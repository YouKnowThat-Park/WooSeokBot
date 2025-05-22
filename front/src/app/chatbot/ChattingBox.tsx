"use client";

import React from "react";

interface ChattingProps {
  onClose: () => void;
}

const ChattingBox = ({ onClose }: ChattingProps) => {
  return (
    <div className="fixed bottom-28 left-[600px] w-[700px] h-[127px] bg-white shadow-lg border rounded-md z-50 p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">챗봇</h2>
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-red-500"
        >
          닫기 ✕
        </button>
      </div>

      <div className="flex flex-col h-[calc(100%-2rem)] overflow-y-auto">
        {/* 채팅 메시지 들어갈 영역 */}
        <div className="text-gray-600">안녕하세요! 무엇을 도와드릴까요?</div>
      </div>
    </div>
  );
};

export default ChattingBox;
