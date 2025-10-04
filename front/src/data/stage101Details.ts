import { ProjectSection } from "@/type/project/ProjectSection-type";

export const Stage101Details: ProjectSection[] = [
  {
    title: "Sign In, Sign Up",
    images: [
      { src: "/stage101auth.webp", alt: "스테이지 로그인 이미지" },
      { src: "/stage101auth2.webp", alt: "스테이지 회원가입 이미지" },
    ],
    items: [
      {
        title: "CSR & Server Actions",
        content: `사용자 입력이 많은 인증(Auth)에서는 SSR보다 CSR이 더 적합하며,
Server Actions를 활용해 민감한 로직을 서버에서 처리하여 보안성을 높였습니다.`,
      },
      {
        title: "RHF, Zod",
        content: `Zod를 사용해 유효성 검사를 동기적으로 처리하고, 런타임 타입 체크를 병행하여 안정성 확보
RHF를 통해 입력 필드 단위로 상태를 관리해 불필요한 리렌더링을 줄이고 성능을 개선`,
      },
      {
        title: "Remember Email",
        content: `사용자가 매번 동일한 이메일을 입력하지 않도록 이메일 저장 체크 기능을 추가해 반복적인 입력 부담을 줄였습니다.`,
      },
      {
        title: "Social Login",
        content: `소셜 로그인 기능을 도입해 Kakao 또는 Google로 로그인할 수 있게하여 플랫폼 이용 진입 장벽을 낮췄습니다.`,
      },
    ],
  },
  {
    title: "Review, Write a Review",
    images: [
      { src: "/stage101review.webp", alt: "스테이지 리뷰 모달 이미지" },
      { src: "/stage101review2.webp", alt: "스테이지 회원가입 이미지" },
    ],
    items: [
      {
        title: "Modal & Framer-Motion",
        content: `Framer-Motion을 활용해 리뷰 작성 모달을 부드럽게 전환하여 사용자 경험을 향상시켰습니다.
여러 모달이 겹칠 때 슬라이드 애니메이션으로 구분되며, CSR 방식으로 사용자 인터랙션에 빠르게 대응합니다.`,
      },
      {
        title: "Blur UI",
        content: `비로그인 사용자는 리뷰 일부가 블러 처리되어 표시되며, 로그인 유도로 자연스러운 접근을 유도합니다.
시각적 제한을 통해 컨텐츠 보호와 사용자 경험을 동시에 고려했습니다.`,
      },
      {
        title: "Unified Ticket-Based UI",
        content: `STAGE_101의 핵심 아이덴티티인 ‘티켓’ 디자인을 리뷰, 결제 내역, 미리보기 등 전반에 적용하여
UI의 시각적 통일성과 오프라인 연계 가능성을 고려한 경험을 제공합니다.`,
      },
      {
        title: "Infinite Scroll",
        content: `Tanstack Query의 useInfiniteQuery를 활용해 한 번에 모든 데이터를 불러오지 않고,
더보기 버튼을 누를 때마다 일정 데이터를 불러오게했습니다.`,
      },
      {
        title: "Live Ticket Preview",
        content: `입력값을 useState로 관리하고, 해당 값을 티켓 형태의 컴포넌트에
바로 반영하여 실시간 미리보기를 구현했습니다.
작성 중에도 최종 리뷰 레이아웃을 즉시 확인할 수 있도록 했습니다.`,
      },
    ],
  },
  {
    title: "Seat Reservation",
    images: [
      {
        src: "/stage101seatreservation.webp",
        alt: "스테이지 리뷰 모달 이미지",
      },
    ],
    items: [
      {
        title: "30분간 임시 예약",
        content: `좌석을 고르면 Supabase SQL을 사용해 30분 동안 임시 예약이 DB에 저장됩니다.
최종 결제가 이뤄지지 않으면 30분 후에 DB에 임시 예약이 삭제 되어 해당 좌석이 예약 가능 상태로 바뀝니다.`,
      },
      {
        title: "Supabase RealTime",
        content: `Supabase RealTime 기능을 활용해, 특정 좌석이 예약이 되면 모든 사용자에게 해당 좌석은 예약이 되어있는 상태로 바뀌게 됩니다.
이로 인해 사용자 혼선을 줄이고 좌석 선택 → 결제 흐름의 안정성과 신뢰도를 높였습니다.`,
      },
    ],
  },
  {
    title: "Payments",
    images: [
      { src: "/stage101payments.webp", alt: "결제 완료 이미지 1" },
      { src: "/stage101payments2.webp", alt: "결제 완료 이미지 2" },
    ],
    items: [
      {
        title: "결제 완료 페이지",
        content: `결제 성공 여부는 클라이언트에서 fetch 요청을 통해 서버에 확인하며,
민감한 결제 정보를 세션 기반 접근 제어 및 popstate 이벤트 리스너로 보호합니다.`,
      },
      {
        title: "QR 코드 및 UUID 기반 결제 정보 처리",
        content: `사용자가 결제를 완료하면 해당 결제 정보를 고유한 UUID로 변환하고, 이를 포함한 URL이 생성됩니다.
QR 코드로 제공되며, 스캔 시 서버에서 UUID로 결제 내역을 조회할 수 있어 위·변조 방지 및 간편한 인증 처리에 효과적입니다.`,
      },
    ],
  },
  {
    title: "Shop",
    images: [{ src: "/stage101shop.webp", alt: "스테이지 쇼핑 이미지" }],
    items: [
      {
        title: "상품 수량 조절 입력 UX 개선 (React State & Input Validation)",
        content: `수량 조절을 위한 버튼과 직접 입력 기능을 useState와 조합하여 구현하고,
비정상 값 입력 시 Math.max(1, value)를 통해 유효성 검사로 보정했습니다.`,
      },
      {
        title: "비회원 장바구니 접근 제어 (Zustand + 모달 연동)",
        content: `userId 유무로 로그인 여부 확인 후, 비로그인 시 LoginModal 표시.
Zustand 상태관리와 자연스러운 UX 흐름으로 인증 유도.`,
      },
    ],
  },
  {
    title: "Cart",
    images: [{ src: "/stage101cart.webp", alt: "장바구니 이미지" }],
    items: [
      {
        title: "React Query 기반 데이터 캐싱 및 무효화",
        content: `수량 변경이나 항목 삭제 시 invalidateQueries를 통해 최신 데이터를 즉시 반영하고 UI와 서버 정합성을 유지했습니다.`,
      },
      {
        title: "Skeleton UI로 부드러운 로딩 경험 제공",
        content: `로딩 중 Skeleton UI 제공으로 콘텐츠 구조를 미리 보여주고, 사용자 체감 속도 향상.`,
      },
      {
        title: "서버 API 기반 결제 처리 및 UUID 식별",
        content: `결제 완료 후 서버에서 UUID를 생성하여 주문을 식별하고, 해당 UUID 기반 URL로 리디렉션하여 보안성과 추적 가능성 확보.`,
      },
      {
        title: "결제 완료 페이지의 UX 최적화",
        content: `결제 후 UUID 안내 및 10초 후 자동 리디렉션으로 자연스러운 UX 흐름 제공.`,
      },
    ],
  },
];
