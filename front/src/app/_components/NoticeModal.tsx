"use client";

import { useState } from "react";

const NoticeModal = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-2">🚧 서비스 준비 중</h2>
        <p className="text-gray-600 mb-4">
          현재 이 서비스는 개발 중에 있습니다.
          <br />
          빠른 시일 내에 오픈될 예정입니다.
        </p>
        <button
          onClick={() => setVisible(false)}
          className="px-4 py-2 bg-black text-white rounded hover:opacity-80"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default NoticeModal;
