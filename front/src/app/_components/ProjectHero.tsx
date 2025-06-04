// /project/_components/ProjectHero.tsx
import Image from "next/image";
import React from "react";

type ProjectHeroProps = {
  title: string;
  imageSrc: string;
  serviceUrl?: string;
  githubUrl?: string;
  description: string;
  devEnv: string;
  type: string;
  imageWidth?: number;
  imageHeight?: number;
};

const ProjectHero = ({
  title,
  imageSrc,
  serviceUrl,
  githubUrl,
  description,
  devEnv,
  type,
  imageWidth = 450,
  imageHeight = 100,
}: ProjectHeroProps) => {
  return (
    <div className="flex gap-4 mt-5">
      {/* Left Image */}
      <div className="flex flex-col">
        {serviceUrl ? (
          <a href={serviceUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageSrc}
              alt={`${title} 이미지`}
              width={imageWidth}
              height={imageHeight}
              className="border-2 rounded-tl-[45px] cursor-pointer"
            />
          </a>
        ) : (
          <Image
            src={imageSrc}
            alt={`${title} 이미지`}
            width={imageWidth}
            height={imageHeight}
            className="border-2 rounded-tl-[45px]"
          />
        )}
        {serviceUrl && (
          <p className="text-sm mx-auto my-2 border-b text-gray-300 border-gray-300 w-fit">
            클릭 시 해당 서비스로 이동합니다.
          </p>
        )}
      </div>

      {/* Right Text */}
      <div className="w-full h-[255px] border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] text-[#111] dark:text-[#fbfbfb] rounded-lg shadow-sm">
        <div className="flex flex-col gap-2 mt-3 ml-4 pr-4">
          <h2 className="text-2xl font-black">{title}</h2>

          {serviceUrl && (
            <p className="font-semibold">
              Service Page :
              <a
                href={serviceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 border-b-2 border-black dark:border-[#fbfbfb] hover:text-[#0070f3]"
              >
                {new URL(serviceUrl).hostname}
              </a>
            </p>
          )}

          <p className="text-sm">Dev Environment : {devEnv}</p>
          <p className="text-sm">Project Introduction: {description}</p>
          <p className="text-sm">Project Type: {type}</p>

          {githubUrl && (
            <p className="text-sm">
              Github:
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 border-b-2 border-black dark:border-[#fbfbfb] hover:text-[#0070f3]"
              >
                {githubUrl.replace("https://", "")}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
