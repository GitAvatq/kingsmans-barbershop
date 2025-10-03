import React from "react";
import Banner from "./ui/banner/ui";
import Header from "@/widgets/header/ui";
import OurStory from "./ui/ourStory/ui";
import Features from "./ui/features/ui";
import Footer from "@/widgets/footer/ui";

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <OurStory />
      <Features />
      <Footer />
    </>
  );
};

export default page;
