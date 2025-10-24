"use client"
import React from "react";
import { dataBarbersList } from "./model";
import { BarbersCard } from "./ui/card";
import vector1 from "@public/vector1.svg";
import vector2 from "@public/vector2.svg";
import Image from "next/image";
import { useGetBarbersQuery } from "../../api";
import { Skeleton } from "@/components/ui/skeleton";

const ListBanners = () => {
  const { data, isError, isLoading } = useGetBarbersQuery()
  const skeletons = Array.from({ length: 6 })

  return (
    <section className="py-16 relative max-sm:py-5">
      <div className="max-w-[1240px] mx-auto px-5">
        <h1 className="text-[#fff] text-4xl font-light text-center mb-16 max-sm:mb-8 max-sm:text-2xl">
          Your Style Experts
        </h1>
        <Image
          className="absolute left-0 top-20  hidden lg:block"
          src={vector1}
          width={125}
          height={125}
          alt="vector"
        />
        <Image
          className="absolute right-0 top-20  hidden lg:block"
          src={vector2}
          width={120}
          height={120}
          alt="vector"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {isLoading && skeletons.map((_, idx) => (
            <div key={idx} className="w-[377px] h-[470px]">
              <Skeleton className="h-[250px] w-full rounded-xl bg-[#101010]" />
              <div className="flex flex-col items-center gap-3 pt-3">
                <Skeleton className="h-6 w-26 rounded bg-[#101010]" />
                <Skeleton className="h-6 w-50 rounded bg-[#101010]" />
                <Skeleton className="h-6 w-46 rounded bg-[#101010]" />
                <Skeleton className="h-6 w-45 rounded bg-[#101010]" />
                <Skeleton className="h-6 w-28 rounded bg-[#101010]" />
              </div>
            </div>
          ))}
          {isError && <p className="text-left text-2xl text-red-300">Something went wrong</p>}
          {data?.map((el) => (
            <BarbersCard key={el.id} barber={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListBanners;
