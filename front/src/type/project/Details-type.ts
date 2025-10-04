import { ProjectSection } from "./Section-type";

export interface ProjectDetailsSectionProps {
  title: string;
  sections: ProjectSection[];
  imageSize?: {
    width: number;
    height: number;
  };
}
