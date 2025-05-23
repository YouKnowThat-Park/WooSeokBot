import { useEffect } from "react";

const useScrollToRef = (
  ref: React.RefObject<HTMLElement>,
  offset: number = 100
) => {
  useEffect(() => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - offset,
        behavior: "smooth",
      });
    }
  }, [ref, offset]);
};

export default useScrollToRef;
