import React from "react";

const WorkStyleSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 h-[520px] mt-4 bg-white">
        <h2 className="text-[20px] font-semibold">🔭 업무 스타일</h2>
        <ul className="list-disc ml-8">
          <li className="mb-10">
            사용자의 실제 행동 흐름에 맞춘 UI/UX 흐름을 설계하고 구현합니다.
            <div className="mt-2">
              DoGo 프로젝트에서는 객실 카드와 상세정보 모달 양쪽 모두에
              '예약하기' 버튼을 배치했습니다. 상세 정보를 보고 확신이 든
              사용자는 모달에서 바로 예약할 수 있고, 이전에 비교했던 객실로
              돌아온 사용자는 모달을 다시 열 필요 없이 카드에서 바로 예약할 수
              있도록 했습니다. 이렇게 함으로써 정보 탐색형 사용자와 반복 비교형
              사용자 모두의 흐름을 끊지 않는 유연한 사용자 경험을 설계했습니다.
            </div>
          </li>

          <li className="mb-10">
            단순히 동작하는 기능이 아니라, '왜 이 기능이 필요하고, 어떤 비즈니스
            가치를 만들 수 있는지'까지 고민하며 개발합니다.
            <div className="mt-2">
              STAGE_101의 상점 구조는 일반 현금 결제를 차단하고, 극장 관람을
              통해서만 포인트를 획득해 상품을 구매할 수 있도록 설계했습니다.
              또한, 이 상품은 온라인 배송이 아닌 극장 내부 매장에서 직접
              수령하는 방식으로 구성해, 자연스럽게 사용자의 재방문과 체류 시간
              증가를 유도했습니다. 기능을 구현하기 전에 이 흐름이 사용자에겐
              얼마나 자연스러운가, 그리고 사업자 입장에선 어떤 가치를 만들 수
              있는가를 함께 고민합니다.
            </div>
          </li>

          <li className="mb-4">
            <div className="text-lg font-bold bg-slate-300 w-fit">
              배움을 두려워 하지 않고 새로운 기술들을 계속 학습합니다.
            </div>
            <div className="mt-2 bg-slate-100">
              <span className="font-semibold">
                Zustand에 익숙했더라도 거기서 멈추지 않고, Recoil 같은 구조적
                상태 관리 방식도 학습
              </span>
              하고 직접 프로젝트에 적용해보며 더 나은 개발 방식을 탐색하고자
              노력했습니다. 현재는
              <span className="font-semibold">Python Django</span> 를 학습
              중이며, 프론트 뿐만 아니라
              <span className="font-semibold"> 백엔드</span>영역을 공부중에
              있습니다. 익숙함보다 도전을 선택하고, 실험과 학습을 통해 계속해서
              앞으로 나아가는 개발자가 되고자 합니다.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkStyleSection;
