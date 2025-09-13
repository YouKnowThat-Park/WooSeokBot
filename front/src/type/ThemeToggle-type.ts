export type ThemeToggleProps = {
  onChatbotClick?: (direction: "left" | "right") => void;
  onChatbotClose?: () => void;
  enableChatbot?: boolean;
};
