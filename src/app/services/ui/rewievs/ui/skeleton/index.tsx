import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ReviewSkeleton = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-20">
      <div className="flex flex-col justify-between gap-6 max-w-full h-96 text-start bg-background p-10 rounded-2xl">
        <div className="flex flex-col gap-4">
          <Skeleton className="w-[100px] h-[100px] rounded-full bg-[#101010]" />
          <Skeleton className="w-1/5 h-7 rounded-xl bg-[#101010]" />
          <Skeleton className="w-4/6 h-5 rounded-xl bg-[#101010]" />
          <Skeleton className="w-4/6 h-5 rounded-xl bg-[#101010]" />
        </div>

        <div className="flex w-full justify-between items-center">
          <Skeleton className="w-28 h-8 rounded-xl bg-[#101010]" />
          <div className="flex gap-2">
            <Skeleton className="w-30 h-8 rounded-xl bg-[#101010]" />
            <Skeleton className="w-30 h-8 rounded-xl bg-[#101010]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
