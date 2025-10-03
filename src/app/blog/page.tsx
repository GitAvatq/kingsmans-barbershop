import Footer from "@/widgets/footer/ui";
import Header from "@/widgets/header/ui";
import React from "react";
import BlogBanner from "./ui/blogBanner/ui";
import Blog from "./ui/blogCards/ui";

const page = () => {
  return (
    <>
      <Header />
      <BlogBanner />
      <Blog />
      <Footer />
    </>
  );
};

export default page;
