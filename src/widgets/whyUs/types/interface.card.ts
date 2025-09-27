import { IconType } from "react-icons";

export interface Model {
  title: string;
  details: string;
}
export interface Card {
  id: number;
  cardTitle: string;
  cardDetails: string;
  icon: IconType;
}
export interface CardProps {
  el: Card;
}
