"use client";

import { useEffect, useState } from "react";

const KoreanTimeMinute = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    let timeoutRef: NodeJS.Timeout;

    const updateTime = () => {
      const now = new Date();
      const kst = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
      );
      const hours = String(kst.getHours()).padStart(2, "0");
      const minutes = String(kst.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);

      const delay = 60000 - (kst.getSeconds() * 1000 + kst.getMilliseconds());
      timeoutRef = setTimeout(updateTime, delay);
    };

    updateTime();
    return () => clearTimeout(timeoutRef);
  }, []);

  return <>{time}</>;
};

export default KoreanTimeMinute;
