import useAutoScroll from "@/hooks/useAutoScroll";
import { ChatMessagesProps } from "@/type/RemoteControlPanel/Messages-type";
import Image from "next/image";
import React, { useRef } from "react";

const ChatMessages = ({ chats }: ChatMessagesProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  useAutoScroll([chats], bottomRef);

  return (
    <>
      <div
        className="flex-1 overflow-y-auto pr-2 space-y-4 text-sm text-black dark:text-white"
        ref={bottomRef}
      >
        {chats.map((chat, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex justify-end items-start gap-2">
              <div className="max-w-[70%] bg-blue-100 dark:bg-blue-700 text-sm p-3 whitespace-pre-wrap rounded-xl text-black dark:text-white">
                {chat.query}
              </div>
              <Image
                src="/wooseok.webp"
                alt="질문 이미지"
                width={30}
                height={30}
              />
            </div>
            <div className="flex justify-start items-start gap-2">
              <Image
                src="/wooseok.webp"
                alt="답변 이미지"
                width={30}
                height={30}
              />
              <div className="max-w-[70%] bg-gray-100 dark:bg-gray-800 text-sm p-3 whitespace-pre-wrap rounded-xl text-black dark:text-white">
                {chat.answer}
              </div>
            </div>
          </div>
        ))}
        {/* ✅ 스크롤 타겟 */}

        <div />
      </div>
    </>
  );
};

export default ChatMessages;
