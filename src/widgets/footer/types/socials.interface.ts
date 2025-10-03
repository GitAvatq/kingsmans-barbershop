import { IconType } from "react-icons";

export interface ISocial {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export interface ISocialCardProps {
  el: ISocial;
}
