"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import FeedbackModal from "./_components/FeedbackModal";
import ChattingBox from "@/app/chatbot/ChattingBox";

type QA = {
  query: string;
  answer: string;
};

const ChatAnswer = () => {
  const { id } = useParams();
  const chatId = Array.isArray(id) ? id[0] : id;

  const tokenRef = useRef<string | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [chats, setChats] = useState<QA[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  // ✅ 초기 채팅 불러오기
  useEffect(() => {
    const fetchInitialChat = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/chat/${chatId}/`);
        if (!res.ok) {
          const err = await res.text();
          setError(`❌ 서버 오류: ${res.status} ${err}`);
          return;
        }

        const data = await res.json();
        setChats([{ query: data.query, answer: data.response }]);
        setToken(data.token); // ✅ token 상태 업데이트
        tokenRef.current = data.token;
      } catch {
        setError("⚠️ 네트워크 오류");
      }
    };

    if (chatId) fetchInitialChat();
  }, [chatId]);

  // ✅ 토큰 준비 후 핸들러 등록
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

      try {
        const res = await fetch("http://localhost:8000/api/chat/ask/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: newQuery, token: currentToken }),
        });

        if (!res.ok) {
          const err = await res.text();
          console.error(`후속 질문 실패: ${err}`);
          return;
        }

        const data = await res.json();
        const newQA: QA = {
          query: data.query ?? newQuery,
          answer: data.answer,
        };
        setChats((prev) => [...prev, newQA]);
      } catch {
        alert("❌ 후속 질문 오류");
      }
    };
  }, [token]);

  // ✅ 초기화 안된 경우 렌더 지연
  if (!token) {
    return <div className="p-10 text-gray-500">초기화 중입니다...</div>;
  }

  if (error) {
    return <div className="p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full max-w-[800px] ml-[115px] flex flex-col dark:bg-[#111111] py-10 px-4">
      {/* 채팅 내역 영역 */}
      <div className="flex flex-col gap-6 mb-[150px]">
        <div className="flex items-start gap-3">
          <Image
            src="/wooseok.png"
            alt="박우석"
            width={28}
            height={28}
            className="rounded-full mt-1"
          />
          <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-1.5 rounded-xl whitespace-pre-wrap max-w-[85%] relative">
            <p>안녕하세요 지원자 Ai 박우석 입니다.</p>
          </div>
        </div>

        {chats.map((chat, idx) => (
          <div key={idx} className="space-y-3">
            {/* 질문 */}
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

            {/* 답변 */}
            <div className="flex items-start gap-3">
              <Image
                src="/wooseok.png"
                alt="박우석"
                width={28}
                height={28}
                className="rounded-full mt-1"
              />
              <div className="bg-gray-100 dark:bg-[#2e2e2e] text-black dark:text-white p-1.5 rounded-xl whitespace-pre-wrap max-w-[85%] relative">
                {chat.answer}
                {idx === chats.length - 1 && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute -bottom-8 right-3 py-2 font-semibold text-xs text-red-500 hover:underline"
                  >
                    답변은 만족 스러우신가요? ✍️ 평가하러 가기
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 채팅 입력창 */}
      <div className="fixed bottom-0 left-0 w-full dark:bg-[#111111] z-50">
        <div className="max-w-[800px] mx-auto px-4">
          <ChattingBox />
        </div>
      </div>

      {isModalOpen && <FeedbackModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ChatAnswer;
