"use client";

import { useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import Image from "next/image";
import getBaseUrl from "@/utils/getBaseUrl";

type Props = {
  onClose: () => void;
};

const FeedbackModal = ({ onClose }: Props) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [selection, setSelection] = useState<"like" | "dislike" | null>(null);

  const handleSubmit = async () => {
    if (!nickname || !password || !content) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    try {
      const res = await fetch(`${getBaseUrl()}/api/chat/feedback/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname,
          password_hash: password,
          content,
          like_status: selection,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(`❌ 전송 실패: ${JSON.stringify(err)}`);
        return;
      }

      alert("✅ 피드백이 등록되었습니다.");
      onClose();
    } catch {
      alert("⚠️ 네트워크 오류. 다시 시도해주세요.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-neutral-900 w-[450px] rounded-[17px] shadow-xl p-4">
        <div className="flex items-center justify-between mb-3 border-b pb-2">
          <h2 className="text-sm font-bold text-neutral-700 dark:text-neutral-200">
            Comments
          </h2>
          <button
            onClick={onClose}
            className="text-xs bg-neutral-300 dark:bg-neutral-700 rounded-full px-2 py-1"
            aria-label="닫기"
          >
            X
          </button>
        </div>

        <div className="grid grid-cols-[1fr_35px] gap-4 mb-4 px-2">
          {/* 사용자 정보 + 댓글 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-20 h-20  relative bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center">
                <Image
                  src="/interviewer.webp"
                  alt="user"
                  fill
                  className="object-contain rounded-full p-1"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="회사 이름"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="h-10 text-xs font-semibold bg-transparent border-b border-neutral-300 focus:outline-none focus:border-blue-500 dark:bg-transparent dark:text-white"
                />
                <input
                  type="password"
                  placeholder="패스워드"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-10 text-xs font-semibold bg-transparent border-b border-neutral-300 focus:outline-none focus:border-blue-500 dark:bg-transparent dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* 좋아요 영역 */}
          <div className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-800 rounded-md py-2">
            <button
              onClick={() => setSelection("like")}
              aria-label="좋아요! 버튼"
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-colors ${
                selection === "like"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400"
              }`}
            >
              <AiFillLike size={16} />
            </button>
            <div className="w-4 h-px bg-neutral-300 my-1" />
            <button
              onClick={() => setSelection("dislike")}
              aria-label="싫어요; 버튼"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                selection === "dislike"
                  ? "bg-red-500 text-white"
                  : "text-gray-400"
              }`}
            >
              <AiFillDislike size={16} />
            </button>
          </div>
        </div>

        {/* 입력 박스 */}
        <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg">
          <div className="bg-white dark:bg-neutral-900 rounded-xl px-3 py-2">
            <textarea
              placeholder="피드백은 관리자 페이지에서만 박우석 지원자만 확인할 수 있습니다.
"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-20 bg-transparent resize-none text-sm text-neutral-700 dark:text-white placeholder:text-neutral-400 outline-none"
            />
            <div className="flex items-center justify-end mt-2">
              <button
                onClick={handleSubmit}
                className="w-24 h-9 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                aria-label="작성하기 버튼"
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
