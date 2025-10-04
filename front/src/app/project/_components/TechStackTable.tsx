"use client";

import {
  TechItem,
  TechStackTableProps,
} from "@/type/project/ProjectTechStack-type";
import React from "react";

const groupByCategory = (items: TechItem[]) => {
  const grouped: Record<string, TechItem[]> = {};
  for (const item of items) {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  }
  return grouped;
};

const TechStackTable = ({ title, description, items }: TechStackTableProps) => {
  const grouped = groupByCategory(items);

  return (
    <div className="my-8 w-[700px] flex flex-col items-start ml-10">
      <p className="font-semibold mb-2">{title}</p>

      <div className="mt-2 text-sm mx-auto w-full max-w-[900px]">
        {description && (
          <p className="mb-2 text-gray-600 dark:text-gray-400">{description}</p>
        )}

        <table className="table-auto w-full border border-gray-300 text-left text-sm">
          <thead className="bg-gray-100 dark:bg-[#222] dark:text-white">
            <tr>
              <th className="border px-3 py-2">구분</th>
              <th className="border px-3 py-2">기술</th>
              <th className="border px-3 py-2">선택 이유</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-100">
            {Object.entries(grouped).map(([category, techs]) =>
              techs.map((item, i) => (
                <tr key={`${category}-${item.tech}`}>
                  {i === 0 && (
                    <td
                      rowSpan={techs.length}
                      className="border px-3 py-2 font-semibold align-top whitespace-nowrap"
                    >
                      {category}
                    </td>
                  )}
                  <td className="border px-3 py-2 whitespace-nowrap">
                    {item.tech}
                  </td>
                  <td className="border px-3 py-2">{item.reason}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechStackTable;
