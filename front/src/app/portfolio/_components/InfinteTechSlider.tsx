"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const stackItems = [
  {
    title: "Front-End",
    icons: [
      "/react.png",
      "/next.png",
      "/html5.png",
      "/javascript.png",
      "/vscode.png",
      "/typescript.png",
    ],
  },
  {
    title: "Back-End",
    icons: ["/django.png", "/supabase.png"],
  },
  {
    title: "Lib",
    icons: ["/zustand.png", "/tanstack_query-react_query.png", "/recoil.png"],
  },
  {
    title: "Style",
    icons: ["/tailwind.png", "/css3.png", "/styled-components.png"],
  },
  {
    title: "DB, Deployment",
    icons: ["/postgresql.png", "/supabase.png", "/vercel.png"],
  },
  {
    title: "External Services",
    icons: ["/kakao_sdk.png", "/toss_payments.png", "/google_sdk.png"],
  },
  {
    title: "Collaboration & Tools",
    icons: [
      "/git.png",
      "/github.png",
      "/slack.png",
      "/figma.png",
      "/notion.png",
    ],
  },
];

const ITEM_WIDTH = 210;

const InfiniteTechSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const fullList = [...stackItems, ...stackItems]; // 무한 캐러셀 위해 복제

  const handleSlide = (dir: "left" | "right") => {
    setIsTransitioning(true);
    setOffset((prev) => (dir === "left" ? prev - 1 : prev + 1));
  };

  useEffect(() => {
    const len = stackItems.length;
    if (offset >= len) {
      setTimeout(() => {
        setIsTransitioning(false);
        setOffset(0);
      }, 500);
    }
    if (offset < 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setOffset(len - 1);
      }, 500);
    }
  }, [offset]);

  return (
    <div className="relative mt-10 w-full overflow-hidden">
      {/* 좌우 버튼 */}
      <button
        onClick={() => handleSlide("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 px-2 py-1 rounded"
      >
        ←
      </button>
      <button
        onClick={() => handleSlide("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 px-2 py-1 rounded"
      >
        →
      </button>

      <div className="overflow-hidden w-full px-6">
        <div
          ref={containerRef}
          className={`flex gap-2 ${
            isTransitioning ? "transition-transform duration-500" : ""
          }`}
          style={{
            transform: `translateX(-${offset * ITEM_WIDTH}px)`,
            width: `${fullList.length * ITEM_WIDTH}px`,
          }}
        >
          {fullList.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="w-[200px] h-[200px] bg-white p-2 text-center text-sm rounded shadow shrink-0"
            >
              <strong>{item.title}</strong>
              <div className="grid grid-cols-3 gap-2 justify-items-center items-center mt-4">
                {item.icons.map((src) => {
                  const name = src
                    .split("/")
                    .pop()
                    ?.replace(".png", "")
                    .replace(".svg", "")
                    .toUpperCase();

                  return (
                    <div className="relative group" key={src}>
                      <Image
                        src={src}
                        alt={name || "tech"}
                        width={45}
                        height={45}
                        className="border rounded-full"
                      />
                      <span className="absolute bottom-full mb-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-[500ms] whitespace-nowrap z-50">
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteTechSlider;
