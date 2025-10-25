import React from "react";
import { BlogCard } from "@/shared/blogCard/ui";
import { useGetBlogsQuery } from "@/app/services/ui/blog/api/blogApi";
import { TBlog } from "@/app/blog/types/blog.types";
import BlogSkeleton from "./skeleton";

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
          {isLoading
            ? skeletons.map((_, index) => (
              <BlogSkeleton key={index} />
            ))
            : data?.map((b: TBlog) => (
              <div key={b.id} className="flex-1 min-w-[280px] max-w-[320px]">
                <BlogCard el={b} />
              </div>
            ))}
        </div>

        {isError && (
          <p className="text-start p-10 text-red-300">{"Failed to load blogs 😞"}</p>
        )}
      </div>
    </section>
  );
};

export default Blog;
