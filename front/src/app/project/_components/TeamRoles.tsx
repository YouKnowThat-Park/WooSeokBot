import React from "react";

interface TeamMember {
  role: string;
  name: string;
  task: string;
}

interface TeamRolesSectionProps {
  title?: string;
  members: TeamMember[];
}

const TeamRoles = ({ title, members }: TeamRolesSectionProps) => {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-left w-[600px]">
          {title}
        </h3>
      )}
      <table className="table-auto w-[600px] border border-gray-300 text-sm">
        <thead className="bg-gray-100 dark:bg-[#222]">
          <tr>
            <th className="border px-4 py-2 text-left">역할</th>
            <th className="border px-4 py-2 text-left">이름</th>
            <th className="border px-4 py-2 text-left">담당 업무</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 dark:text-gray-100">
          {members.map((member, index) => (
            <tr key={`${member.name}-${index}`}>
              <td className="border px-4 py-2 whitespace-nowrap">
                {member.role}
              </td>
              <td className="border px-4 py-2 whitespace-nowrap">
                {member.name}
              </td>
              <td className="border px-4 py-2">{member.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamRoles;
