export interface ProjectItem {
  title: string;
  content: string;
}

export interface ProjectSection {
  title: string;
  items: {
    title: string;
    content: string;
  }[];
  images?: {
    src: string;
    alt: string;
  }[];
  video?: {
    src: string;
    type?: "mp4" | "webm";
    poster?: string;
  };
}
