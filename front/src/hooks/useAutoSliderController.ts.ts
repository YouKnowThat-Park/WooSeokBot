// hooks/useAutoSliderController.ts
import { useEffect, useCallback } from "react";

const useAutoSliderController = (
  ref: React.RefObject<HTMLDivElement>,
  cardWidth = 340,
  intervalTime = 3000
) => {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let scrollIndex = 0;
    let intervalId: NodeJS.Timeout | null = null;

    const scrollNext = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      scrollIndex++;
      const nextScroll = scrollIndex * cardWidth;

      if (nextScroll >= maxScrollLeft) {
        scrollIndex = 0;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({ left: nextScroll, behavior: "smooth" });
      }
    };

    const start = () => {
      intervalId = setInterval(scrollNext, intervalTime);
    };

    const stop = () => {
      if (intervalId) clearInterval(intervalId);
    };

    start();

    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);

    return () => {
      stop();
      container.removeEventListener("mouseenter", stop);
      container.removeEventListener("mouseleave", start);
    };
  }, [ref, cardWidth, intervalTime]);

  const scrollByDirection = useCallback(
    (dir: "left" | "right") => {
      const container = ref.current;
      if (!container) return;

      const offset = dir === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: offset, behavior: "smooth" });
    },
    [ref, cardWidth]
  );

  return { scrollByDirection };
};

export default useAutoSliderController;
