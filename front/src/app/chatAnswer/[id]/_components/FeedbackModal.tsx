"use client";

import { useState } from "react";
import Image from "next/image";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

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
      const res = await fetch("http://localhost:8000/api/chat/feedback/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname,
          password_hash: password, // 해시 전송이라 가정 (이미 해시된 값 또는 단순 전달)
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
      onClose(); // 모달 닫기
    } catch {
      alert("⚠️ 네트워크 오류. 다시 시도해주세요.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[620px] h-[360px]">
        <div className="flex justify-start items-center my-1 text-2xl font-semibold">
          Comment
        </div>
        <button
          onClick={onClose}
          className="ml-[530px] text-sm bg-gray-300 rounded px-2 py-1"
        >
          취소
        </button>
        <div className="border-b mb-10" />
        <div className="flex">
          <div className="bg-black w-[60px] h-[60px] rounded-full">
            <Image
              src="/interviewer.webp"
              alt="면접관 이미지"
              width={30}
              height={30}
              className="ml-6"
            />
          </div>
          <div className="flex flex-col gap-2 ml-5">
            <input
              type="text"
              placeholder="회사 이름"
              className="h-7 border px-2"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <input
              type="password"
              placeholder="패스워드"
              className="h-7 border px-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-10 h-20  ml-[220px] mb-4 flex flex-col justify-center items-center border rounded-full border-black cursor-pointer">
            <AiFillLike
              className={
                selection === "like" ? "text-blue-600" : "text-gray-400"
              }
              size={20}
              onClick={() => setSelection("like")}
            />
            <div className="border border-black w-full my-2" />
            <AiFillDislike
              className={
                selection === "dislike" ? "text-red-600" : "text-gray-400"
              }
              size={20}
              onClick={() => setSelection("dislike")}
            />
          </div>
        </div>
        <div className="flex">
          <textarea
            placeholder="해당 피드백은 관리자 페이지에서 박우석 지원자만 확인할 수 있습니다."
            className="w-full h-32 border border-gray-300 rounded p-2 mt-3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={handleSubmit}
              className="w-20 mx-2 h-[125px] text-sm bg-[#111111] text-white rounded"
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
