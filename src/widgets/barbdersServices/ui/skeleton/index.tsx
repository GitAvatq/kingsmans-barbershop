import { Skeleton } from "@/components/ui/skeleton";
import { TableRow, TableCell } from "@/components/ui/table";

export default function ServicesListSkeleton() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <TableRow key={i} className="w-full">
          <TableCell className="px-2 md:px-4 py-3">
            <Skeleton className="h-6 w-[180px] rounded bg-[#101010]" />
          </TableCell>
          <TableCell className="px-2 md:px-4 py-3 text-right">
            <Skeleton className="h-6 w-[60px] rounded bg-[#101010] ml-auto" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
