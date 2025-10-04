import { ProjectDescriptionSectionProps } from "@/type/project/ProjectDescriptSection-type";
import React from "react";

const ProjectDescription = ({
  title,
  paragraphs,
}: ProjectDescriptionSectionProps) => {
  return (
    <div className="mb-10 mx-4 mt-10 md:mx-10 rounded-md border border-neutral-300 bg-white dark:bg-[#1a1a1a] dark:border-neutral-700 p-6 md:p-10">
      <div className="flex flex-col justify-center items-center text-sm md:text-base text-center leading-relaxed">
        <h2 className="text-[22px] md:text-[25px] font-semibold mb-6 text-black dark:text-white">
          {title}
        </h2>
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="mb-3 text-neutral-800 dark:text-neutral-300"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDescription;
