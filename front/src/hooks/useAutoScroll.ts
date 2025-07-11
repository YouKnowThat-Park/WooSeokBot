// useAutoScroll.ts
import { useEffect, RefObject } from "react";

const useAutoScroll = (
  deps: ReadonlyArray<unknown>,
  scrollableRef: RefObject<HTMLElement>
): void => {
  useEffect(() => {
    const container = scrollableRef.current;
    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, deps);
};

export default useAutoScroll;
