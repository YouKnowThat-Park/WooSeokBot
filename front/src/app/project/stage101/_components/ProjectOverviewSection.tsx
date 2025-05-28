import React from "react";

const ProjectOverviewSection = () => {
  return (
    <div>
      <h3 className="mb-2 text-[35px] font-extrabold dark:text-[#3ecf8e] ">
        Project Overview
      </h3>
      <ul className="flex flex-col gap-4 list-disc">
        <li>프로젝트명 : STAGE_101</li>
        <li>
          한줄 설명 : 하나의 공간에서 무한한 가능성을 단 한 번의 경험으로
          STAGE_101
        </li>
        <li>
          반응형 디자인 : 모든 페이지는 최소 430px을 기준으로 반응형 구현되어
          모바일,데스크탑 모두 최적화 되었습니다.
        </li>
        <li>개발 기간 : 4~5주 정도 진행 되었습니다.</li>
      </ul>
    </div>
  );
};

export default ProjectOverviewSection;
