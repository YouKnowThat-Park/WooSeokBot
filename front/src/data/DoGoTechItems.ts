export const DoGoTechItems = [
  {
    category: "Front-end",
    tech: "React",
    reason:
      "컴포넌트 기반의 구조로 UI 개발에 유연하고 확장성이 뛰어나, 복잡한 화면 구성에 적합하다고 판단했습니다.",
  },
  {
    category: "Front-end",
    tech: "Next.js",
    reason:
      "React의 기능 위에 SSR, SSG, 라우팅, 이미지 최적화 등을 기본 제공하여, SEO와 초기 렌더링 속도 개선에 효과적이었습니다. (포털 예약 플랫폼 특성상 이미지가 엄청 많이 들어감)",
  },
  {
    category: "Language",
    tech: "TypeScript",
    reason:
      "정적 타입 지원을 통해 런타임 오류를 줄이고, 협업 및 유지보수 시 코드 안정성과 생산성을 높일 수 있다 판단하여 도입하게 되었습니다.",
  },
  {
    category: "Back-end",
    tech: "Supabase",
    reason:
      "Firebase 대비 SQL 기반으로 구조가 명확하고, 실시간 기능, 인증, 스토리지 등을 통합적으로 제공합니다. PostgreSQL 기반이라 리레이션 데이터 처리에 유리하고, Next.js와도 호환성이 뛰어나 빠르게 개발하고 유지보수하기 좋았습니다.",
  },
  {
    category: "library",
    tech: "Zustand",
    reason:
      "팀원 모두에게 익숙한 상태 관리 라이브러리로 Zustand를 사용했습니다. Redux나 Recoil에 비해 설정이 간단하고, 코드가 간결해 빠른 적용과 유지 보수가 용이했습니다.",
  },
  {
    category: "library",
    tech: "React Query",
    reason:
      "팀원 모두에게 익숙한 데이터 패칭 라이브러리인 React Query를 사용했습니다. 전역 상태로 관리하지 않아도 되고 복잡한 조건 없이 API 요청, 캐싱, 토큰 재활용을 간편하게 구현할 수 있어 빠른 개발과 유지보수에 유리했습니다.",
  },
  {
    category: "API",
    tech: "Kakao Map",
    reason:
      "한국 사용자를 주로 타겟으로 하기 때문에, 국내에서 가장 친숙한 카카오맵 API를 사용했습니다. (한국 주소 체계와 도로명, 장소 정보에 최적화되어 있습니다.)",
  },
  {
    category: "Deployment",
    tech: "Vercel",
    reason:
      "Next.js 공식 배포 플랫폼인 Vercel을 사용해, 별도 설정 없이도 빠른 배포, 이미지 최적화, 서버리스 기능을 효율적으로 적용할 수 있었습니다.",
  },
  {
    category: "Styling",
    tech: "TailWind CSS",
    reason:
      "빠르게 스타일을 적용하고 컴포넌트 간 이동 없이 직접 작성 및 추적할 수 있는 작업 흐름이 편했습니다. 유지보수도 쉽고 간편하다고 판단했습니다. 또한 반응형 스타일링 지원이 용이해 모바일(320px), 데스크탑 환경에서 일관된 UI 제공에 유리했습니다.",
  },
];
