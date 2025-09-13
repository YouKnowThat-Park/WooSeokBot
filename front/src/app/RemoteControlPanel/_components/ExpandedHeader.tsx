import { ExpandedHeaderProps } from "@/type/ChatbotControler-type";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const ExpandedHeader = ({
  setExpanded,
  setPosition,
  setDirection,
  onChatbotClose,
  displayProjectName,
}: ExpandedHeaderProps) => {
  return (
    <>
      <div className="relative mb-4 h-8 flex items-center justify-center">
        <button
          onClick={() => {
            setExpanded(false);
            setPosition({ x: 0, y: 0 });
            setDirection("right");
            onChatbotClose?.();
          }}
          className="absolute left-0 text-gray-500 hover:text-black dark:hover:text-white transition"
          aria-label="뒤로 가기"
        >
          <IoIosArrowRoundBack className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-black dark:text-white">
          {displayProjectName} 전용 챗봇
        </h2>
      </div>
    </>
  );
};

export default ExpandedHeader;
