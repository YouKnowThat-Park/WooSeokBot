import { ChatbotControllerProps } from "@/type/RemoteControlPanel/Controler-type";
import React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const ChatbotNavigationButtons = ({
  enableChatbot,
  setDirection,
  onChatbotClick,
  setExpanded,
}: ChatbotControllerProps) => {
  const router = useRouter();

  return (
    <>
      <div className="flex gap-3 mt-2">
        <button
          aria-label="챗봇 버튼"
          onClick={() => {
            if (!enableChatbot) return;

            const el = document.getElementById("chatbot-toggle");
            const middle = window.innerWidth / 2;
            const rect = el?.getBoundingClientRect();
            const direction = rect && rect.left < middle ? "left" : "right";

            setDirection?.(direction);
            onChatbotClick?.(direction);
            setExpanded?.(true);
          }}
          disabled={!enableChatbot}
          className={clsx(
            "relative group w-[105px] h-11 rounded-full text-sm font-bold shadow transition",
            enableChatbot
              ? "bg-[#f3f3f3] text-black hover:bg-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          )}
        >
          CHATBOT
          {!enableChatbot && (
            <span className="absolute left-1/2 -top-7 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Project에서만 사용 가능
            </span>
          )}
        </button>
        <button
          onClick={() => router.push("/")}
          className="w-[105px] h-11 rounded-full bg-[#f3f3f3] text-black text-sm font-bold shadow hover:bg-white transition"
          aria-label="HOME 가기 버튼"
        >
          HOME
        </button>
      </div>
    </>
  );
};

export default ChatbotNavigationButtons;
