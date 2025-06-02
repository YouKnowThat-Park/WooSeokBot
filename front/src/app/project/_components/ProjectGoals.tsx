"use client";

import React from "react";

type ProjectGoalsProps = {
  goals: string[];
};

const ProjectGoals = ({ goals }: ProjectGoalsProps) => {
  return (
    <div className="mt-10">
      <h3 className="text-[18px] font-semibold">⛳ 프로젝트 목표</h3>
      <ul className="flex flex-col gap-4 list-disc mt-3 ml-4">
        {goals.map((goal, idx) => (
          <li key={idx}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectGoals;
