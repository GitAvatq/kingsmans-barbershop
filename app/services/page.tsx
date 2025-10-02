import React from "react";
import Title from "./ui/title";
import Rewievs from "./ui/rewievs/ui";
import BarbersServices from "@/widgets/barbdersServices/ui";
import BlogSection from "./ui/blog/ui";

const Services = () => {
  return (
    <section>
      <Title />
      <BarbersServices />
      <Rewievs />
      <BlogSection />
    </section>
  );
};

export default Services;
