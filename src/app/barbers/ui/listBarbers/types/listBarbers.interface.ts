export interface DataBarbers {
  id: number;
  name: string;
  experience: number;
  status: string;
  earned: number;
  rating: number;
  service: number;
  location: string;
  image: string;
  button: string;
}

export interface DataBarbersCardProps {
  barber: DataBarbers;
  isLoading?: boolean;
}
