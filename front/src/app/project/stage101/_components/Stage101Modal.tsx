import React from "react";

interface ModalProps {
  onClose: () => void;
}
const Stage101Modal = ({ onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 flex items-start justify-center pt-[120px] px-4">
      <div
        className="bg-white dark:bg-[#2e2e2e] w-full max-w-lg rounded-xl shadow-xl p-6 relative border dark:border-neutral-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-2">
          📢 현재 STAGE_101은 리팩토링을 준비하고 있습니다.
        </h2>
        <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
          <span className="text-lg">1. 백엔드 및 DB 변경</span>
          <span>
            - 기존 BaaS 플랫폼인 Supabase를 Python FastAPI & PostgreSQL로 변경
          </span>
          <span className="text-lg">2. 결제 완료 페이지 SSR로 변경</span>
          <span>- 극장 예약 완료 페이지 CSR에 → SSR로 변경</span>
          <span>- Shop(굿즈 아이템) 결제 완료 페이지 CSR → SSR로 변경</span>
          <span className="text-lg">3. 디자인 수정</span>
          <span>- 조금 더 고급 스럽게 디자인 수정 예정</span>
          <span className="text-lg">4. 특정 사용자 리뷰 및 관람 내역</span>
          <span>
            - 특정 사용자의 리뷰 및 관람 내역을 모두 확인할 수 있는 페이지 또는
            모달 생성
          </span>
          <span className="test-lg">5. 함수 및 변수명 직관적으로 변경</span>
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stage101Modal;
