import React from "react";
import Banner from "./ui/banner/ui";
import Header from "@/widgets/header/ui";
import OurStory from "./ui/ourStory/ui";
import Features from "./ui/features/ui";

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <OurStory />
      <Features />
    </>
  );
};

export default page;
