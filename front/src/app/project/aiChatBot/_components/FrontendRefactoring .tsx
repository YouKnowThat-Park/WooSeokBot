import React from "react";

const FrontendRefactoring = () => {
  return (
    <div className="w-full h-full mt-10 border border-neutral-300 dark:text-[#fbfbfb] dark:bg-[#2e2e2e] dark:border-neutral-700 px-8 py-6">
      <h2 className="text-xl font-semibold mb-6">프론트 리팩토링</h2>

      {/* Zustand */}
      <details className="group mb-6 transition-all rounded-md border border-neutral-300 bg-white open:bg-[#fbfbfb] dark:bg-[#1a1a1a]">
        <summary className="cursor-pointer font-medium  px-4 py-3">
          Context API → Zustand 변경
        </summary>
        <div className="mt-3 px-4 pb-4 text-sm leading-relaxed text-black dark:text-[#fbfbfb]">
          기존 입력값은 Context API로 관리되고 있어 리렌더링 성능 저하 및
          유지보수 문제가 발생합니다. 이를 <strong>Zustand</strong>로 대체하여
          단일 store 기반의 효율적인 상태관리 구조로 개선했습니다.
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>너무 많은 Provider → Context Hell (가독성↓, 유지보수↓)</li>
            <li>상태 변화 시 모든 Provider 리렌더링 발생 → 성능 저하</li>
            <li>createContext 등 보일러플레이트 코드 많음</li>
            <li>트리구조 의존성 문제로 디버깅 어려움</li>
          </ul>
          <p className="mt-3 font-medium text-green-600">✅ 리팩토링 후 장점</p>
          <ul className="list-disc list-inside space-y-1">
            <li>필요한 상태만 선택적으로 호출 가능</li>
            <li>단일 store 사용으로 디버깅 및 유지보수 용이</li>
            <li>코드 간결, 보일러플레이트 감소</li>
          </ul>
        </div>
      </details>

      {/* Uploader */}
      <details className="group mb-6 transition-all rounded-md border border-neutral-300 bg-white open:bg-[#fbfbfb] dark:bg-[#1a1a1a]">
        <summary className="cursor-pointer font-medium px-4 py-3">
          Uploader 노출 위치 개선
        </summary>
        <div className="mt-3 px-4 pb-4 text-sm leading-relaxed text-black dark:text-[#fbfbfb]">
          기존에는 특정 입력 이후에만 Uploader가 노출되어 UX 저하가
          발생했습니다. 이를 초기 화면에서 바로 접근 가능하도록 개선했습니다.
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>업로더 존재 자체를 모르는 경우가 많았음</li>
            <li>파일 하나마다 입력 반복 → UX 피로도 증가</li>
            <li>조건부 렌더링으로 인한 mount/unmount 반복</li>
            <li>모델 인식 fetch 비용 증가</li>
          </ul>
          <p className="mt-3 font-medium text-green-600">✅ 개선 효과</p>
          <ul className="list-disc list-inside space-y-1">
            <li>기능 가시성 증가</li>
            <li>복수 파일 처리 간소화</li>
            <li>서버 호출 최적화</li>
          </ul>
        </div>
      </details>

      {/* useEffect → Custom Hook */}
      <details className="group mb-6 transition-all rounded-md border border-neutral-300 bg-white open:bg-[#fbfbfb] dark:bg-[#1a1a1a]">
        <summary className="cursor-pointer font-medium  px-4 py-3">
          중복 useEffect → Custom Hook 리팩토링
        </summary>
        <div className="mt-3 px-4 pb-4 text-sm leading-relaxed text-black dark:text-[#fbfbfb]">
          동일 로직이 여러 파일에 중복되어 있는 useEffect를 Custom Hook으로
          통합하여 유지보수성을 높였습니다.
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>23개 이상의 파일에 같은 로직 존재 → 변경 시 전체 수정 필요</li>
            <li>안티패턴 구조 → 협업 시 혼란 유발</li>
          </ul>
          <p className="mt-3 font-medium text-green-600">✅ 개선 효과</p>
          <ul className="list-disc list-inside space-y-1">
            <li>중복 제거 및 코드 간결화</li>
            <li>단일 위치 수정으로 전체 적용 가능</li>
          </ul>
        </div>
      </details>

      {/* 타이핑 효과 */}
      <details className="group mb-6 transition-all rounded-md border border-neutral-300 bg-white open:bg-[#fbfbfb] dark:bg-[#1a1a1a]">
        <summary className="cursor-pointer font-medium  px-4 py-3">
          타이핑 효과 → setInterval → setTimeout 개선
        </summary>
        <div className="mt-3 px-4 pb-4 text-sm leading-relaxed text-black dark:text-[#fbfbfb]">
          기존 setInterval 기반 타이핑 효과는 리렌더링 과다 유발. setTimeout
          또는 requestAnimationFrame 기반 구조로 전환 권장.
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>글자 수 × setState → 성능 저하</li>
            <li>백그라운드 탭에서 정확한 타이밍 보장 불가</li>
            <li>CPU 부담 및 배터리 사용량 증가</li>
          </ul>
          <p className="mt-3 font-medium text-green-600">✅ 개선 효과</p>
          <ul className="list-disc list-inside space-y-1">
            <li>부드러운 UX (60fps 기반)</li>
            <li>불필요한 리렌더링 방지</li>
            <li>취소 및 메모리 관리 용이</li>
          </ul>
        </div>
      </details>

      {/* 모델 감지 실패 */}
      <details className="group transition-all rounded-md border border-neutral-300 bg-white open:bg-[#fbfbfb] dark:bg-[#1a1a1a]">
        <summary className="cursor-pointer font-medium  px-4 py-3">
          모델 감지 실패 UX 메시지 강화
        </summary>
        <div className="mt-3 px-4 pb-4 text-sm leading-relaxed text-black dark:text-[#fbfbfb]">
          모델 감지 실패 시 사용자 안내 없이 버튼 비활성화 → UX 혼란 유발.
          메시지 안내 도입으로 사용자 납득 가능한 흐름 제공.
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>버튼 비활성화 이유를 사용자가 알 수 없음</li>
            <li>개발자 측 디버깅 불가</li>
            <li>오류로 오해할 가능성 있음</li>
          </ul>
          <p className="mt-3 font-medium text-green-600">✅ 개선 효과</p>
          <ul className="list-disc list-inside space-y-1">
            <li>사용자 안내 메시지로 UX 개선</li>
            <li>재질문 유도 → 전환율 증가</li>
          </ul>
        </div>
      </details>
    </div>
  );
};

export default FrontendRefactoring;
