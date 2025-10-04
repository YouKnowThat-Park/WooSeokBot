"use client";

import { ProjectDetailsSectionProps } from "@/type/project/Details-type";
import Image from "next/image";
import React from "react";

const ProjectDetails = ({
  title,
  sections,
  imageSize,
}: ProjectDetailsSectionProps) => {
  return (
    <div className="w-full py-10 mt-10 dark:bg-[#2e2e2e] dark:text-[#898989]">
      <h2 className="text-[25px] font-semibold dark:text-[#3ecf8e] mb-8 ml-6">
        {title}
      </h2>
      <div className="space-y-12 px-4 md:px-10">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="rounded-md border border-neutral-300 bg-white dark:bg-[#1a1a1a] dark:border-neutral-700 p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold mb-4 text-[#3ecf8e] text-center">
              {section.title}
            </h3>

            {/* 이미지 */}
            {section.images && (
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {section.images.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image.src}
                    alt={image.alt}
                    width={imageSize?.width}
                    height={imageSize?.height}
                    className="rounded-md border dark:border-neutral-700"
                  />
                ))}
              </div>
            )}

            {/* 비디오 */}
            {section.video && (
              <div className="flex justify-center mb-6">
                <video
                  src={section.video.src}
                  controls
                  autoPlay
                  muted
                  loop
                  poster={section.video.poster}
                  className="w-full max-w-3xl rounded-md shadow-lg"
                />
              </div>
            )}

            {/* 설명 */}
            <ul className="space-y-5">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-left">
                  <p className="font-semibold text-black dark:text-white mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
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
