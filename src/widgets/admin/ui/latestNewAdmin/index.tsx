"use client";
import { TBlog } from "@/app/blog/types/blog.types";
import React from "react";
import { useForm } from "react-hook-form";
import { usePostLatestNewsMutation } from "../../api";

const LatestNewsAdmin = () => {
  const { register, handleSubmit, formState } = useForm<TBlog>();
  const [news, { isLoading, data }] = usePostLatestNewsMutation();
  const onSubmit = (dataValue: TBlog) => {
    console.log(dataValue);
    news(dataValue);
  };

  const nameError = formState.errors.name?.message;
  const imageError = formState.errors.image?.message;
  const descriptionError = formState.errors.description?.message;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex justify-center py-10">
      <div className="w-full max-w-xl bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-800">
        <h1 className="text-3xl font-semibold mb-6 text-center">Latest News</h1>

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
            {...register("description", {
              required: "Description is empty",
              minLength: {
                value: 10,
                message: "min length is 10",
              },
            })}
            type="text"
            placeholder="description"
            className="p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          {descriptionError && (
            <p className="text-red-500 text-sm">{descriptionError}</p>
          )}

          <button
            type="submit"
            className="mt-4 bg-accent hover:bg-gold text-white py-2 rounded transition-all"
          >
            {isLoading ? "Adding..." : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LatestNewsAdmin;
