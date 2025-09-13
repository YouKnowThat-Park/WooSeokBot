export type ChatbotDirection = "left" | "right";

export type ChatbotControllerProps = {
  enableChatbot?: boolean;
  onChatbotClick?: (direction: ChatbotDirection) => void;
  onChatbotClose?: () => void;
  setDirection: (direction: ChatbotDirection) => void;
  setExpanded: (expanded: boolean) => void;
};
