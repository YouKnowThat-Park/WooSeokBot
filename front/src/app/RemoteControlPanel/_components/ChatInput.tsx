import { ChatInputProps } from "@/type/RemoteControlPanel/Input-type";
import React from "react";

const ChatInput = ({
  handleSubmit,
  input,
  setInput,
  isAsking,
}: ChatInputProps) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4 flex items-start gap-2">
        <input
          type="text"
          placeholder="궁금한 걸 입력하세요"
          className="flex-1 border rounded-md px-3 py-2 text-sm h-[40px] dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={isAsking}
          className="w-[80px] h-[40px] text-sm rounded-md bg-black text-white hover:bg-gray-800 disabled:opacity-50"
          aria-label="채팅 입력 버튼"
        >
          {isAsking ? "전송 중..." : "입력"}
        </button>
      </form>
    </>
  );
};

export default ChatInput;
