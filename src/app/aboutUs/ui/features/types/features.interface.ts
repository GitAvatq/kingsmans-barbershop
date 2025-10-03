import { StaticImageData } from "next/image";

export interface Features {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface FeaturesCardProps {
  el: Features;
}
