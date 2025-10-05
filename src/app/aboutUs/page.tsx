import React from "react";
import Banner from "./ui/banner/ui";
import Header from "@/widgets/header/ui";
import OurStory from "./ui/ourStory/ui";
import Features from "./ui/features/ui";
import Footer from "@/widgets/footer/ui";

const page = () => {
  return (
    <>
      <div className="relative bg-[url('/aboutHeroBg.svg')] bg-cover bg-center w-full">
        <div className="bg-black/50 absolute inset-0 z-0"></div>
        <div className="relative  z-10 pb-5 ">
          <Header />
          <Banner />
        </div>
      </div>
      <OurStory />
      <Features />
      <div className="relative bg-[url(/footer-bg.jpg)] bg-left bg-cover w-full min-h-screen">
        <div className="bg-black/50 absolute inset-0 z-0"></div>
        <div className="z-10 pb-5 relative">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
