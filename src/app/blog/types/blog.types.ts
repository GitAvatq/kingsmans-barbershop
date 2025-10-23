import { StaticImageData } from "next/image";

export interface TBlog {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  loading?: boolean;
}
