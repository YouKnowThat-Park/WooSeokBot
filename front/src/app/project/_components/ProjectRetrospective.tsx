import { Retrospective } from "@/type/project/ProjectRetrospective-type";
import React from "react";

const ProjectRetrospective = ({ learned, regret }: Retrospective) => {
  return (
    <div className="w-full h-full mt-10">
      <h2 className="text-[25px] font-semibold text-left px-6 dark:text-[#3ecf8e] mb-6">
        회고
      </h2>

      <div className="mx-6 space-y-6">
        {/* 배운 점 */}
        <div className="rounded-md border border-neutral-300 bg-white dark:bg-[#1a1a1a] dark:border-neutral-700 p-6 shadow-sm">
          <h3 className="text-[18px] font-semibold text-[#3ecf8e] mb-3">
            📌 배운 점
          </h3>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 whitespace-pre-line">
            {learned}
          </p>
        </div>

        {/* 아쉬웠던 점 */}
        <div className="rounded-md border border-neutral-300 bg-white dark:bg-[#1a1a1a] dark:border-neutral-700 p-6 shadow-sm">
          <h3 className="text-[18px] font-semibold text-[#3ecf8e] mb-3">
            🌀 아쉬웠던 점
          </h3>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 whitespace-pre-line">
            {regret}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectRetrospective;
