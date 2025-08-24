"use client";

import { techModalAtom } from "@/recoil/TechModalAtom";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";

const stackItems = [
  {
    title: "Front-End",
    icons: [
      "/react.webp",
      "/next.webp",
      "/html5.webp",
      "/javascript.webp",
      "/vscode.webp",
      "/typescript.webp",
    ],
  },
  {
    title: "Back-End",
    icons: ["/django.webp", "/supabase.webp"],
  },
  {
    title: "Lib",
    icons: ["/zustand.webp", "/tanstack_query.webp", "/recoil.webp"],
  },
  {
    title: "Style",
    icons: ["/tailwind.webp", "/css3.webp", "/styled_components.webp"],
  },
  {
    title: "DB, Deployment",
    icons: [
      "/postgresql.webp",
      "/supabase.webp",
      "/vercel.webp",
      "/render.webp",
    ],
  },
  {
    title: "External Services",
    icons: ["/kakao_sdk.webp", "/toss_payments.webp", "/google_sdk.webp"],
  },
  {
    title: "Collaboration & Tools",
    icons: [
      "/git.webp",
      "/github.webp",
      "/slack.webp",
      "/figma.webp",
      "/notion.webp",
    ],
  },
];

const ITEM_WIDTH = 210;

const InfiniteTechSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const fullList = [...stackItems, ...stackItems]; // 무한 캐러셀 위해 복제

  const setSelectedTech = useSetRecoilState(techModalAtom);

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
    <div className="relative mt-10 mx-auto overflow-hidden">
      {/* 좌우 버튼 */}
      <button
        onClick={() => handleSlide("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-black/60 px-2 py-1 rounded "
        aria-label="기술스택 왼쪽으로 넘기기"
      >
        ←
      </button>
      <button
        onClick={() => handleSlide("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-black/60  px-2 py-1 rounded"
        aria-label="기술스택 오른쪽으로 넘기기"
      >
        →
      </button>

      <div className="overflow-hidden w-full px-6 ">
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
              className="w-[200px] h-[200px] bg-white  dark:bg-[#3a3a3a] border border-white dark:border-gray-400  p-2 text-center text-sm rounded shadow shrink-0 dark:text-[#F4F5F4]"
            >
              <strong>{item.title}</strong>
              <div className="grid grid-cols-3 gap-2 justify-items-center items-center mt-4">
                {item.icons.map((src) => {
                  const name = src
                    .split("/")
                    .pop()
                    ?.replace(".webp", "")
                    .replace(".svg", "")
                    .toUpperCase();

                  return (
                    <div className="relative group" key={src}>
                      <Image
                        src={src}
                        alt={name || "tech"}
                        width={45}
                        height={45}
                        className="border rounded-full cursor-pointer transition-transform duration-200 hover:scale-110"
                        onClick={() =>
                          setSelectedTech({
                            isOpen: true,
                            name: name || "",
                            imageUrl: src,
                          })
                        }
                      />
                      <span className="absolute bottom-full mb-1 px-2 py-1 text-xs bg-black  text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-[500ms] whitespace-nowrap z-50">
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
