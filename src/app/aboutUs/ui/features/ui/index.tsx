import React from "react";
import { featuresData } from "../model";
import { FeaturesCard } from "./card";

const Features = () => {
  return (
    <section className="py-16 bg-white flex flex-col items-center justify-center">
      <div className="max-w-[1240px] mx-auto px-5 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-accent text-center">
          Our features
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-14">
          {featuresData.map((r) => (
            <FeaturesCard key={r.id} el={r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
