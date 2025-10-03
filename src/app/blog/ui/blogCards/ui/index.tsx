import React from "react";
import { blog } from "../model";
import { BlogCard } from "./card";

const Blog = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1240px] mx-auto px-5">
        <h1 className="text-5xl font-accent text-white text-center">
          LATEST NEWS
        </h1>

        <div className="flex flex-wrap justify-center gap-8 py-10">
          {blog.map((b) => (
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
