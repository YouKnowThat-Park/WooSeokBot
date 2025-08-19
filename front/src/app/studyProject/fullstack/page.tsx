import ProjectHero from "@/app/_components/ProjectHero";
import React from "react";

const page = () => {
  return (
    <div className="w-[970px] h-full mt-[100px]  mb-[10px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg">
      <ProjectHero
        title="FullStack"
        imageSrc="/study.png"
        githubUrl="https://github.com/YouKnowThat-Park/FullStack_Project"
        description="풀스택으로 모든 기능을 다 사용해보는 프로젝트"
        devEnv="Next.js, TypeScript, Vercel, Python, Django, PostgreSQL"
        type="개인 프로젝트"
        imageWidth={360}
        imageHeight={200}
      />
    </div>
  );
};

export default page;
