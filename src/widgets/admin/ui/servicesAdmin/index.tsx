"use client";
import { ServicesList } from "@/widgets/barbdersServices/types/interface.list";
import React from "react";
import { useForm } from "react-hook-form";
import { usePostServiceMutation } from "../../api";

const ServicesAdmin = () => {
  const { register, handleSubmit, formState } = useForm<ServicesList>();
  const [service, { data, isLoading }] = usePostServiceMutation();
  const onSubmit = (dataValue: ServicesList) => {
    console.log(dataValue);
    service(dataValue);
  };

  const nameError = formState.errors.name?.message;
  1;
  const priceError = formState.errors.price?.message;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex justify-center py-10">
      <div className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-800">
        <h1 className="text-3xl font-semibold mb-6 text-center">Services</h1>

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
            {...register("price", {
              required: "Price is empty",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "min price is 1",
              },
            })}
            type="text"
            placeholder="price"
            className="p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          {priceError && <p className="text-red-500 text-sm">{priceError}</p>}

          <button
            type="submit"
            className="mt-4 bg-accent hover:bg-gold text-white py-2 rounded transition-all"
          >
            {isLoading ? "Adding" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServicesAdmin;
