import { ProjectSection } from "@/type/project/Section-type";

export const Stage101Details: ProjectSection[] = [
  {
    title: "Sign In, Sign Up / Server Action",
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
    title: "Home / Server Component",
    images: [{ src: "/stage-home.webp", alt: "스테이지 로그인 이미지" }],
    items: [
      {
        title: "Server Component",
        content: `Home는 서비스의 첫 진입점이라 SEO/초기 로딩이 가장 중요했습니다.
Next.js Server Component로 주요 콘텐츠를 서버에서 미리 렌더링해 검색엔진 노출과 초기 페인트 속도를 개선했고,
클라이언트 번들 크기를 줄여 상호작용 가능 시점 까지의 체감 성능을 안정화했습니다.`,
      },
      {
        title: "Graph lib / CSR",
        content: `그래프 구현을 위해 Chart.js, ApexCharts, Recharts를 실제로 적용해 비교했고, 화면 목적에 따라 최적 선택이 달라진다는 차이를 느꼈습니다.
ApexCharts는 도넛(KPI) 표현과 테마/legend/tooltip 완성도가 높아 TopReservation에 사용했으며, SSR 미지원이라 dynamic import(ssr:false)로 처리했습니다.
Chart.js는 축/라벨/툴팁 제어가 강점이라 TopReview 막대 차트에 적용했고(축 라벨은 축약, 툴팁은 풀네임), Recharts는 React UI 결합과 반응형 구성이 쉬워 굿즈 랭킹 모달에서 차트+리스트/링크를 함께 구성했습니다.`,
      },
      {
        title: "Now Showing / SSR",
        content: `Now Showing은 SEO/초기 노출이 중요한 영역이라 서버에서 데이터를 선패칭해 initialData로 주입했습니다.
이후 캐러셀 애니메이션, 스켈레톤 전환, 예매 클릭 등 상호작용은 CSR로 처리했습니다.`,
      },
    ],
  },
  {
    title: "Review, Write a Review / Client Component",
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
        content: `좌석을 고르면 FastAPI 기반의 백엔드에서 30분 동안 유효한 임시 예약 정보가 DB에 저장됩니다.
결제가 완료되지 않으면, 30~35분 사이에 자동으로 예약 정보가 삭제되어 해당 좌석은 다시 예약 가능 상태로 전환됩니다.`,
      },
      {
        title: "FastAPI + WebSocket 실시간 반영",
        content: `FastAPI와 WebSocket을 활용해, 특정 좌석이 예약되면 모든 사용자에게 실시간으로 해당 좌석이 비활성화된 상태로 표시됩니다.
이로 인해 사용자 혼선을 줄이고, 좌석 선택부터 결제까지의 흐름에 안정성과 신뢰도를 높였습니다.`,
      },
    ],
  },
  {
    title: "Payments / Server Component",
    images: [
      { src: "/stage101payments.webp", alt: "결제 완료 이미지 1" },
      { src: "/stage_goods_payment.webp", alt: "결제 완료 이미지 2" },
    ],
    items: [
      {
        title: "결제 완료 페이지 - Server Component(SSR) + 인증 쿠키 전달",
        content: `Next.js Server Component에서 headers()로 인증 쿠키를 받아 API 요청에 그대로 전달해, 결제 내역이 '내 계정 소유'인 경우에만 조회되도록 처리했습니다.
단건 결제 히스토리(id)로 payment_key를 확보한 뒤, 동일 payment_key의 전체 구매 항목을 다시 조회해 주문 요약/목록을 서버에서 확정 렌더링합니다.
조회 실패/비정상 접근은 notFound()로 차단해 잘못된 URL 접근이나 위변조 시도를 최소화했습니다.`,
      },
      {
        title: "결제 중복 방지 + 예약/좌석 조회 + QR 세션 연동(입장 인증)",
        content: `결제 완료 리다이렉트로 전달되는 searchParams(orderId, paymentKey, reservationId 등)를 서버에서 검증하고, 필수 값이 없으면 즉시 redirect('/') 처리합니다.
이후 해당 예약(reservationId)에 대해 이미 'paid' 결제가 존재하는지 먼저 확인하고, 없을 때만 결제 레코드를 생성해 중복 생성을 방지했습니다(포인트 적립도 서버에서 계산).
마지막으로 예약 정보에서 좌석을 조회하고, reservationId 기반 QR 세션을 불러와 입장용 QR을 제공하여 결제 완료 → 입장 인증까지 자연스럽게 이어지도록 구성했습니다.`,
      },
    ],
  },
  {
    title: "Shop / Server Component",
    images: [{ src: "/stage-shop.webp", alt: "스테이지 쇼핑 이미지" }],
    items: [
      {
        title: "상품 리스트 SSR 렌더링 (Server Component + metadata)",
        content: `상품 목록은 Server Component에서 선패칭(fetchShopsServer)해 초기 화면에 바로 렌더링했습니다.
페이지 메타데이터(title/description)와 함께 노출되어 SEO/초기 로딩을 확보했고, 로딩 구간은 loading.tsx 스켈레톤으로 UX를 보완했습니다.`,
      },
      {
        title: "상품 수량 조절 입력 UX 개선 (React State & Input Validation)",
        content: `수량 조절을 위한 버튼과 직접 입력 기능을 useState와 조합하여 구현하고,
비정상 값 입력 시 Math.max(1, value)를 통해 유효성 검사로 보정했습니다.`,
      },
      {
        title: "비회원 장바구니 접근 제어 (Zustand + 모달 연동)",
        content: `userId 유무로 로그인 여부를 확인하고, 비로그인 상태에서는 LoginModal을 띄워 인증을 유도했습니다.
바로 로그인 페이지로 리다이렉트하지 않은 이유는, 사용자가 상품 정보를 탐색·비교하는 흐름을 끊지 않고 현재 컨텍스트에서 '로그인 필요'를 안내하기 위해서입니다.
Zustand로 로그인/모달 상태를 관리해 자연스럽게 전환되도록 구성했습니다.`,
      },
    ],
  },

  {
    title: "AWS 인프라 구성 및 배포",
    items: [
      {
        title: "S3",
        content: `유저 프로필 및 공연 포스터 이미지 저장소로 사용. FastAPI에서 presigned URL 기반 업로드 처리.`,
      },
      {
        title: "RDS (PostgreSQL)",
        content: `주요 비즈니스 데이터를 RDS PostgreSQL에 저장하고 SQLAlchemy ORM으로 트랜잭션을 안정적으로 관리.`,
      },
      {
        title: "EC2",
        content: `프론트(Next.js)와 백엔드(FastAPI)를 각각 EC2에 배포하고, 성능 개선을 위해 t3.medium 사양으로 업그레이드.`,
      },
      {
        title: "ALB",
        content: `SSL Termination 및 경로 기반 라우팅 구성('/api/*' → FastAPI, 나머지 → Next.js). SSR 도메인 재호출로 인한 504 Timeout 문제 해결.`,
      },
      {
        title: "Route53",
        content: `가비아에서 도메인을 구매한 뒤 Route53으로 DNS를 이전하여 ALB와 매핑했습니다. 
가비아가 동일한 TLD 기준으로 AWS보다 훨씬 저렴한 비용(약 500원대)으로 도메인을 제공하여 초기 인프라 비용을 효과적으로 절감할 수 있었습니다.`,
      },
    ],
  },
];
