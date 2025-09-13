import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useRemoteControlState = (enableChatbot: boolean) => {
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [miniMode, SetMiniMode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!enableChatbot && expanded) {
      setExpanded(false);
    }
  }, [pathname, enableChatbot, expanded]);

  return {
    mounted,
    setMounted,
    direction,
    setDirection,
    position,
    setPosition,
    miniMode,
    SetMiniMode,
    expanded,
    setExpanded,
  };
};
