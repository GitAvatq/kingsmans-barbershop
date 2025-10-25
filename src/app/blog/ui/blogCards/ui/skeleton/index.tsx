import { Skeleton } from "@/components/ui/skeleton";

export default function BlogSkeleton() {
    return (
        <div
            className="flex-1 min-w-[280px] max-w-[320px] flex flex-col space-y-3">
            <Skeleton className="h-[250px] w-full rounded-xl bg-[#101010]" />
            <Skeleton className="h-6 w-32 rounded bg-[#101010]" />
            <Skeleton className="h-4 w-full rounded bg-[#101010]" />
            <Skeleton className="h-4 w-3/4 rounded bg-[#101010]" />
        </div>
    )
}