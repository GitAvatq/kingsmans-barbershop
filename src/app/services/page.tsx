import React from "react";
import Title from "./ui/title";
import Rewievs from "./ui/rewievs/ui";
import BarbersServices from "@/widgets/barbdersServices/ui";
import BlogSection from "./ui/blog/ui";
import Header from "@/widgets/header/ui";
import Footer from "@/widgets/footer/ui";

const Services = () => {
  return (
    <section>
      <Header />
      <Title />
      <BarbersServices />
      <Rewievs />
      <BlogSection />
      <Footer />
    </section>
  );
};

export default Services;
