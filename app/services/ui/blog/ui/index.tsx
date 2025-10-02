import React from "react";
import { BlogCard } from "./card";
import { blogsData } from "../model";

const BlogSection = () => {
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
          {blogsData.map((b) => (
            <div key={b.id} className="flex-1 min-w-[280px] max-w-[380px]">
              <BlogCard el={b} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
