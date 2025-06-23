"use client";

import { techModalAtom } from "@/recoil/TechModalAtom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projects, studyProjects } from "@/data/project";

const techToProjects: Record<string, string[]> = {
  REACT: ["voirlechemin", "Pokemon", "GhostHouse"],
  NEXT: ["DoGo", "Stage101", "Horoscope", "ToDoList", "WooseokBot"],
  DJANGO: ["WooseokBot"],
  SUPABASE: ["GhostHouse", "Horoscope", "Stage101", "DoGo"],
  ZUSTAND: ["Horoscope", "GhostHouse", "Stage101", "DoGo"],
  RECOIL: ["ToDoList", "WooSeokBot"],
  REACTQUERY: ["ghostHouse", "DoGo", "Stage101", "WooSeokBot"],
  KAKAO_SDK: ["DoGo", "STAGE101", "GhostHouse"],
  TOSS_PAYMENTS: ["DoGo", "STAGE101"],
  GOOGLE_SDK: ["STAGE101"],
  TANSTACK_QUERY: ["STAGE101", "DoGo", "ghostHouse", "WooSeokBot"],
  TAILWIND: [
    "Horoscope",
    "DoGo",
    "Stage101",
    "WooSeokBot",
    "ToDoList",
    "LoL",
    "MBTI",
  ],
  STYLED_COMPONENTS: ["GhostHouse", "voirlechemin", "Pokemon"],
  TYPESCRIPT: ["Stage101", "DoGo", "lolProject", "WooseokBot", "Horoscope"],
  JAVASCRIPT: ["Pokemon", "voirlechemin", "GhostHouse"],
  POSTGRESQL: ["WooseokBot"],
  GIT: [
    "Voirlechemin",
    "todolist",
    "ghostHouse",
    "horoscope",
    "lolProject",
    "pokemon",
    "dogo",
    "stage101",
    "aiChatBot",
    "WooseokBot",
  ],
  GITHUB: [
    "Voirlechemin",
    "todolist",
    "ghostHouse",
    "horoscope",
    "lolProject",
    "pokemon",
    "dogo",
    "stage101",
    "aiChatBot",
    "WooseokBot",
  ],
  SLACK: [
    "Voirlechemin",
    "todolist",
    "ghostHouse",
    "horoscope",
    "lolProject",
    "pokemon",
    "dogo",
  ],
  FIGMA: [
    "Voirlechemin",
    "ghostHouse",
    "horoscope",
    "lolProject",
    "pokemon",
    "dogo",
    "stage101",
    "WooseokBot",
  ],
  NOTION: [
    "Voirlechemin",
    "ghostHouse",
    "horoscope",
    "lolProject",
    "pokemon",
    "dogo",
  ],
};

const combinedProjects = [...projects, ...studyProjects];

const projectMap: Record<string, { image: string; link: string }> =
  combinedProjects.reduce((acc, project) => {
    acc[project.id.toLowerCase().replace(/\s+/g, "")] = {
      image: project.image,
      link: project.link,
    };
    return acc;
  }, {} as Record<string, { image: string; link: string }>);

const TechProjectsModal = () => {
  const [selectedTech, setSelectedTech] = useRecoilState(techModalAtom);
  const { isOpen, name: techName } = selectedTech;
  const router = useRouter();

  if (!isOpen || !techName) return null;

  const projects = techToProjects[techName] || [];

  const handleProjectClick = (projectName: string) => {
    const normalizedName = projectName.toLowerCase().replace(/\s+/g, "");
    const project = projectMap[normalizedName];
    if (!project) return;

    setSelectedTech({ isOpen: false, name: undefined, imageUrl: undefined });
    router.push(project.link);
  };

  return (
    <div className="fixed inset-0 mx-auto bg-black/50 z-50 flex items-center justify-center">
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
            {projects.map((p) => {
              const normalized = p.toLowerCase().replace(/\s+/g, "");
              const project = projectMap[normalized];
              return (
                <li
                  key={p}
                  className="flex items-center gap-3 cursor-pointer hover:underline"
                  onClick={() => handleProjectClick(p)}
                >
                  <Image
                    src={project?.image || "/default.webp"}
                    alt={p}
                    width={40}
                    height={40}
                    className="rounded border shadow-sm"
                  />
                  <span className="text-blue-600 dark:text-blue-400">{p}</span>
                </li>
              );
            })}
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
