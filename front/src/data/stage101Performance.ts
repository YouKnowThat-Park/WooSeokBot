export const stage101Performance = [
  {
    title: "Auth 로직 Route가 아닌 Server Actions 사용",
    points: [
      "클라이언트에서 fetch 호출 제거로 인증 요청의 응답 속도 25% 개선",
      "인증 로직이 서버 파일 내에서 실행되어 클라이언트 측 보안성 향상",
    ],
  },
  {
    title: "장바구니 선택 삭제 , 결제 시 Promise.all로 병렬 처리",
    points: [
      "선택 삭제 기능은 Promise.all을 활용해 동시에 여러 항목을 병렬 처리",
      "순차 처리 대비 평균 삭제 응답 시간이 약 50% 이상 단축",
    ],
  },
  {
    title: "데이터 로딩 지연에 따른 Skeleton UI 적용",
    points: [
      "리뷰 모델 3.5초 로딩 → Skeleton UI 적용으로 사용자 혼란 최소화",
      "상점 페이지 (3초), 상품 상세 페이지 (1.5초) 에도 Skeleton UI 적용",
      "마이페이지(티켓/리뷰 등)에도 Skeleton UI 적용하여 시각적 피드백 제공",
    ],
  },
  {
    title: "결제 페이지 접근 제어 & UX 안정성 확보",
    points: [
      "뒤로 가기 방지: pushState + popstate → 세션 안내 처리",
      "직접 접근 방지: sessionStorage의 allowPaymentsAccess 플래그 적용",
      "중복 호출 방지: paymentDone 세션 기록으로 자동 리디렉션 처리",
    ],
  },
];
