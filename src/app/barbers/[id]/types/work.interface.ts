import { IDetails } from "./detail.interface";

export interface IWorkProps {
  card: IDetails;
}

export interface IWorkDetail {
  id: number;
  barberId: number;
  name_hair: string;
  picture_hair: string;
}

export interface IWorkDetailProps {
  works: IWorkDetail[];
}
