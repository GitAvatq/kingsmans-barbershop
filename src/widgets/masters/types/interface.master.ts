export interface IMaster {
  id: number;
  name: string;
  address: string;
  status: string;
  barberImg: string;
}

export interface MasterCardProps {
  barber: IMaster;
  isLoading: boolean;
}
