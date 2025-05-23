"use client";

import { useRecoilValue } from "recoil";
import { activeProjectAtom } from "@/recoil/ProjectAtom";
import Stage101 from "@/app/project/Stage101";
import Recoil from "@/app/project/Recoil";
import Horoscope from "@/app/project/Horoscope";
import PortfolioPage from "@/app/portfolio/PortfolioPage";

const ProjectRouter = () => {
  const active = useRecoilValue(activeProjectAtom);

  switch (active) {
    case "Stage101":
      return <Stage101 />;
    case "Recoil":
      return <Recoil />;
    case "Horoscope":
      return <Horoscope />;
    default:
      return <PortfolioPage />; // 초기값 또는 아무것도 선택 안됐을 때
  }
};

export default ProjectRouter;
