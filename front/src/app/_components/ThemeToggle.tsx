import { counterState } from "@/recoil/ThemeAtom";
import React from "react";
import { useRecoilState } from "recoil";

const ThemeToggle = () => {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
};

export default ThemeToggle;
