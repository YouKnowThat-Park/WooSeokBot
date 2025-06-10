"use client";

import { useEffect, useState } from "react";
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

  const [error, setError] = useState<string | null>(null);
  const [chats, setChats] = useState<QA[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      } catch {
        setError("⚠️ 네트워크 오류");
      }
    };

    fetchInitialChat();

    // 후속 질문 핸들러 등록
    (
      window as typeof window & {
        __handleFollowUp?: (query: string) => void;
      }
    ).__handleFollowUp = async (newQuery: string) => {
      try {
        const res = await fetch("http://localhost:8000/api/chat/ask/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: newQuery }),
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
  }, [chatId]);

  if (error) {
    return <div className="p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full max-w-[970px] h-screen  flex flex-col bg-[#FBFBFB]  dark:bg-[#111111]">
      {/* 채팅 내역 영역 */}
      <div className="flex-1 overflow-y-auto py-4 space-y-5">
        {chats.map((chat, idx) => (
          <div key={idx} className="space-y-3">
            {/* 질문 - 오른쪽 정렬 */}
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

            {/* 답변 - 왼쪽 정렬 */}
            <div className="flex items-start gap-3">
              <Image
                src="/wooseok.png"
                alt="박우석"
                width={28}
                height={28}
                className="rounded-full mt-1"
              />
              <div className="bg-gray-100 dark:bg-gray-800  text-black dark:text-white p-1.5  rounded-xl whitespace-pre-wrap max-w-[85%] relative">
                {chat.answer}

                {/* 마지막 채팅에만 평가 버튼 표시 */}
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
      <div className="border-t border-gray-300  bg-white">
        <ChattingBox />
      </div>

      {isModalOpen && <FeedbackModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ChatAnswer;
