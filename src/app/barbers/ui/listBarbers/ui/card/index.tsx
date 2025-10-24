import React from "react";
import Image from "next/image";
import { DataBarbersCardProps } from "../../types/listBarbers.interface";
import { StatusBadge } from "@/shared/statusBadge";
import Link from "next/link";

export const BarbersCard = ({
  barber: {
    id,
    name,
    experience,
    status,
    earned,
    rating,
    service,
    location,
    image,
  },
}: DataBarbersCardProps) => {
  return (
    <div className="bg-black text-white flex flex-col items-center text-center transition-transform duration-300 hover:scale-101 hover:shadow-lg rounded-2xl overflow-hidden">
      <div className="relative w-full h-[250px]">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute top-3 right-3">
          <StatusBadge status={status} />
        </div>
      </div>
      <div className="p-3 flex flex-col items-center">
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="text-[17px] text-gray-300">
          Experience: {experience} years
        </p>
        <p className="text-[17px] text-gray-400">📍 {location}</p>
        <div className="flex items-center justify-center gap-1 text-[#E9C664]">
          {"★".repeat(Math.round(rating))}
          {"☆".repeat(5 - Math.round(rating))}
          <span className="ml-2 text-white text-base">({rating}/5)</span>
        </div>
        {earned && (
          <p className="text-[17px] text-gray-400">📜 Barber since {earned}</p>
        )}
        {service && (
          <p className="text-[17px] text-gray-400">💈 {service}+ haircuts</p>
        )}
        <Link href={`/barbers/${id}`}>
          <button className="mt-3 text-[#E9C664] text-[17px] font-semibold hover:underline cursor-pointer">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};
