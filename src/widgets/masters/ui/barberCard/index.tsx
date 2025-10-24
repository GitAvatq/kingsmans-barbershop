"use client";
import { Button } from "@/components/ui/button";
import { MasterCardProps } from "../../types/interface.master";
import Image from "next/image";
import { StatusBadge } from "@/shared/statusBadge";
import { Skeleton } from "@/components/ui/skeleton";

export const BarberCard = ({
  barber: { barberImg, name, address, status },
  isLoading
}: MasterCardProps) => {

  return <>
    {isLoading ? (
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[250px] w-full rounded-xl bg-[#101010]" />
        <Skeleton className="h-4 w-full rounded-xl bg-[#101010]" />
        <Skeleton className="h-4 w-full rounded-xl bg-[#101010]" />
      </div>
    ) : (
      <div className="relative min-w-60 min-h-96 rounded-2xl flex flex-col items-start  justify-end">
        <Image
          src={barberImg}
          alt="barber img"
          fill
          className="object-cover rounded-lg -z-10"
        />
        <div className="flex flex-col gap-2.5 items-start w-full px-3.5 py-2.5 bg-black/50 shadow-2xl rounded-2xl rounded-b-none">
          <h2>{name}</h2>
          <p>{address}</p>
          <Button className="cursor-pointer hover:bg-white hover:text-gold transition-colors">
            Sign Up
          </Button>
        </div>
        <StatusBadge status={status} />
      </div>
    )}
  </>
};
