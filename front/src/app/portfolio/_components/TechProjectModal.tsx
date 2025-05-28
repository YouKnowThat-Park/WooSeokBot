"use client";

import { techModalAtom } from "@/recoil/TechModalAtom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import Image from "next/image";

const techToProjects: Record<string, string[]> = {
  REACT: ["vairlechemin", "Pokemon", "MBTI", "GhostHouse"],
  NEXT: ["DoGo", "Stage101", "Horoscope", "ToDoList"],
  DJANGO: ["WooseokBot"],
  SUPABASE: ["GhostHouse", "Horoscope", "Stage101", "DoGo"],
  ZUSTAND: ["Horoscope", "GhostHouse", "Stage101", "DoGo"],
  RECOIL: ["ToDoList", "WooSeokBot"],
  REACTQUERY: ["GhostHouse", "DoGo", "Stage101", "WooSeokBot"],
  KAKAO_SDK: ["DoGo", "STAGE101", "GhostHouse"],
  TOSS_PAYMENTS: ["DoGo", "STAGE101"],
  GOOGLE_SDK: ["STAGE101"],
  TANSTACK_QUERY: ["STAGE101", "DoGo", "GhoHouse", "WooSeokBot"],
  TAILWIND: [
    "Horoscope",
    "DoGo",
    "Stage101",
    "WooSeokBot",
    "ToDoList",
    "LoL",
    "MBTI",
  ],
  STYLED_COMPONENTS: ["GhostHouse", "vairlechemin", "Pokemon", "MBTI"],
  TYPESCRIPT: ["Stage101", "DoGo", "LOL", "WooseokBot", "Horoscope"],
  JAVASCRIPT: ["Pokemon", "vairlechemin", "MBTI", "GhostHouse"],
};

const toImageSrc = (projectName: string) =>
  `/${projectName.toLowerCase().replace(/\s+/g, "-")}.png`;

const TechProjectsModal = () => {
  const [selectedTech, setSelectedTech] = useRecoilState(techModalAtom);
  const { isOpen, name: techName } = selectedTech;
  const router = useRouter();

  if (!isOpen || !techName) return null;

  const projects = techToProjects[techName] || [];

  const handleProjectClick = (projectName: string) => {
    setSelectedTech({ isOpen: false, name: undefined, imageUrl: undefined });
    router.push(`/project/${projectName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-[#1b1b1b] p-6 rounded shadow-lg max-w-md w-full relative text-center dark:text-white">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white"
          onClick={() =>
            setSelectedTech({
              isOpen: false,
              name: undefined,
              imageUrl: undefined,
            })
          }
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-4">🛠 {techName} 사용 프로젝트</h2>

        {projects.length > 0 ? (
          <ul className="space-y-4">
            {projects.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 cursor-pointer hover:underline"
                onClick={() => handleProjectClick(p)}
              >
                <Image
                  src={toImageSrc(p)}
                  alt={p}
                  width={40}
                  height={40}
                  className="rounded border shadow-sm"
                />
                <span className="text-blue-600 dark:text-blue-400">{p}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            관련 프로젝트 없음
          </p>
        )}
      </div>
    </div>
  );
};

export default TechProjectsModal;
