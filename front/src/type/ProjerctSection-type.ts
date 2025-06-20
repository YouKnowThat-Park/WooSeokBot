export type ProjectItem = {
  title: string;
  content: string;
};

export type ProjectSection = {
  title: string;
  images?: { src: string; alt: string }[];
  items: ProjectItem[];
};
