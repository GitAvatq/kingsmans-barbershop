import { DataBarbers } from "@/app/barbers/ui/listBarbers/types/listBarbers.interface";

export interface IResultFillials {
  id: number;
  country: string;
  city: string;
  address: string;
  barbers: DataBarbers[];
  createdAt: string;
  updatedAt: string;
}
