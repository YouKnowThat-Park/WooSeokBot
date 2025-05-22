import Image from "next/image";
import React from "react";

const CResult = () => {
  return (
    <div className="w-[970px] h-full mt-[10px] mb-[10px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6">
      <div className="flex items-start gap-x-6   mt-8 rounded-md">
        {/* 이미지 */}
        <div>
          <Image
            src="/wooseok.png"
            alt="우석 프로필 이미지"
            width={200}
            height={300}
            className="rounded-md object-cover bg-white"
          />
        </div>

        {/* 텍스트/내용 박스 */}
        <div className="flex-1 h-[300px] bg-white rounded-md shadow-sm p-4">
          <h2 className="text-xl font-bold"></h2>
          <h3></h3>
        </div>
      </div>

      <div className="flex items-start gap-x-6   mt-8 rounded-md">
        <div className="flex-1 h-[300px] bg-white rounded-md shadow-sm p-4">
          <h2 className="text-xl font-bold"></h2>
          <h3></h3>
        </div>
        <div>
          <Image
            src="/wooseok.png"
            alt="우석 프로필 이미지"
            width={200}
            height={300}
            className="rounded-md object-cover bg-white"
          />
        </div>

        <div className="flex gap-2 mt-32">
          <p className="bg-white w-full h-[200px]"></p>
        </div>

        <div className="flex flex-col gap-10 h-[500px] mt-4 bg-white"></div>
      </div>
    </div>
  );
};

CResult.keywords = ["hobby", "dream"];

export default CResult;
