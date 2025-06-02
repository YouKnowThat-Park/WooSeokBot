import React from "react";
import ProjectHero from "../../_components/ProjectHero";

const page = () => {
  return (
    <div className="w-[970px] h-full mt-[100px] mb-[84px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6 border dark:border-black dark:bg-[#2e2e2e] dark:shadow-lg">
      <ProjectHero
        title="AiChatBot"
        imageSrc="/aichatbot.png"
        serviceUrl="https://do-go-project.vercel.app/"
        githubUrl="https://github.com/Noonsae/DoGo_project"
        description="호텔 예약 페이지"
        devEnv="Next.js, TypeScript, Vercel"
        type="팀 프로젝트"
      />
    </div>
  );
};

export default page;
