export interface TechItem {
  category: string;
  tech: string;
  reason: string;
}

export interface TechStackTableProps {
  title: string;
  description?: string;
  items: TechItem[];
}
