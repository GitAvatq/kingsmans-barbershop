"use client"
import Footer from "@/widgets/footer/ui";
import Header from "@/widgets/header/ui";
import React from "react";
import BlogBanner from "./ui/blogBanner/ui";
import Blog from "./ui/blogCards/ui";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <div className="relative  bg-[url('/franchise-bg.jpg')] bg-cover bg-center w-full">
        <motion.div
          className="bg-black/50 absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative  z-10 pb-5 ">
          <Header />
          <BlogBanner />
        </div>
      </div>
      <Blog />
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
