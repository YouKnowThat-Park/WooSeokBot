"use client";

import Image from "next/image";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

type Props = {
  onClose: () => void;
};

const FeedbackModal = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[620px] h-[360px]">
        <div className=" flex justify-start items-center my-1 text-2xl font-semibold">
          Comment
        </div>
        <button
          onClick={onClose}
          className="  ml-[530px]  text-sm bg-gray-300 rounded"
        >
          취소
        </button>
        <div className="border-b mb-10 " />
        <div className="flex">
          <div className="bg-black w-[60px] h-[60px] rounded-full">
            <Image
              src="/interviewer.webp"
              alt="면접관 이미지"
              width={30}
              height={30}
              className="ml-6"
            />
          </div>
          <div className="flex flex-col gap-2 ml-5">
            <input type="text" placeholder="회사 이름" className="h-7 border" />
            <input type="text" placeholder="패스워드" className="h-7 border" />
          </div>
          <div className="w-7 h-16 bg-gray-300 ml-[220px] mb-4 flex flex-col justify-center items-center border border-black">
            <AiFillLike className="text-blue-600" size={20} />
            <p className="border border-black w-full my-2" />
            <AiFillDislike className="text-red-600" size={20} />
          </div>
        </div>
        <div className="flex ">
          <textarea
            placeholder="해당 피드백은 관리자 페이지에서 박우석 지원자만 확인할 수 있습니다."
            className="w-full h-32 border border-gray-300 rounded p-2 mt-3"
          />
          <div className="mt-4 flex justify-end gap-2">
            <button className="w-20 mx-2 h-[125px] text-sm bg-[#111111] text-white rounded">
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
