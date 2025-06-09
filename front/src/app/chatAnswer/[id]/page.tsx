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
    <div className="w-full max-w-[970px] h-screen mx-auto flex flex-col bg-[#FBFBFB] rounded-tl-[45px]">
      {/* 채팅 내역 영역 */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8">
        {chats.map((chat, idx) => (
          <div
            key={idx}
            className="flex items-start gap-x-6 bg-white p-4 rounded-md shadow-sm"
          >
            <Image
              src="/wooseok.png"
              alt="우석 프로필 이미지"
              width={120}
              height={180}
              className="rounded-md object-cover bg-white"
            />
            <div className="flex-1 relative min-h-[200px]">
              <p className="font-semibold text-black mb-2">
                질문: {chat.query}
              </p>
              <p className="text-gray-800 whitespace-pre-line">
                답변: {chat.answer}
              </p>

              {idx === chats.length - 1 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute bottom-[-50px] right-3 font-semibold text-sm text-red-500 hover:underline"
                >
                  답변은 만족 스러우신가요? ✍️ 평가하러 가기
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 채팅 입력창 */}
      <div className="border-t border-gray-300 p-4 bg-white">
        <ChattingBox />
      </div>

      {isModalOpen && <FeedbackModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ChatAnswer;
