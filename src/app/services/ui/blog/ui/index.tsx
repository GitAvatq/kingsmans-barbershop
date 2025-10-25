"use client"
import React from "react";
import { BlogCard } from "@/shared/blogCard/ui";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetBlogsQuery } from "@/app/services/ui/blog/api/blogApi";
import { TBlog } from "@/app/blog/types/blog.types";

const BlogSection = () => {
  const { data, isLoading, isError } = useGetBlogsQuery()
  const skeletons = Array.from({ length: 3 })
  return (
    <section className="bg-[#1E1E1E] py-16">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[20px] text-[#E9C664] font-semibold text-center">
            OUR BLOG
          </h4>
          <h1 className="text-5xl font-accent text-white">LATEST NEWS</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6 py-14">
          {isLoading
            ? skeletons.map((_, index) => (
              <div
                key={index}
                className="flex-1 min-w-[280px] max-w-[320px] flex flex-col space-y-3"
              >
                <Skeleton className="h-[250px] w-full rounded-xl bg-[#101010]" />
                <Skeleton className="h-6 w-32 rounded bg-[#101010]" />
                <Skeleton className="h-4 w-full rounded bg-[#101010]" />
                <Skeleton className="h-4 w-3/4 rounded bg-[#101010]" />
              </div>
            ))
            : data?.slice(0, 3).map((b: TBlog) => (
              <div key={b.id} className="flex-1 min-w-[280px] max-w-[320px]">
                <BlogCard el={b} />
              </div>
            ))}
        </div>
      </div>
      {isError && <p className="text-start p-10 text-red-300">{"Failed to load blogs :("}</p>}
    </section>
  );
};

export default BlogSection;
