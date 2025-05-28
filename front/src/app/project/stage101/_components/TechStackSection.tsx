import React, { useState } from "react";

const TechStackSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-8 w-full flex flex-col items-start ml-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-left w-full text-lg font-bold  hover:underline"
      >
        📌 내가 사용한 기술 스택과 라이브러리 선택 이유 {isOpen ? "▲" : "▼"}
      </button>

      {isOpen && (
        <div className="mt-4 text-sm mx-auto">
          <p className="mb-2 text-gray-600">
            (프로젝트 내에 자세한 설명이 추가되어 있습니다.)
          </p>

          <table className="table-auto w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100 dark:text-black">
              <tr>
                <th className="border px-3 py-2">구분</th>
                <th className="border px-3 py-2">기술</th>
                <th className="border px-3 py-2">선택 이유</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2" rowSpan={2}>
                  Front-end
                </td>
                <td className="border px-3 py-2">React</td>
                <td className="border px-3 py-2">
                  컴포넌트 기반 구조로 사용성과 유지보수성 뛰어나 UI 개발에 유리
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Next.js</td>
                <td className="border px-3 py-2">
                  라우팅, SSR/SSG, 성능 최적화 기능 포함 → 구조화에 유리
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Language</td>
                <td className="border px-3 py-2">TypeScript</td>
                <td className="border px-3 py-2">
                  정적 타입 검사로 안정성 확보, 코드 오류 줄임
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Back-end</td>
                <td className="border px-3 py-2">Supabase</td>
                <td className="border px-3 py-2">
                  Firebase보다 SQL 기반 구조로 명확하고 Next.js와 호환성 높음
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2" rowSpan={4}>
                  Library
                </td>
                <td className="border px-3 py-2">Zustand</td>
                <td className="border px-3 py-2">
                  간단하게 상태 관리 가능, Redux보다 사용성 높음
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">React-Query</td>
                <td className="border px-3 py-2">
                  비동기 데이터 처리, 캐싱, 리페치 등 안정적인 API 연동
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Zod</td>
                <td className="border px-3 py-2">
                  스키마 기반 validation으로 안정성 확보
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Framer-Motion</td>
                <td className="border px-3 py-2">
                  자유로운 애니메이션 구현 및 전환 제어
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Calendar</td>
                <td className="border px-3 py-2">React-calendar</td>
                <td className="border px-3 py-2">
                  간단한 일정 선택 UI 구현 (DayPicker보다 직관적)
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2" rowSpan={2}>
                  API
                </td>
                <td className="border px-3 py-2">Google Identity</td>
                <td className="border px-3 py-2">
                  Auth 연동 + 간편 로그인 구현
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Kakao SDK</td>
                <td className="border px-3 py-2">카카오 로그인 연동</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Payments</td>
                <td className="border px-3 py-2">Toss Payments</td>
                <td className="border px-3 py-2">국내 결제 최적화 솔루션</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Styling</td>
                <td className="border px-3 py-2">Tailwind CSS</td>
                <td className="border px-3 py-2">
                  빠른 개발과 유지보수, 스타일드 컴포넌트보다 간결
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TechStackSection;
