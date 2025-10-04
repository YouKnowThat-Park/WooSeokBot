import { PerformanceSectionProps } from "@/type/project/ProjectPerformance-type";
import React from "react";

const Performance = ({ title, performanceItems }: PerformanceSectionProps) => {
  return (
    <div className="flex flex-col py-4 gap-10 w-full h-full mt-10 border dark:text-[#fbfbfb] dark:border-neutral-700">
      <h2 className="text-[20px] font-semibold dark:text-[#3ecf8e] mt-2 ml-2">
        {title}
      </h2>

      {performanceItems.map((item, idx) => (
        <div key={idx} className="ml-10">
          <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
          <ul className="list-disc flex flex-col gap-2 dark:text-gray-300">
            {item.points.map((point, pIdx) => (
              <li key={pIdx} className="mb-1">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Performance;
