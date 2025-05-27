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
      <div className="  cursor-pointer">
        <Image
          src="/chatbotIcon.png"
          alt="챗봇 아이콘"
          width={55}
          height={75}
          onClick={toggleChat}
          className="rounded-2xl mr-[150px] mt-2"
        />
      </div>

      {isOpen && <ChattingBox onClose={toggleChat} />}
    </>
  );
};

export default ChatBotIcon;
