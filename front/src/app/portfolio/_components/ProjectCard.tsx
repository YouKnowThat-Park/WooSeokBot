// app/_components/ProjectCard.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export interface ProjectCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
  link: string;
  role: string;
}

const ProjectCard = ({
  title,
  date,
  image,
  description,
  link,
  role,
}: ProjectCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <button
      onClick={handleClick}
      className="min-w-[350px] max-w-[350px] snap-start flex-shrink-0 border p-2 rounded-lg bg-white shadow hover:scale-[1.02] transition-transform dark:bg-[#3a3a3a]"
    >
      <div className="w-full h-[200px] overflow-hidden rounded-md border">
        <Image
          src={image}
          alt={title}
          width={350}
          height={200}
          className="object-cover"
        />
      </div>
      <p className="font-semibold mt-2">{title}</p>
      <p className="text-xs text-gray-500 dark:text-[#fbfdfb]">{description}</p>
      <p className="text-xs text-gray-500 dark:text-[#fbfdfb]">{role}</p>
      <p className="text-xs text-gray-400 dark:text-[#fbfdfb]">{date}</p>
    </button>
  );
};

export default ProjectCard;
