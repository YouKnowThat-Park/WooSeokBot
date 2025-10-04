"use client";

import clsx from "clsx";
import Draggable from "react-draggable";
import { usePathname } from "next/navigation";
import { ChatbotControllerProps } from "@/type/RemoteControlPanel/Controler-type";
import ExpandedThemeToggle from "./_components/ExpandedThemeToggle";
import MiniMode from "./_components/MiniMode";
import ChatbotHeader from "./_components/ChatbotHeader";
import ThemeToggle from "./_components/ThemeToggle";
import ChatbotNavigationButtons from "./_components/ChatbotNavigationButtons";
import ExpandedHeader from "./_components/ExpandedHeader";
import ChatMessages from "./_components/ChatMessages";
import ChatInput from "./_components/ChatInput";
import { useSlugChatSubmit } from "@/hooks/useSlugChatSubmit";
import { useRemoteControlState } from "@/hooks/useRemoteControlState";

const projectNameMap: Record<string, string> = {
  dogo: "DoGo",
  stage101: "Stage101",
  wooseokBot: "WooseokBot",
  aiChatBot: "AiChatBot",
};

const RemoteControlPanel = ({
  onChatbotClick,
  onChatbotClose,
  enableChatbot = false,
}: ChatbotControllerProps) => {
  const {
    mounted,
    direction,
    setDirection,
    position,
    setPosition,
    miniMode,
    SetMiniMode,
    expanded,
    setExpanded,
  } = useRemoteControlState(enableChatbot);

  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  const displayProjectName = projectNameMap[slug] || slug;

  const { input, setInput, chats, isAsking, handleSubmit } =
    useSlugChatSubmit(slug);

  if (!mounted) return null;

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
          {/* Expanded 상태 챗봇 답변 UI */}
          <ChatMessages chats={chats} />
        </div>

        {/* Expanded 상태 챗봇 입력창 */}
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

export default RemoteControlPanel;
