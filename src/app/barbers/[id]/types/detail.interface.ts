import { IWorkDetail } from "./work.interface";

export interface IDetails {
  id: number;
  img: string;
  text: string;
}

export interface IBarberDetail {
  id: number;
  name: string;
  image: string;
  location: string;
  rating: number;
  service: number;
  status: string;
  experience: number;
  fillialId: number;
  earned: number;
  works: IWorkDetail[];
}
