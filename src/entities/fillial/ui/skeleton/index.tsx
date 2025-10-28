import { Skeleton } from "@/components/ui/skeleton"

export const FillialCardSkeleton = () => {
    return (
        <div className="shrink-0 py-5 px-5 w-45 max-w-45 h-35 flex items-center justify-between flex-col border border-gold hover:border-white">
            <Skeleton className="h-6 w-15 rounded bg-[#101010]" />
            <Skeleton className="h-6 w-25 rounded bg-[#101010]" />
        </div>
    )
}
export default Skeleton