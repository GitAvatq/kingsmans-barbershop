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
import ReviewSkeleton from "./skeleton";
import ReviewForm from "@/widgets/reviewForm/ui";

const Reviews = () => {
  const { data, isLoading, isError } = useGetReviewsQuery()
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
              <ReviewSkeleton />
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
      {isError && <p className="text-start p-10 text-red-300">{"Failed to load reviews 😞"}</p>}
    </section>
  );
};

export default Reviews;
