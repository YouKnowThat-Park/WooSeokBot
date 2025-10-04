import { ProjectSection } from "./ProjectSection-type";

export interface ProjectDetailsSectionProps {
  title: string;
  sections: ProjectSection[];
  imageSize?: {
    width: number;
    height: number;
  };
}
