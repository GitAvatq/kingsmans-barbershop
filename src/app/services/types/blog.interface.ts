import { StaticImageData } from "next/image";

export interface Blog {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  loading?: boolean;
}

export interface BlogCardProps {
  el: Blog;
}
