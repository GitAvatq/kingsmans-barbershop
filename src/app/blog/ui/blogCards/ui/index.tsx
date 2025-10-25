import React from "react";
import { BlogCard } from "@/shared/blogCard/ui";
import { useGetBlogsQuery } from "@/app/services/ui/blog/api/blogApi";
import { Skeleton } from "@/components/ui/skeleton";
import { TBlog } from "@/app/blog/types/blog.types";

const Blog = () => {
  const { data, isError, isLoading } = useGetBlogsQuery();
  const skeletons = Array.from({ length: 6 });
  return (
    <section className="py-12">
      <div className="max-w-[1240px] mx-auto px-5">
        <h1 className="text-5xl font-accent text-white text-center">
          LATEST NEWS
        </h1>
        <div className="flex flex-wrap justify-center gap-8 py-10">
          {isError && (
            <p className="text-white w-full text-center">
              Failed to load blogs 😞
            </p>
          )}
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
            : data?.map((b: TBlog) => (
              <div key={b.id} className="flex-1 min-w-[280px] max-w-[320px]">
                <BlogCard el={b} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
