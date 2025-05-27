"use client";

import { techModalAtom } from "@/recoil/TechModalAtom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";

const techToProjects: Record<string, string[]> = {
  REACT: ["WooseokBot", "Stage101"],
  NEXT: ["Portfolio", "DoGo"],
  DJANGO: ["WooseokBot"],
  SUPABASE: ["GhostHouse", "Horoscope"],
};

const TechProjectsModal = () => {
  const [selectedTech, setSelectedTech] = useRecoilState(techModalAtom);
  const { isOpen, name: techName } = selectedTech;
  const router = useRouter();

  if (!isOpen || !techName) return null;

  const projects = techToProjects[techName] || [];

  const handleProjectClick = (projectName: string) => {
    setSelectedTech({ isOpen: false, name: undefined, imageUrl: undefined });
    router.push(`/project/${projectName.toLowerCase()}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative text-center">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
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
          <ul className="space-y-2">
            {projects.map((p) => (
              <li
                key={p}
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => handleProjectClick(p)}
              >
                • {p}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">관련 프로젝트 없음</p>
        )}
      </div>
    </div>
  );
};

export default TechProjectsModal;
