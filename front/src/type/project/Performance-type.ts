export interface PerformanceItem {
  title: string;
  points: string[];
}

export interface PerformanceSectionProps {
  title: string;
  performanceItems: PerformanceItem[];
}
