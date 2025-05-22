import Image from "next/image";
import React, { useState } from "react";
import ChattingBox from "./ChattingBox";

const ChatBotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed bottom-10 right-10 z-50 cursor-pointer">
        <Image
          src="/chatbotIcon.png"
          alt="챗봇 아이콘"
          width={75}
          height={75}
          onClick={toggleChat}
        />
      </div>

      {isOpen && <ChattingBox onClose={toggleChat} />}
    </>
  );
};

export default ChatBotIcon;
