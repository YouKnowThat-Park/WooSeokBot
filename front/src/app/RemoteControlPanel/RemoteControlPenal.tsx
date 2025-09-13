"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Draggable from "react-draggable";
import { usePathname } from "next/navigation";
import getBaseUrl from "@/utils/getBaseUrl";
import { ChatbotControllerProps } from "@/type/ChatbotControler-type";
import ExpandedThemeToggle from "./_components/ExpandedThemeToggle";
import MiniMode from "./_components/MiniMode";
import ChatbotHeader from "./_components/ChatbotHeader";
import ThemeToggle from "./_components/ThemeToggle";
import ChatbotNavigationButtons from "./_components/ChatbotNavigationButtons";
import ExpandedHeader from "./_components/ExpandedHeader";
import ChatMessages from "./_components/ChatMessages";
import ChatInput from "./_components/ChatInput";

export interface QA {
  query: string;
  answer: string;
}

const projectNameMap: Record<string, string> = {
  dogo: "DoGo",
  stage101: "Stage101",
  wooseokBot: "WooseokBot",
  aiChatBot: "AiChatBot",
};

const RemoteControlPenal = ({
  onChatbotClick,
  onChatbotClose,
  enableChatbot = false,
}: ChatbotControllerProps) => {
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [chats, setChats] = useState<QA[]>([]);
  const [isAsking, setIsAsking] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [miniMode, SetMiniMode] = useState(false);

  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  const displayProjectName = projectNameMap[slug] || slug;

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!enableChatbot && expanded) {
      setExpanded(false);
    }
  }, [pathname, enableChatbot, expanded]);

  if (!mounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsAsking(true);
    try {
      const res = await fetch(`${getBaseUrl()}/api/chat/ask/${slug}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error(`후속 질문 실패: ${err}`);
        return;
      }

      const data = await res.json();
      const newQA: QA = {
        query: data.query ?? input,
        answer: data.answer,
      };

      setChats((prev) => [...prev, newQA]);
      setInput("");
    } catch {
      alert("❌ 네트워크 오류");
    } finally {
      setIsAsking(false);
    }
  };

  if (expanded) {
    return (
      <div
        className={clsx(
          "fixed top-12 w-[500px] h-[800px] bg-white dark:bg-[#222] rounded-3xl border p-6 flex flex-col transition-all duration-500 overflow-hidden z-[9999]",
          direction === "right" ? "right-[100px]" : "left-[100px]"
        )}
      >
        <ExpandedHeader
          setExpanded={setExpanded}
          setPosition={setPosition}
          setDirection={setDirection}
          onChatbotClose={onChatbotClose}
          displayProjectName={displayProjectName}
        />

        {/* ExPanded 상태일때 다크모드 */}
        <ExpandedThemeToggle />

        <div className="flex flex-col h-full" style={{ flex: 1, minHeight: 0 }}>
          {/* <div
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

            <div />
          </div> */}
          <ChatMessages chats={chats} />
        </div>
        {/* <form onSubmit={handleSubmit} className="mt-4 flex items-start gap-2">
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
        </form> */}
        <ChatInput
          handleSubmit={handleSubmit}
          input={input}
          setInput={setInput}
          isAsking={isAsking}
        />
      </div>
    );
  }

  return (
    <Draggable
      position={position}
      onStop={(_, data) => {
        setPosition({ x: data.x, y: data.y });
      }}
    >
      {miniMode ? (
        /* 미니모드 상태 로직 */
        <MiniMode onExpand={() => SetMiniMode(false)} />
      ) : (
        <div
          id="chatbot-toggle"
          className="fixed top-[470px] right-[100px] w-72 h-[380px] bg-white bg-transparent dark:bg-[#3A3A3A] rounded-[40px] shadow-xl flex flex-col items-center justify-start py-4 transition-colors duration-700 z-[9999]"
        >
          {/* 리모컨 상단에 있는 미니모드와 시간 */}
          <ChatbotHeader SetMiniMode={SetMiniMode} />

          {/* 리모컨 다크모드 UI 및 버튼 */}
          <ThemeToggle />

          {/* 리모컨 하단 Chatbot , Home 버튼 */}
          <ChatbotNavigationButtons
            enableChatbot={enableChatbot}
            setExpanded={setExpanded}
            setDirection={setDirection}
            onChatbotClick={onChatbotClick}
          />
        </div>
      )}
    </Draggable>
  );
};

export default RemoteControlPenal;
