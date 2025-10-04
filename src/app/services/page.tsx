import React from "react";
import Title from "./ui/title";
import Rewievs from "./ui/rewievs/ui";
import BarbersServices from "@/widgets/barbdersServices/ui";
import BlogSection from "./ui/blog/ui";
import Header from "@/widgets/header/ui";

const Services = () => {
  return (
    <>
      <Header />
      <Title />
      <BarbersServices />
      <Rewievs />
      <BlogSection />
    </>
  );
};

export default Services;
