import React from "react";

interface ProjectOverviewSectionProps {
  title: string;
  items: string[];
}

const ProjectOverview = ({ title, items }: ProjectOverviewSectionProps) => {
  return (
    <div className="mb-6">
      <h3 className="mb-2 text-[28px] md:text-[35px] font-extrabold dark:text-[#3ecf8e]">
        {title}
      </h3>
      <ul className="flex flex-col gap-4 list-disc pl-5 dark:text-gray-300 text-sm md:text-base">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectOverview;
