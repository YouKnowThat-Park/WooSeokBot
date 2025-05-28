import React from "react";

const ProjectGoalsSection = () => {
  return (
    <div className="mt-10">
      <h3 className="text-[18px] font-semibold">⛳ 프로젝트 목표</h3>
      <ul className="flex flex-col gap-4 list-disc mt-3">
        <li>다양한 기능을 직접 구현하며 기술 스펙트럼을 확장 시키기 위함</li>
        <li>실제 서비스처럼 유저 흐름이 완성된 플랫폼을 목표</li>
        <li>
          단순히 개발 만의 목적이 아닌 기획&설계 관점에서도 비지니스 서비스
          극대화
        </li>
        <li>사용자의 경험과 동선을 중심에 두고 기능을 설계</li>
      </ul>
    </div>
  );
};

export default ProjectGoalsSection;
