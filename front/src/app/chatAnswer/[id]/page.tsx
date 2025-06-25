// app/chatAnswer/[id]/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import FeedbackModal from "./_components/FeedbackModal";
import LoadingDots from "./_components/LoadingDots";
import ChattingBox from "./_components/ChattingBox";
import getBaseUrl from "@/utils/getBaseUrl";

type QA = {
  query: string;
  answer: string;
};

const ChatAnswer = () => {
  const { id } = useParams();
  const chatId = Array.isArray(id) ? id[0] : id;
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q");

  const tokenRef = useRef<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [chats, setChats] = useState<QA[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  // 처음 질문 렌더
  useEffect(() => {
    if (initialQuery) {
      setChats([{ query: initialQuery, answer: "⏳ 답변 생성 중..." }]);
    }
  }, [initialQuery]);

  // 최초 GET
  useEffect(() => {
    const fetchAnswer = async () => {
      try {
        const res = await fetch(`${getBaseUrl()}/api/chat/${chatId}/`);
        const data = await res.json();

        setToken(data.token);
        tokenRef.current = data.token;

        setChats((prev) =>
          prev.map((item) =>
            item.query === data.query
              ? { ...item, answer: data.response }
              : item
          )
        );
      } catch {
        setChats((prev) =>
          prev.map((item) =>
            item.query === initialQuery
              ? {
                  ...item,
                  answer:
                    "😴 박우석 지원자가 잠시 눈을 붙이고 있어요. 깨우는 중입니다...",
                }
              : item
          )
        );
      }
    };

    if (chatId && initialQuery) fetchAnswer();
  }, [chatId, initialQuery]);

  // 스크롤
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  // 후속 질문
  useEffect(() => {
    if (!token) return;
    tokenRef.current = token;

    (
      window as typeof window & {
        __handleFollowUp?: (query: string) => void;
      }
    ).__handleFollowUp = async (newQuery: string) => {
      const currentToken = tokenRef.current;
      if (!currentToken) {
        alert("❌ 토큰이 유실되었습니다. 새로고침 해주세요.");
        return;
      }

      const newIndex = chats.length;
      setChats((prev) => [
        ...prev,
        { query: newQuery, answer: "⏳ 답변 생성 중..." },
      ]);

      try {
        const res = await fetch(`${getBaseUrl()}/api/chat/ask/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: newQuery, token: currentToken }),
        });
        const data = await res.json();
        setChats((prev) =>
          prev.map((item, idx) =>
            idx === newIndex ? { ...item, answer: data.answer } : item
          )
        );
      } catch {
        setChats((prev) =>
          prev.map((item, idx) =>
            idx === newIndex ? { ...item, answer: "❌ 답변 생성 실패" } : item
          )
        );
      }
    };
  }, [token, chats.length]);

  if (!initialQuery) {
    return <div className="p-10 text-gray-500">질문을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="w-[800px] ml-[115px] flex flex-col dark:bg-[#111111] py-10 px-4">
      <div className="flex flex-col gap-6 mb-[150px]">
        {/* AI 인트로 */}
        <div className="flex items-start gap-3">
          <Image
            src="/wooseok.webp"
            alt="박우석"
            width={28}
            height={28}
            className="rounded-full mt-1"
          />
          <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-1.5 rounded-xl whitespace-break-spaces relative">
            <p>안녕하세요 지원자 Ai 박우석 입니다.</p>
          </div>
        </div>

        {/* Q&A */}
        {chats.map((chat, idx) => (
          <div key={idx} className="space-y-3">
            {/* 사용자 질문 */}
            <div className="flex items-start gap-3 flex-row-reverse max-w-[85%]">
              <Image
                src="/interviewer.webp"
                alt="팀원"
                width={28}
                height={28}
                className="rounded-full mt-1"
              />
              <div className="bg-blue-100 dark:bg-blue-700 text-sm text-black dark:text-white p-3 rounded-xl whitespace-pre-wrap">
                {chat.query}
              </div>
            </div>

            {/* AI 답변 */}
            <div className="flex items-start gap-3">
              <Image
                src="/wooseok.webp"
                alt="박우석"
                width={28}
                height={28}
                className="rounded-full mt-1"
              />
              <div>
                <div className="w-[130px] bg-gray-100 dark:bg-[#2e2e2e] text-black font-semibold dark:text-white p-2 mb-2 rounded-xl relative">
                  Ai 박우석 지원자
                </div>
                <div className="bg-gray-100 dark:bg-[#2e2e2e] text-black dark:text-white p-1.5 max-w-[630px] w-fit rounded-xl whitespace-break-spaces relative">
                  {chat.answer === "⏳ 답변 생성 중..." ? (
                    <span className="inline-flex items-center">
                      <LoadingDots />
                    </span>
                  ) : (
                    chat.answer
                  )}

                  {idx === chats.length - 1 && !chat.answer.includes("⏳") && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="absolute -bottom-8 w-full right-3 py-2 font-semibold text-xs text-red-500 hover:underline"
                      aria-label="피드백 작성 버튼"
                    >
                      답변은 만족 스러우신가요? ✍️ 평가하러 가기
                    </button>
                  )}
                  <div ref={bottomRef} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 채팅 입력 박스 */}
      <div className="fixed bottom-0 right-[60px] w-full dark:bg-[#111111] z-50">
        <div className="max-w-[800px] mx-auto px-4">
          <ChattingBox />
        </div>
      </div>

      {isModalOpen && <FeedbackModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ChatAnswer;
