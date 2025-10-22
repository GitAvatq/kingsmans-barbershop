import { StaticImageData } from "next/image";

export interface Blog {
  id: number;
  name: string;
  text: string;
  image: StaticImageData;
  button: string;
}

export interface BlogCardProps {
  el: Blog;
}
