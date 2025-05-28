import React from "react";

const TeamRolesSection = () => {
  return (
    <table className="table-auto w-[600px] border border-gray-300 text-sm mx-auto mt-10">
      <thead className="bg-gray-100 dark:bg-[#222]">
        <tr>
          <th className="border px-4 py-2 text-left">역할</th>
          <th className="border px-4 py-2 text-left">이름</th>
          <th className="border px-4 py-2 text-left">담당 업무</th>
        </tr>
      </thead>
      <tbody className="text-gray-800 dark:text-gray-100">
        <tr>
          <td className="border px-4 py-2">
            👨‍💻 <strong>프론트엔드</strong>
          </td>
          <td className="border px-4 py-2">박우석</td>
          <td className="border px-4 py-2 font-semibold">
            전체 페이지 설계 UI/UX 흐름 구현
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">🧑‍💻 백엔드</td>
          <td className="border px-4 py-2">박우석</td>
          <td className="border px-4 py-2">Supabase Schema 구성, SQL 작성</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">🎨 디자이너</td>
          <td className="border px-4 py-2">박우석</td>
          <td className="border px-4 py-2">사용자 흐름에 맞춘 UI/UX 설계</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">📝 기획</td>
          <td className="border px-4 py-2">박우석</td>
          <td className="border px-4 py-2">STAGE_101 관련 컨셉과 기능 설계</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TeamRolesSection;
