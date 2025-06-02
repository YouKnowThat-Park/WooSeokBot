"use client";

import { useRecoilValue } from "recoil";
import { activeProjectAtom } from "@/recoil/ProjectAtom";
import Stage101 from "@/app/project/stage101/page";
import PortfolioPage from "@/app/portfolio/PortfolioPage";

import DoGo from "../project/dogo/page";
import WooSeokBot from "../project/wooseokBot/page";

const ProjectRouter = () => {
  const active = useRecoilValue(activeProjectAtom);

  switch (active) {
    case "Stage101":
      return <Stage101 />;
    case "DoGo":
      return <DoGo />;
    case "WooseokBot":
      return <WooSeokBot />;
    default:
      return <PortfolioPage />; // 초기값 또는 아무것도 선택 안됐을 때
  }
};

export default ProjectRouter;
