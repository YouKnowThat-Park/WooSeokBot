"use client";

import Image from "next/image";
import React from "react";

type ProjectItem = {
  title: string;
  content: string;
};

type ProjectSection = {
  title: string;
  images?: { src: string; alt: string }[];
  items: ProjectItem[];
};

type ProjectDetailsSectionProps = {
  title: string;
  sections: ProjectSection[];
  imageSize?: {
    width: number;
    height: number;
  };
};

const ProjectDetails = ({
  title,
  sections,
  imageSize,
}: ProjectDetailsSectionProps) => {
  return (
    <div className="w-full h-full py-10 mt-10 dark:bg-[#2e2e2e] dark:text-[#898989]">
      <h2 className="text-[25px] font-semibold dark:text-[#3ecf8e] mb-4 ml-6">
        {title}
      </h2>
      <div className="space-y-16">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="border px-4 py-4 dark:border-neutral-700"
          >
            <h3 className="text-[18px] font-bold mb-4 text-[#3ecf8e]">
              {section.title}
            </h3>
            {section.images && (
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {section.images.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image.src}
                    alt={image.alt}
                    width={imageSize?.width}
                    height={imageSize?.height}
                  />
                ))}
              </div>
            )}
            <ul className="list-disc space-y-4 ml-6">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <p className="dark:text-[#FBFBFB] font-semibold">
                    {item.title}
                  </p>
                  <p className="dark:text-gray-300 whitespace-pre-line">
                    {item.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
