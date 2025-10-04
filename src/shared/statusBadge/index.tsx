import { Badge } from "@/components/ui/badge";
import { IBadge } from "./types/badge.interface";

export const StatusBadge = ({ status }: IBadge) => (
  <Badge
    style={{
      color: `${
        status === "Top Barber"
          ? "#63c5da"
          : status === "Premium Barber"
          ? "violet"
          : status === "Kingsman Barber"
          ? "#d29c4e"
          : "gray"
      }`,
    }}
    className={`absolute top-2.5 right-1.5 py-2 px-4 z-20`}
  >
    {status}
  </Badge>
);
