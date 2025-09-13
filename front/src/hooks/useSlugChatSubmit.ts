import { QA } from "@/type/QA-type";
import getBaseUrl from "@/utils/getBaseUrl";
import { useState } from "react";

export const useSlugChatSubmit = (slug: string) => {
  const [chats, setChats] = useState<QA[]>([]);
  const [isAsking, setIsAsking] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !slug) return;

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
  return { input, setInput, chats, setChats, isAsking, handleSubmit };
};
