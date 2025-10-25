import { Skeleton } from "@/components/ui/skeleton";

export default function BarberSkeleton() {
    return (
        <div className="w-[377px] h-[470px]">
            <Skeleton className="h-[250px] w-full rounded-xl bg-[#101010]" />
            <div className="flex flex-col items-center gap-3 pt-3">
                <Skeleton className="h-6 w-26 rounded bg-[#101010]" />
                <Skeleton className="h-6 w-50 rounded bg-[#101010]" />
                <Skeleton className="h-6 w-46 rounded bg-[#101010]" />
                <Skeleton className="h-6 w-45 rounded bg-[#101010]" />
                <Skeleton className="h-6 w-28 rounded bg-[#101010]" />
            </div>
        </div>
    )
}