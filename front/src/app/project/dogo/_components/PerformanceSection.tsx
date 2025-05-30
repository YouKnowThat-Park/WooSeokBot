import React from "react";

const PerformanceSection = () => {
  return (
    <div className="flex flex-col py-4 gap-10 w-full h-full mt-10 border dark:text-[#fbfbfb] dark:border-neutral-700 ">
      <h2 className="text-[20px] font-semibold dark:text-[#3ecf8e] mt-2 ml-2">
        Performance
      </h2>

      <div className="ml-10">
        <h3 className="text-[17px] font-semibold mb-2">
          Auth 로직 Route가 아닌 Server Actions 사용
        </h3>
        <ul className="list-disc flex flex-col gap-2 dark:text-gray-300">
          <li>
            클라이언트에서 fetch 호출 제거로 인증 요청의 응답 속도 25% 개선
          </li>
          <li>
            인증 로직이 서버 파일 내에서 실행되어 클라이언트 측 보안성 향상
          </li>
        </ul>
      </div>
      <div className="ml-10">
        <h3 className="text-[17px] font-semibold mb-2">
          장바구니 선택 삭제 , 결제 시 Promise.all로 병렬 처리
        </h3>
        <ul className="list-disc dark:text-gray-300">
          <li>
            선택 삭제 기능은 Promise.all을 활용해 동시에 여러 항목을 병렬
            처리하도록 구성 <br /> 순차 처리 대비 평균 b삭제 응답 시간이 약 50%
            이상 단축
          </li>
        </ul>
      </div>

      <div className="ml-10">
        <h3 className="text-[17px] font-semibold mb-2">
          데이터 로딩 지연에 따른 Skeleton UI 적용
        </h3>
        <ul className="list-disc flex flex-col gap-2 dark:text-gray-300 ">
          <li>
            리뷰 모델은 데이터를 불러오고 UI를 렌더링하는 데 약 3.5초가
            소요되어,
            <br /> 로딩 동안 Skeleton UI를 적용해 시각적 피드백을 제공함으로써
            사용자 혼란을 줄였습니다.
          </li>
          <li>
            상점 페이지와 상품 상세 페이지는 각각 약 3초, 1.5초의 로딩 시간이
            발생하여,
            <br /> Skeleton UI를 적용해 로딩 중에도 자연스러운 사용자 경험을
            제공했습니다.
          </li>
          <li className="mb-4">
            마이페이지 내 구매한 티켓, 상품 정보, 리뷰 데이터를 불러오는
            동안에도 Skeleton UI를 적용하여,
            <br /> 데이터 렌더링 전 사용자의 시각적 불편을 최소화했습니다.
          </li>
        </ul>
      </div>

      <div className="ml-10">
        <h3 className="text-[17px] font-semibold mb-2">
          결제 페이지 접근 제어 & UX 안정성 확보
        </h3>
        <ul className="list-disc flex flex-col gap-2 dark:text-gray-300">
          <li>
            결제 완료 후 뒤로 가기를 통한 재접근을 방지하기 위해
            history.pushState와 popstate 이벤트 활용
            <br />→ 사용자가 브라우저 뒤로가기를 눌러도 이미 결제된 세션임을
            안내하고, 페이지 흐름을 유지하도록 처리했습니다.
          </li>
          <li>
            직접 접근 차단을 위해 sessionStorage 의 allowPaymentsAccess 플래그
            활용
            <br />→ 정상적인 결제 흐름을 통해서만 접근할 수 있도록 구성해, 새 탭
            / 직접 URL 입력 등 예외 접근을 차단했습니다.
          </li>
          <li>
            결제 완료 시 paymentDone 플래그를 세션에 기록
            <br />→ 동일 세션 내에서 다시 결제 페이지에 진입할 경우 자동
            리디렉션 처리로 중복 호출을 방지했습니다.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceSection;
