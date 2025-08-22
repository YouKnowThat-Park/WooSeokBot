// useAutoScroll.ts
import { useEffect, RefObject } from "react";

const useAutoScroll = (
  chats: unknown[],
  scrollableRef: RefObject<HTMLElement>
): void => {
  useEffect(() => {
    const container = scrollableRef.current;
    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, [chats, scrollableRef]);
};

export default useAutoScroll;
