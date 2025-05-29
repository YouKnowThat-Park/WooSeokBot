// components/RetrospectiveTemplate.tsx
import React from "react";

type Props = {
  learned: string;
  regret: string;
};

const ProjectRetrospective = ({ learned, regret }: Props) => {
  return (
    <div className="">
      <div className="flex flex-col py-4 px-10 gap-10 w-full h-full mt-10 border dark:text-[#fbfbfb] dark:border-neutral-700">
        <h2 className="font-semibold dark:text-[#3ecf8e]">회고</h2>

        <div>
          <h3 className="font-semibold">배운점</h3>
          <p className="dark:text-gray-300 whitespace-pre-line">{learned}</p>
        </div>

        <div>
          <h3 className="font-semibold">아쉬웠던점</h3>
          <p className="dark:text-gray-300 whitespace-pre-line">{regret}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectRetrospective;
