import BarbersServices from "@/widgets/barbdersServices/ui";
import Header from "@/widgets/header/ui";
import Hero from "@/widgets/hero/ui";
import Masters from "@/widgets/masters/ui";
import WhyUs from "@/widgets/whyUs/ui";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative bg-[url(/hero-bg.jpg)] bg-center bg-cover w-full min-h-screen  ">
        <div className="bg-black/50 absolute inset-0 z-0"></div>
        <div className="relative  z-10 pb-5 ">
          <Header />
          <Hero />
        </div>
      </div>
      <main>
        <WhyUs />
        <BarbersServices />
        <Masters />
      </main>
    </div>
  );
};

export default page;
