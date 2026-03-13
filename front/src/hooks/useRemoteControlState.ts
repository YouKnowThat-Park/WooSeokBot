import { useEffect, useState } from "react";

export const useRemoteControlState = (enableChatbot: boolean) => {
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [miniMode, setMiniMode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isTabletOrBelow = window.innerWidth < 1024;

      if (isTabletOrBelow) {
        setMiniMode(true);
        setExpanded(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!enableChatbot) {
      setExpanded(false);
    }
  }, [enableChatbot]);

  return {
    mounted,
    direction,
    setDirection,
    position,
    setPosition,
    miniMode,
    SetMiniMode: setMiniMode,
    expanded,
    setExpanded,
  };
};
