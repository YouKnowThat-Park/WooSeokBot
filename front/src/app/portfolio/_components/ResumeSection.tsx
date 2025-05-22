import React from "react";

const ResumeSection = () => {
  return (
    <div className="h-[340px] mt-4 bg-white">
      <div className="flex justify-between px-32 mt-10">
        <div className="mt-10">
          <p className="text-[20px]">🎓 학력</p>
          <p className="mt-2">이리공업 고등학교</p>
          <p className="text-sm">디지털전자정보과 2013.03 - 2016.02</p>
        </div>
        <div className="mt-10">
          <p className="text-[20px]">🌱 수료</p>
          <p className="mt-2">KDT 내일배움캠프 React_7기 수료</p>
          <p className="text-sm">2024.09 - 2025.02</p>
        </div>
      </div>
      <div className="flex justify-between px-32 mt-10">
        <div className="mt-10">
          <p className="text-[20px]">📝 자격증</p>
          <p className="mt-2">방송통신기능사</p>
          <p className="text-sm">2015.07</p>
        </div>
        <div className="mt-10">
          <p className="text-[20px]">🚶 경력</p>
          <p className="mt-2">AI 챗봇 플랫폼 기업</p>
          <p className="text-sm">25.04.21 - 25.04.28</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
