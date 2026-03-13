import React from "react";

const NoticeModal = ({
  onClose,
  onHideToday,
}: {
  onClose: () => void;
  onHideToday: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[460px] rounded-2xl bg-white shadow-2xl dark:bg-[#2e2e2e]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b px-6 py-4 dark:border-neutral-700">
          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              STAGE_101
            </h1>
            <p className="text-xs text-gray-500">
              Amazon Web Services Deployment
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-neutral-700"
          >
            ✕
          </button>
        </div>

        {/* body */}
        <div className="px-6 py-6">
          <div className="mb-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-[#3a2f00] dark:text-amber-300">
            🚧 현재 프로젝트 서버는 비용 관리로 인해 일정 시간에만 열려
            있습니다.
          </div>

          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            STAGE_101 프로젝트는 <b>월요일 ~ 금요일</b> <br />
            <b>오전 9시 ~ 오후 7시</b> 사이에만 접속이 가능합니다.
          </p>
        </div>

        {/* footer */}
        <div className="flex justify-between gap-3 border-t px-6 py-4 dark:border-neutral-700">
          <button
            onClick={onHideToday}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400"
          >
            오늘 하루 보지 않기
          </button>
          <div className="rounded-lg bg-[#082450] px-4 py-2 text-sm font-medium text-white hover:bg-[#061a3b]">
            박우석 드림.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
