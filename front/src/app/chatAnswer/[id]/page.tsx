"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import FeedbackModal from "./_components/FeedbackModal";

type QA = { query: string; answer: string };

// ✅ window 타입 확장 (파일 내부에서만 사용)
type FollowUpWindow = typeof window & {
  __handleFollowUp?: (query: string) => void;
};

const ChatAnswer = () => {
  const { id } = useParams();
  const chatId = Array.isArray(id) ? id[0] : id;

  const [error, setError] = useState<string | null>(null);
  const [chats, setChats] = useState<QA[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // const savedQuery = sessionStorage.getItem(`query:${chatId}`);
    const savedAnswer = sessionStorage.getItem(`answer:${chatId}`);
    const token = sessionStorage.getItem(`token:${chatId}`);

    if (!token) {
      setError("❌ 인증 토큰이 없습니다 (세션이 초기화된 듯 합니다)");
      return;
    }

    const fetchChat = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/chat/${chatId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          const err = await res.text();
          setError(`❌ 서버 오류: ${res.status} ${err}`);
          return;
        }

        const data = await res.json();
        const query = data.query;
        const answer = savedAnswer ?? data.answer;
        setChats([{ query, answer }]);
      } catch {
        setError("⚠️ 네트워크 오류");
      }
    };

    fetchChat();

    const typedWindow = window as FollowUpWindow;
    typedWindow.__handleFollowUp = async (newQuery: string) => {
      try {
        const res = await fetch("http://localhost:8000/api/chat/ask/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: newQuery }),
        });

        const data = await res.json();
        const newQA = { query: newQuery, answer: data.answer };
        setChats((prev) => [...prev, newQA]);
      } catch {
        alert("❌ 후속 질문 실패");
      }
    };
  }, [chatId]);

  if (error) return <div className="p-10 text-red-500">{error}</div>;

  return (
    <div className="w-[970px] mx-auto mt-[10px] mb-[10px] px-6 bg-[#FBFBFB] rounded-tl-[45px]">
      {chats.map((chat, idx) => (
        <div
          key={idx}
          className="flex items-start gap-x-6 mt-8 mb-6 bg-white p-4 rounded-md shadow-sm"
        >
          <Image
            src="/wooseok.png"
            alt="우석 프로필 이미지"
            width={120}
            height={180}
            className="rounded-md object-cover bg-white"
          />
          <div className="flex-1">
            <p className="font-semibold text-black mb-2">질문: {chat.query}</p>
            <p className="text-gray-800 whitespace-pre-line">
              답변: {chat.answer}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 ml-[450px] font-semibold text-sm text-red-500 hover:underline"
            >
              답변은 만족 스러우신가요? ✍️ 평가하러 가기
            </button>
          </div>
        </div>
      ))}

      {isModalOpen && <FeedbackModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ChatAnswer;
