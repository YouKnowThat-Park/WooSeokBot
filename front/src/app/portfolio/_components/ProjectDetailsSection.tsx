import Image from "next/image";
import React from "react";

const ProjectDetailsSection = () => {
  return (
    <div className="w-full h-full py-10 mt-10 bg-white border dark:bg-[#3a3a3a] dark:text-[#898989]">
      <h2 className="text-[25px] font-semibold dark:text-[#3ecf8e] mb-4 ml-2">
        Project Details
      </h2>
      <div className="ml-10">
        <h3 className="text-[18px] font-bold mb-2 dark:text-[#FBFBFB]">
          [Sign In, Sign Up]
        </h3>

        <div className="flex gap-2 px-[100px] mb-4">
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
        <ul className="flex flex-col gap-2 list-disc">
          <li>
            <p className="dark:text-[#FBFBFB]">CSR & Server Actions</p>
            사용자 입력이 많은 인증(Auth)에서는 SSR보다 CSR이 더 적합하며,
            <br />
            Server Actions를 활용해 민감한 로직을 서버에서 처리하여 보안성을
            높였습니다.
          </li>
          <li>
            <p className="dark:text-[#FBFBFB]">RHF, Zod</p>
            Zod를 사용해 유효성 검사를 동기적으로 처리하고, 런타임 타입 체크를
            병행하여 안정성 확보
            <br />
            RHF를 통해 입력 필드 단위로 상태를 관리해 불필요한 리렌더링을 줄이고
            성능을 개선
          </li>
          <li>
            <p className="dark:text-[#FBFBFB]">Remember Email</p>
            사용자가 매번 동일한 이메일을 입력하지 않도록 이메일 저장 체크
            기능을 추가해 반복적인 입력 부담을 줄였습니다.
          </li>
          <li>
            <p className="dark:text-[#FBFBFB]">Social Login</p>
            소셜 로그인 기능을 도입해 Kakao 또는 Google로 로그인할 수 있게하여
            플랫폼 이용 진입 장벅을 낮췄습니다.
          </li>
        </ul>

        <div className="ml-10 mt-10">
          <h3 className="text-[18px] font-bold mb-2 dark:text-[#FBFBFB]">
            [Review, Write a Review]
          </h3>
          <div className="flex gap-2 px-[100px] mb-4">
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
          <ul className="flex flex-col gap-2 list-disc">
            <li>
              <p className="dark:text-[#FBFBFB]">Modal & Framer-Motion</p>
              Framer-Motion을 활용해 리뷰 작성 모달을 부드럽게 전환하여 사용자
              경험을 향상시켰습니다.
              <br />
              여러 모달이 겹칠 때 슬라이드 애니메이션으로 구분되며, CSR 방식으로
              사용자 인터랙션에 빠르게 대응합니다.
            </li>

            <li>
              <p className="dark:text-[#FBFBFB]">Blur UI</p>
              비로그인 사용자는 리뷰 일부가 블러 처리되어 표시되며, 로그인
              유도로 자연스러운 접근을 유도합니다.
              <br />
              시각적 제한을 통해 컨텐츠 보호와 사용자 경험을 동시에
              고려했습니다.
            </li>

            <li>
              <p className="dark:text-[#FBFBFB]">Unified Ticket-Based UI</p>
              STAGE_101의 핵심 아이덴티티인 ‘티켓’ 디자인을 리뷰, 결제 내역,
              미리보기 등 전반에 적용하여
              <br /> UI의 시각적 통일성과 오프라인 연계 가능성을 고려한 경험을
              제공합니다.
            </li>

            <li>
              <p className="dark:text-[#FBFBFB]">Infinite Scroll</p>
              Tanstack Query의 useInfiniteQuery를 활용해 한 번에 모든 데이터를
              불러오지 않고,
              <br />
              더보기 버튼을 누를 때마다 일정 데이터를 불러오게했습니다.
            </li>

            <li>
              <p className="dark:text-[#FBFBFB]">Live Ticket Preview</p>
              입력값을 useState로 관리하고, 해당 값을 티켓 형태의 컴포넌트에
              바로 반영하여 실시간 미리보기를 구현했습니다. <br />
              작성 중에도 최종 리뷰 레이아웃을 즉시 확인할 수 있도록 했습니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsSection;
