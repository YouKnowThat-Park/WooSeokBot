import { ProjectSection } from "@/type/project/ProjectSection-type";

export const DoGoDetails: ProjectSection[] = [
  {
    title: "호텔 리스트 페이지 - CSR 랜더링",
    images: [{ src: "/dogolist.webp", alt: "호텔 리스트 페이지" }],
    items: [
      {
        title: "검색 결과 기반 호텔 노출",
        content:
          "지역, 호텔 이름, 날짜에 맞는 호텔리스트를 보여주어 사용자가 원하는 데이터를 빠르게 확인할 수 있게 했습니다.",
      },
      {
        title: "사이드 필터 기능",
        content:
          "가격, 별점, 침대 유형, 시설/서비스 등 다양한 조건을 조합해 보다 정밀한 호텔 탐색이 가능합니다.",
      },
      {
        title: "무한스크롤",
        content:
          "스크롤에 따라 일정량씩 데이터를 불러오게 하여 초기 로딩 속도를 줄이고 탐색 편의성을 높였습니다.",
      },
      {
        title: "즐겨찾기 기능",
        content:
          "즐겨찾기한 호텔을 상태로 저장하여 다시 확인하거나 비교할 수 있게 구성했습니다.",
      },
    ],
  },
  {
    title: "호텔 상세 페이지 - CSR 랜더링",
    images: [{ src: "/dogodetail.webp", alt: "호텔 상세 페이지" }],
    items: [
      {
        title: "네비게이션 스크롤 이동",
        content:
          "상단 네비게이션 클릭 시 해당 섹션으로 스크롤 이동되며, 현재 위치한 항목에 보더 스타일 적용으로 시각적 피드백 제공.",
      },
      {
        title: "핵심 정보 요약",
        content:
          "총 리뷰 점수, 시설 만족도, 위치 정보를 요약된 카드로 상단에 배치해 핵심 정보를 빠르게 파악할 수 있게 했습니다.",
      },
      {
        title: "이미지 클릭 시 모달 오픈",
        content:
          "호텔 이미지를 클릭하면 전체 이미지를 크게 볼 수 있도록 모달이 열려 탐색 몰입도를 높였습니다.",
      },
      {
        title: "즐겨찾기 기능",
        content:
          "즐겨찾기한 호텔을 상태로 저장해 사용자가 손쉽게 확인하고 비교할 수 있도록 했습니다.",
      },
    ],
  },
  {
    title: "호텔 사진 모달",
    images: [{ src: "/dogohotelmodal.webp", alt: "호텔 사진 모달" }],
    items: [
      {
        title: "모든 호텔 사진 제공",
        content:
          "모달에서 호텔에 등록된 모든 이미지를 확인 가능하여 별도 페이지 전환 없이 이미지 탐색이 가능합니다.",
      },
    ],
  },
  {
    title: "객실 카드 & 모달",
    images: [{ src: "/dogoroom.webp", alt: "객실 카드 & 모달" }],
    items: [
      {
        title: "자세히 보기 → 모달 상세 정보",
        content:
          "객실 카드엔 최소 정보만 제공하고 '자세히 보기' 클릭 시 모달에서 침대 타입, 전망 등 상세 확인이 가능합니다.",
      },
      {
        title: "예약 버튼 위치 전략",
        content:
          "카드 외부와 모달 내부 모두에 ‘예약하기’ 버튼을 배치해 탐색 효율과 반복 예약 흐름 모두를 고려했습니다.",
      },
    ],
  },
  {
    title: "객실 상세 모달",
    images: [{ src: "/dogoroommodal.webp", alt: "객실 상세 모달" }],
    items: [
      {
        title: "모달 내 객실 상세 정보",
        content:
          "이미지, 침대 타입, 전망, 조식 포함 여부 등 주요 정보를 모달 내에서 확인 가능해 비교가 쉽습니다.",
      },
      {
        title: "모달 내 예약하기 버튼",
        content:
          "정보 확인 후 즉시 결제 페이지로 이어질 수 있도록 모달 내에 예약 버튼을 배치해 UX 최적화했습니다.",
      },
    ],
  },
  {
    title: "리뷰 섹션",
    images: [{ src: "/dogoreview.webp", alt: "호텔 리뷰 섹션" }],
    items: [
      {
        title: "요약 리뷰 제공",
        content:
          "리뷰 요약본을 기본으로 보여주고, 모달을 통해 전체 후기를 확인 가능해 정보 흐름을 끊지 않는 UX를 구현.",
      },
      {
        title: "리뷰 전체 모달 구성",
        content:
          "리뷰 전체 보기 클릭 시 모달로 열려 별도 페이지 이동 없이 전체 리뷰를 확인할 수 있도록 구성했습니다.",
      },
    ],
  },
  {
    title: "리뷰 모달",
    images: [{ src: "/dogoreviewmodal.webp", alt: "호텔 리뷰 모달" }],
    items: [
      {
        title: "상단 리뷰 점수 요약 및 별점 분포",
        content:
          "전체 리뷰 분위기를 한눈에 파악할 수 있도록 시각적으로 요약된 데이터를 제공했습니다.",
      },
      {
        title: "정렬 기능 & 사진 리뷰 필터",
        content:
          "리뷰 정렬 기능 및 사진 리뷰만 필터링하는 탭을 분리해 사용자의 리뷰 탐색 효율을 높였습니다.",
      },
    ],
  },
  {
    title: "시설 및 정책 정보",
    images: [{ src: "/dogofacility.webp", alt: "시설 및 정책 정보" }],
    items: [
      {
        title: "시설 정보",
        content:
          "편의 시설, 서비스 정보들을 한눈에 확인할 수 있도록 레이아웃을 구성했습니다.",
      },
      {
        title: "숙소 정책 - 드롭다운 UI",
        content:
          "긴 정책 텍스트들은 드롭다운 형태로 제공해 가독성을 높이고 화면 집중도를 유지했습니다.",
      },
    ],
  },
  {
    title: "지도 정보",
    images: [{ src: "/dogomap.webp", alt: "카카오 지도 정보" }],
    items: [
      {
        title: "Kakao Map 연동",
        content:
          "국내 주소/도로명/지번 등에서 정확한 정보를 제공하는 Kakao Map을 사용하여 위치 신뢰도를 높였습니다.",
      },
    ],
  },
];
