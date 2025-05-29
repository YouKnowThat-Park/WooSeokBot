import React from "react";

interface ProjectDescriptionSectionProps {
  title: string;
  paragraphs: string[];
}

const ProjectDescription = ({
  title,
  paragraphs,
}: ProjectDescriptionSectionProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-sm md:text-base text-center leading-relaxed">
      <h2 className="w-auto mt-4 text-[25px] font-semibold mb-4">{title}</h2>
      {paragraphs.map((text, index) => (
        <p key={index} className="mb-1">
          {text}
        </p>
      ))}
    </div>
  );
};

export default ProjectDescription;
