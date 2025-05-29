"use client";
import Image from "next/image";
import React from "react";

const ProjectDetailsSection = () => {
  return (
    <div className="w-full h-full py-10 mt-10  dark:bg-[#2e2e2e] dark:text-[#898989] ">
      <h2 className="text-[25px] font-semibold dark:text-[#3ecf8e] mb-4 ml-6 ">
        Project Details
      </h2>

      <div className="space-y-16 ">
        {/* Sign In, Sign Up */}
        <div className="border px-4 py-4 dark:border-neutral-700 ">
          <div>
            <h3 className="text-[18px] font-bold mb-4 text-[#3ecf8e]">
              Sign In, Sign Up
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Image
                src="/stage101auth.png"
                alt="스테이지 로그인 이미지"
                width={300}
                height={100}
              />
              <Image
                src="/stage101auth2.png"
                alt="스테이지 회원가입 이미지"
                width={300}
                height={100}
              />
            </div>
            <ul className="list-disc space-y-4 ml-6">
              <li>
                <p className="dark:text-[#FBFBFB] font-semibold">
                  CSR & Server Actions
                </p>
                <p className="dark:text-gray-300">
                  사용자 입력이 많은 인증(Auth)에서는 SSR보다 CSR이 더 적합하며,
                  <br />
                  Server Actions를 활용해 민감한 로직을 서버에서 처리하여
                  보안성을 높였습니다.
                </p>
              </li>
              <li>
                <p className="dark:text-[#FBFBFB] font-semibold">RHF, Zod</p>
                <p className="dark:text-gray-300">
                  Zod를 사용해 유효성 검사를 동기적으로 처리하고, 런타임 타입
                  체크를 병행하여 안정성 확보
                  <br />
                  RHF를 통해 입력 필드 단위로 상태를 관리해 불필요한 리렌더링을
                  줄이고 성능을 개선
                </p>
              </li>
              <li>
                <p className="dark:text-[#FBFBFB] font-semibold">
                  Remember Email
                </p>
                <p className="dark:text-gray-300">
                  사용자가 매번 동일한 이메일을 입력하지 않도록 이메일 저장 체크
                  기능을 추가해 반복적인 입력 부담을 줄였습니다.
                </p>
              </li>
              <li>
                <p className="dark:text-[#FBFBFB] font-semibold">
                  Social Login
                </p>
                <p className="dark:text-gray-300">
                  소셜 로그인 기능을 도입해 Kakao 또는 Google로 로그인할 수
                  있게하여 플랫폼 이용 진입 장벽을 낮췄습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Review */}
        <div className="border px-4 py-4 dark:border-neutral-700">
          <h3 className="text-[18px] font-bold mb-4 text-[#3ecf8e]">
            Review, Write a Review
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Image
              src="/stage101review.png"
              alt="스테이지 리뷰 모달 이미지"
              width={300}
              height={100}
            />
            <Image
              src="/stage101review2.png"
              alt="스테이지 회원가입 이미지"
              width={300}
              height={100}
            />
          </div>
          <ul className="list-disc space-y-4 ml-6">
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                Modal & Framer-Motion
              </p>
              <p className="dark:text-gray-300">
                Framer-Motion을 활용해 리뷰 작성 모달을 부드럽게 전환하여 사용자
                경험을 향상시켰습니다.
                <br />
                여러 모달이 겹칠 때 슬라이드 애니메이션으로 구분되며, CSR
                방식으로 사용자 인터랙션에 빠르게 대응합니다.
              </p>
            </li>
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">Blur UI</p>
              <p className="dark:text-gray-300">
                비로그인 사용자는 리뷰 일부가 블러 처리되어 표시되며, 로그인
                유도로 자연스러운 접근을 유도합니다.
                <br />
                시각적 제한을 통해 컨텐츠 보호와 사용자 경험을 동시에
                고려했습니다.
              </p>
            </li>
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                Unified Ticket-Based UI
              </p>
              <p className="dark:text-gray-300">
                STAGE_101의 핵심 아이덴티티인 ‘티켓’ 디자인을 리뷰, 결제 내역,
                미리보기 등 전반에 적용하여
                <br />
                UI의 시각적 통일성과 오프라인 연계 가능성을 고려한 경험을
                제공합니다.
              </p>
            </li>
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                Infinite Scroll
              </p>
              <p className="dark:text-gray-300">
                Tanstack Query의 useInfiniteQuery를 활용해 한 번에 모든 데이터를
                불러오지 않고,
                <br />
                더보기 버튼을 누를 때마다 일정 데이터를 불러오게했습니다.
              </p>
            </li>
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                Live Ticket Preview
              </p>
              <p className="dark:text-gray-300">
                입력값을 useState로 관리하고, 해당 값을 티켓 형태의 컴포넌트에
                바로 반영하여 실시간 미리보기를 구현했습니다.
                <br />
                작성 중에도 최종 리뷰 레이아웃을 즉시 확인할 수 있도록 했습니다.
              </p>
            </li>
          </ul>
        </div>

        {/* Seat Reservation */}
        <div className="border px-4 py-4 dark:border-neutral-700">
          <h3 className="text-[18px] font-bold mb-4 text-[#3ecf8e]">
            Seat Reservation
          </h3>
          <div className="flex justify-center mb-6">
            <Image
              src="/stage101seatreservation.png"
              alt="스테이지 리뷰 모달 이미지"
              width={300}
              height={100}
            />
          </div>
          <ul className="list-disc space-y-4 ml-6">
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                30분간 임시 예약
              </p>
              <p className="dark:text-gray-300">
                좌석을 고르면 Supabase SQL을 사용해 30분 동안 임시 예약이 DB에
                저장됩니다.
                <br />
                최종 결제가 이뤄지지 않으면 30분 후에 DB에 임시 예약이 삭제 되어
                해당 좌석이 예약 가능 상태로 바뀝니다.
              </p>
            </li>
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                Supabase RealTime
              </p>
              <p className="dark:text-gray-300">
                Supabase RealTime 기능을 활용해, 특정 좌석이 예약이 되면 모든
                사용자에게 해당 좌석은 예약이 되어있는 상태로 바뀌게 됩니다.
                <br />
                이로 인해 사용자 혼선을 줄이고 <strong>좌석 선택 → 결제</strong>
                흐름의 안정성과 신뢰도를 높였습니다.
              </p>
            </li>
          </ul>
        </div>

        {/* Payments */}
        <div className="border px-4 py-4 dark:border-neutral-700">
          <h3 className="text-[18px] font-bold mb-4 text-[#3ecf8e]">
            Payments
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Image
              src="/stage101payments.png"
              alt="스테이지 리뷰 모달 이미지"
              width={300}
              height={100}
            />
            <Image
              src="/stage101payments2.png"
              alt="스테이지 리뷰 모달 이미지"
              width={300}
              height={100}
            />
          </div>
          <ul className="list-disc space-y-4 ml-6">
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                결제 완료 페이지
              </p>
              <p className="dark:text-gray-300">
                결제 성공 여부는 클라이언트에서 fetch 요청을 통해 서버에
                확인하며, 민감한 결제 정보를 세션 기반 접근 제어 및 popstate
                이벤트 리스너로 보호합니다.
                <br />
                이를 통해 사용자 UX를 유지하면서도 부정 접근 및 뒤로가기
                재호출을 방지하도록 구성했습니다.
              </p>
            </li>
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                QR 코드 및 UUID 기반 결제 정보 처리
              </p>
              <p className="dark:text-gray-300">
                사용자가 결제를 완료하면 해당 결제 정보를 고유한 UUID로
                변환하고, 이를 포함한 URL이 생성됩니다.
                <br />
                이 URL은 QR 코드로 변환되어 사용자에게 제공되며, 스캔 시
                서버에서 UUID를 기반으로 결제 내역을 조회할 수 있습니다.
                <br />이 방식은 정보 노출 없이 결제 데이터를 안전하게 식별할 수
                있도록 하며, 위·변조 방지 및 간편한 인증 처리에 효과적입니다.
              </p>
            </li>
          </ul>
        </div>

        {/* Shop */}
        <div className="border px-4 py-4 dark:border-neutral-700">
          <h3 className="text-[18px] font-bold mb-4 text-[#3ecf8e]">Shop</h3>
          <div className="flex justify-center mb-6">
            <Image
              src="/stage101shop.png"
              alt="스테이지 리뷰 모달 이미지"
              width={300}
              height={100}
            />
          </div>
          <ul className="list-disc space-y-4 ml-6">
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                상품 수량 조절 입력 UX 개선 (React State & Input Validation)
              </p>
              <p className="dark:text-gray-300">
                상품 상세 페이지에서 수량 조절을 위한 버튼과 직접 입력 기능을
                React useState와 조합으로 구현했습니다.
                <br />
                사용자가 비정상적인 값(음수, 0, 문자 등)을 입력하는 경우
                Math.max(1, value)를 통해 유효성 검사를 수행하고, 항상 최소 1
                이상의 정수로 보정되도록 처리하여 UX 안정성과 입력 예외 대응력을
                높였습니다.
              </p>
            </li>
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                비회원 장바구니 접근 제어 (Zustand 상태관리 + 모달 연동)
              </p>
              <p className="dark:text-gray-300">
                전역 사용자 상태는 Zustand를 통해 관리하며, 장바구니 추가 시
                userId 여부를 체크해 로그인 상태가 아닐 경우 LoginModal을 띄워
                인증을 유도합니다.
                <br />이 흐름은 별도의 리디렉션 없이 클라이언트 사이드에서
                인증을 유도할 수 있는 구조로, UX를 해치지 않으면서도 장바구니
                접근 보안을 자연스럽게 통합했습니다.
              </p>
            </li>
          </ul>
        </div>

        {/* Cart */}
        <div className="border px-4 py-4 dark:border-neutral-700">
          <h3 className="text-[18px] font-bold mb-4 text-[#3ecf8e]">Cart</h3>
          <div className="flex justify-center mb-6">
            <Image
              src="/stage101cart.png"
              alt="스테이지 리뷰 모달 이미지"
              width={300}
              height={100}
            />
          </div>
          <ul className="list-disc space-y-4 ml-6">
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                React Query 기반 데이터 캐싱 및 무효화
              </p>
              <p className="dark:text-gray-300">
                장바구니 데이터를 React Query로 관리하며, 수량 변경이나 항목
                삭제 시 `invalidateQueries`를 통해 최신 데이터를 즉시 반영해
                UI와 서버 상태의 정합성을 유지했습니다.
              </p>
            </li>
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                Skeleton UI로 부드러운 로딩 경험 제공
              </p>
              <p className="dark:text-gray-300">
                데이터 로딩 중 Skeleton UI를 사용하여 콘텐츠 구조를 미리
                보여줌으로써 심리적 로딩 시간을 단축하고 페이지 전환의 이질감을
                줄였습니다.
              </p>
            </li>
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                서버 API 기반 결제 처리 및 UUID 식별
              </p>
              <p className="dark:text-gray-300">
                결제 완료 후 서버에서 고유 UUID를 생성하여 주문을 식별하며, 해당
                UUID를 포함한 URL로 리디렉션하여 보안성과 추적 가능성을
                높였습니다.
              </p>
            </li>
            <li>
              <p className="dark:text-[#FBFBFB] font-semibold">
                결제 완료 페이지의 UX 최적화
              </p>
              <p className="dark:text-gray-300">
                결제 완료 후 주문번호 UUID를 사용자에게 안내하고, 10초 뒤
                자동으로 메인 페이지로 리디렉션되도록 처리하여 자연스러운 UX
                흐름을 제공했습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsSection;
