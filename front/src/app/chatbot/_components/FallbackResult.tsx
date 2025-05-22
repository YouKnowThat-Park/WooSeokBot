import Image from "next/image";
import React from "react";

const FallbackResult = () => {
  return (
    <div className="w-[970px] min-h-[400px] h-auto mt-[100px] mb-[20px] bg-[#FBFBFB] rounded-tl-[45px] overflow-hidden px-6">
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
    </div>
  );
};

export default FallbackResult;
