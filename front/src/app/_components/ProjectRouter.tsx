"use client";

import { useRecoilValue } from "recoil";
import { activeProjectAtom } from "@/recoil/ProjectAtom";
import Stage101 from "@/app/project/stage101/page";
import Horoscope from "@/app/project/Horoscope";
import PortfolioPage from "@/app/portfolio/PortfolioPage";
import DoGo from "../project/DoGo";
import WooseokBot from "../project/WooseokBot";
import GhostHouse from "../project/GhostHouse";

const ProjectRouter = () => {
  const active = useRecoilValue(activeProjectAtom);

  switch (active) {
    case "Stage101":
      return <Stage101 />;
    case "DoGo":
      return <DoGo />;
    case "WooseokBot":
      return <WooseokBot />;
    case "Horoscope":
      return <Horoscope />;
    case "GhostHouse":
      return <GhostHouse />;
    default:
      return <PortfolioPage />; // 초기값 또는 아무것도 선택 안됐을 때
  }
};

export default ProjectRouter;
