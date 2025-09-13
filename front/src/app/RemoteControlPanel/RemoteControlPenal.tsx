"use client";

// import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Draggable from "react-draggable";
import { usePathname, useRouter } from "next/navigation";
import KoreanTimeMinute from "../_components/KoreanTimeMinute";
import { GrMore } from "react-icons/gr";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import useAutoScroll from "@/hooks/useAutoScroll";
import getBaseUrl from "@/utils/getBaseUrl";
import ThemeToggle from "./_components/ThemeToggle";
// import useDarkMode from "@/hooks/useDarkMode";

type QA = {
  query: string;
  answer: string;
};

type ThemeToggleProps = {
  onChatbotClick?: (direction: "left" | "right") => void;
  onChatbotClose?: () => void;
  enableChatbot?: boolean;
};

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
}: ThemeToggleProps) => {
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [chats, setChats] = useState<QA[]>([]);
  const [isAsking, setIsAsking] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [miniMode, SetMiniMode] = useState(false);
  // const { setTheme, isDark, theme } = useDarkMode();

  const bottomRef = useRef<HTMLDivElement | null>(null);
  useAutoScroll([chats], bottomRef);

  const router = useRouter();
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

  // const isDark = theme === "dark";

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
        <div className="relative mb-4 h-8 flex items-center justify-center">
          <button
            onClick={() => {
              setExpanded(false);
              setPosition({ x: 0, y: 0 });
              setDirection("right");
              onChatbotClose?.();
            }}
            className="absolute left-0 text-gray-500 hover:text-black dark:hover:text-white transition"
            aria-label="뒤로 가기"
          >
            <IoIosArrowRoundBack className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold text-black dark:text-white">
            {displayProjectName} 전용 챗봇
          </h2>
        </div>

        <ThemeToggle />

        {/* <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={clsx(
            "relative w-[3.5em] h-[2em] left-[400px] rounded-full transition-colors duration-300",
            isDark ? "bg-[#303136]" : "bg-[#f4f4f5]"
          )}
          aria-label="다크모드, 라이트 모드"
        >
          <span
            className={clsx(
              "absolute top-1/2 transform -translate-y-1/2 w-[1.4em] h-[1.4em] rounded-full transition-all duration-300",
              isDark
                ? "left-[calc(100%-1.7em)] bg-[#303136] shadow-[inset_-3px_-2px_5px_-2px_#8983f7,inset_-10px_-4px_0_0_#a3dafb]"
                : "left-[0.3em] bg-gradient-to-br from-[#ff0080] to-[#ff8c00]"
            )}
          />
        </button> */}

        <div className="flex flex-col h-full" style={{ flex: 1, minHeight: 0 }}>
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
        </div>
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
        <div className="fixed top-[470px] right-[100px] w-32 h-16 bg-white bg-transparent dark:bg-[#3A3A3A] rounded-[40px] shadow-xl flex items-center justify-center transition-colors duration-700 z-[9999]">
          <div
            className="flex gap-2 justify-center items-center mt-3"
            onClick={() => SetMiniMode(false)}
          >
            <GrMore />
            <span
              className={clsx("text-sm", isDark ? "text-white" : "text-black")}
            >
              <KoreanTimeMinute />
            </span>
          </div>
        </div>
      ) : (
        <div
          id="chatbot-toggle"
          className="fixed top-[470px] right-[100px] w-72 h-[380px] bg-white bg-transparent dark:bg-[#3A3A3A] rounded-[40px] shadow-xl flex flex-col items-center justify-start py-4 transition-colors duration-700 z-[9999]"
        >
          <div className="w-full px-6 text-sm opacity-40 flex justify-between items-center">
            <span className={clsx(isDark ? "text-white" : "text-black")}>
              <KoreanTimeMinute />
            </span>
            <button
              aria-label="... 더보기 버튼"
              onClick={() => SetMiniMode(true)}
            >
              <GrMore />
            </button>
          </div>

          <div
            className={clsx(
              "relative w-32 h-32 rounded-full mx-auto mt-4 transition-all duration-700",
              isDark
                ? "bg-gradient-to-br from-[#8983F7] to-[#A3DAFB]"
                : "bg-gradient-to-br from-[#FF0080] to-[#FF8C00]"
            )}
          >
            <div
              className={clsx(
                "absolute right-0 w-24 h-24 rounded-full transition-transform origin-top-right duration-700",
                isDark ? "scale-100 bg-[#3A3A3A]" : "scale-0 bg-white"
              )}
            />
          </div>

          <label
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-[220px] h-11 bg-black/10 dark:bg-white/20 rounded-full mt-8 mb-2 cursor-pointer transition-all duration-300"
          >
            <div
              className={clsx(
                "absolute top-0 left-0 w-1/2 h-full rounded-full shadow-md transition-transform duration-300",
                isDark
                  ? "translate-x-full bg-[#34323D]"
                  : "translate-x-0 bg-white"
              )}
            />
            <div className="absolute top-[25%] left-[17.5%] w-[65%] flex justify-between text-[90%] font-bold select-none">
              <p className={clsx(isDark ? "text-white/50" : "text-black")}>
                Light
              </p>
              <p className={clsx(isDark ? "text-white" : "text-black/50")}>
                Dark
              </p>
            </div>
          </label>

          <div className="flex gap-3 mt-2">
            <button
              aria-label="챗봇 버튼"
              onClick={() => {
                if (!enableChatbot) return;

                const el = document.getElementById("chatbot-toggle");
                const middle = window.innerWidth / 2;
                const rect = el?.getBoundingClientRect();

                const direction = rect && rect.left < middle ? "left" : "right";

                setDirection(direction);
                onChatbotClick?.(direction);
                setExpanded(true);
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
        </div>
      )}
    </Draggable>
  );
};

export default RemoteControlPenal;
