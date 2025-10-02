import { StaticImageData } from "next/image";

export interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  image: StaticImageData;
}

export interface ReviewCardProps {
  el: Review;
}
