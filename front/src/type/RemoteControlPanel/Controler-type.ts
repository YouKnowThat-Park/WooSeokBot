export type ChatbotDirection = "left" | "right";

export interface ChatbotControllerProps {
  enableChatbot?: boolean;
  onChatbotClick?: (direction: ChatbotDirection) => void;
  onChatbotClose?: () => void;
  setDirection?: (direction: ChatbotDirection) => void;
  setExpanded?: (expanded: boolean) => void;
}

export interface ExpandedHeaderProps {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  setDirection: React.Dispatch<React.SetStateAction<ChatbotDirection>>;
  onChatbotClose?: () => void;
  displayProjectName: string;
}
