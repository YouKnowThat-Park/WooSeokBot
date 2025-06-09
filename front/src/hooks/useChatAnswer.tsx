// app/_hooks/useChatAnswerQuery.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export type QA = {
  query: string;
  answer: string;
};

export const fetchInitialChat = async (chatId: string): Promise<QA[]> => {
  const res = await fetch(`http://localhost:8000/api/chat/${chatId}/`);
  if (!res.ok) throw new Error("초기 채팅 불러오기 실패");

  const data = await res.json();
  return [{ query: data.query, answer: data.response }];
};

export const askFollowUp = async (query: string): Promise<QA> => {
  const res = await fetch("http://localhost:8000/api/chat/ask/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error("후속 질문 실패");
  const data = await res.json();

  return {
    query: data.query ?? query,
    answer: data.answer,
  };
};

export const useChatAnswerQuery = () => {
  const { id } = useParams();
  const chatId = Array.isArray(id) ? id[0] : id;

  const queryClient = useQueryClient();

  // chatId가 없으면 아무 것도 하지 않고 기본값만 반환 (핵심)
  if (!chatId) {
    return {
      chats: [],
      isLoading: false,
      isError: false,
      error: null,
      refetch: () => {},
      askFollowUp: () => {},
      isAsking: false,
    };
  }

  const query = useQuery<QA[]>({
    queryKey: ["chat", chatId],
    queryFn: () => fetchInitialChat(chatId),
    enabled: true,
  });

  const mutation = useMutation({
    mutationFn: askFollowUp,
    onSuccess: (newQA) => {
      queryClient.setQueryData<QA[]>(["chat", chatId], (prev) =>
        prev ? [...prev, newQA] : [newQA]
      );
    },
  });

  return {
    chats: query.data ?? [],
    isLoading: query.isPending,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
    askFollowUp: mutation.mutate,
    isAsking: mutation.isPending,
  };
};
