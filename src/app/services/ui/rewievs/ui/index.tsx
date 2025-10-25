"use client"
import React from "react";
import { ReviewCard } from "./card";
import { useGetReviewsQuery } from "../api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton";

const Reviews = () => {
  const { data, isLoading, isError } = useGetReviewsQuery()
  console.log(data);
  return (
    <section className="bg-white">
      <div className="max-w-[1240px] mx-auto px-5 py-12">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[20px] text-[#E9C664] font-semibold text-center">
            WHAT PEOPLE SAY ABOUT US
          </h4>
          <h1 className="max-md:text-4xl text-4xl font-accent text-center">
            CLIENTS REVIEWS
          </h1>
        </div>
        <>
          {
            isLoading
              ?
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

              :
              <Carousel className="w-full max-w-3xl mx-auto py-20">
                <CarouselContent>
                  {data?.map((r) => (
                    <CarouselItem key={r.id}>
                      <ReviewCard el={r} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-accent max-md:hidden" />
                <CarouselNext className="bg-accent max-md:hidden" />
              </Carousel>
          }
        </>
      </div>
      {isError && <p className="text-start p-10 text-red-300">{"Failed to load reviews :("}</p>}
    </section>
  );
};

export default Reviews;
