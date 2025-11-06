"use client";
import { DataBarbers } from "@/app/barbers/ui/listBarbers/types/listBarbers.interface";
import React from "react";
import { useForm } from "react-hook-form";
import { usePostBarberMutation } from "../../api";

const BarbersAdmin = () => {
  const { register, handleSubmit, formState } = useForm<DataBarbers>();
  const [barber, { data, isLoading }] = usePostBarberMutation();
  const onSubmit = (dataValue: DataBarbers) => {
    console.log(dataValue);
    barber(dataValue);
  };

  console.log(data);

  const nameError = formState.errors.name?.message;
  const imageError = formState.errors.image?.message;
  const experienceError = formState.errors.experience?.message;
  const statusError = formState.errors.status?.message;
  const earnedError = formState.errors.earned?.message;
  const ratingError = formState.errors.rating?.message;
  const serviceError = formState.errors.service?.message;
  const locationError = formState.errors.location?.message;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex justify-center py-10">
      <div className="w-full max-w-2xl bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-800">
        <h1 className="text-3xl font-semibold mb-6 text-center">Barbers</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("name", {
              required: "Name is empty",
              minLength: {
                value: 3,
                message: "min length is 3",
              },
            })}
            type="text"
            placeholder="name"
            className="p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          {nameError && <p className="text-red-500 text-sm">{nameError}</p>}

          <input
            {...register("image", {
              required: "ImageUrl is empty",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message: "Invalid URL format",
              },
            })}
            type="text"
            placeholder="imageUrl"
            className="p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          {imageError && <p className="text-red-500 text-sm">{imageError}</p>}

          <input
            {...register("experience", {
              required: "Experience is empty",
              minLength: {
                value: 1,
                message: "min length is 1",
              },
            })}
            type="text"
            placeholder="experience"
            className="p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          {experienceError && (
            <p className="text-red-500 text-sm">{experienceError}</p>
          )}

          <input
            {...register("status", {
              required: "Status is empty",
              minLength: {
                value: 3,
                message: "min length is 3",
              },
            })}
            type="text"
            placeholder="status"
            className="p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          {statusError && <p className="text-red-500 text-sm">{statusError}</p>}

          <input
            {...register("earned", {
              required: "Earned is empty",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "min earned is 0",
              },
            })}
            type="text"
            placeholder="earned"
            className="p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          {earnedError && <p className="text-red-500 text-sm">{earnedError}</p>}

          <input
            {...register("rating", {
              required: "Rating is empty",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "min rating is 0",
              },
            })}
            type="text"
            placeholder="rating"
            className="p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          {ratingError && <p className="text-red-500 text-sm">{ratingError}</p>}

          <input
            {...register("service", {
              required: "Service is empty",
              minLength: {
                value: 3,
                message: "min length is 3",
              },
            })}
            type="text"
            placeholder="service"
            className="p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          {serviceError && (
            <p className="text-red-500 text-sm">{serviceError}</p>
          )}

          <input
            {...register("location", {
              required: "Location is empty",
              minLength: {
                value: 3,
                message: "min length is 3",
              },
            })}
            type="text"
            placeholder="location"
            className="p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          {locationError && (
            <p className="text-red-500 text-sm">{locationError}</p>
          )}

          <button
            type="submit"
            className="cursor-pointer mt-4 bg-accent hover:bg-gold text-white py-2 rounded transition-all"
          >
            {isLoading ? "Adding..." : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BarbersAdmin;
