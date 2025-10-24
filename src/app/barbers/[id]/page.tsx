"use client"
import React from "react";
import Image from "next/image";
import { FaInstagram, FaStar } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useGetDetailsQuery } from "./api";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import BarberWorkDetails from "./workDetails";

const BarbersDetails = () => {
  const { id } = useParams()
  const barberId = Number(id)
  const { data, isLoading, isError } = useGetDetailsQuery(barberId)
  console.log(data);
  if (isLoading) return <Spinner className="size-8 text-yellow-500 absolute top-[50%] mx-[50%] " />
  if (!data) return
  const { name, image, location, rating, status, works, experience } = data
  return (
    <>
      <div className="relative bg-[url(/barbers-details.svg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-[1240px] mx-auto px-5 py-12">
          <div
            className="
            flex flex-col md:flex-row gap-8 
            bg-[url('/barber-bg.jpg')] bg-cover bg-center 
            rounded-xl p-6 text-white shadow-lg
          "
          >
            <div className="flex-shrink-0 rounded-xl overflow-hidden w-full md:w-[300px] h-[400px] shadow-md">
              <Image
                src={image}
                alt={name}
                width={400}
                height={544}
                className="object-cover w-full h-full"
              />
              {isLoading && <Skeleton className="h-[544px] w-[400px] rounded bg-[#101010]" />}
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">
                  {name}
                </h2>
                <ul className="mt-6 space-y-2 text-base sm:text-lg">
                  <li>
                    <span className="font-bold">Status:</span> {status}
                  </li>
                  <li>
                    <span className="font-bold">Experience:</span> {experience}
                  </li>
                  <li>
                    <span className="font-bold">Location:</span>  {location}
                  </li>
                </ul>
                <div className="flex items-center gap-1 mt-4">
                  <span className="font-bold">Rating:</span>
                  <FaStar
                    className="text-yellow-400 text-xl sm:text-2xl"
                  />{rating}
                </div>
              </div>

              <div className="mt-8">
                <button
                  className="
                  px-8 py-3 
                  bg-yellow-400 text-black rounded-lg font-medium 
                  text-base sm:text-lg
                "
                >
                  Book Now
                </button>

                <div className="flex items-center gap-6 mt-6 text-2xl sm:text-3xl">
                  <a href="#" rel="noopener noreferrer" className="text-pink-500">
                    <FaInstagram />
                  </a>
                  <a href="#" rel="noopener noreferrer" className="text-sky-400">
                    <FaTelegramPlane />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BarberWorkDetails works={works} />
    </>
  );
};

export default BarbersDetails;
