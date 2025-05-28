import Image from "next/image";
import React from "react";

const UserFlowSection = () => {
  return (
    <div className="mt-10 ml-10">
      <h3 className="text-[17px] font-bold mb-4">🚶‍♂️‍➡️유저 플로우</h3>
      <div className="flex gap-10 ml-20">
        <Image
          src="/user1.png"
          alt="유저 플로우 이미지 왼쪽"
          width={300}
          height={300}
        />

        <Image
          src="/user2.png"
          alt="유저 플로우 이미지 오른쪽"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default UserFlowSection;
