import React from "react";
import { ReviewCard } from "./card";
import { reviewsData } from "../model";

const Reviews = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1240px] mx-auto px-5 py-12">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[20px] text-[#E9C664] font-semibold text-center">
            WHAT PEOPLE SAY ABOUT US
          </h4>
          <h1 className="max-md:text-4xl text-6xl font-accent text-center">
            CLIENTS REVIEWS
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-10 py-14">
          {reviewsData.map((r) => (
            <div key={r.id} className="flex-1 min-w-[260px] max-w-[320px]">
              <ReviewCard el={r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
