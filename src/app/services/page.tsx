"use client";
import { motion } from "framer-motion";
import React from "react";
import Title from "./ui/title";
import Rewievs from "./ui/rewievs/ui";
import BarbersServices from "@/widgets/barbdersServices/ui";
import BlogSection from "./ui/blog/ui";
import Header from "@/widgets/header/ui";
import Footer from "@/widgets/footer/ui";
import ReviewForm from "@/widgets/reviewForm/ui";

const Services = () => {
  return (
    <>
      <div className="relative  bg-[url('/servicesBg.svg')] bg-cover bg-center w-full">
        <motion.div
          className="bg-black/50 absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative  z-10 pb-5 ">
          <Header />
          <Title />
        </div>
      </div>
      <BarbersServices />
      <Rewievs />
      <ReviewForm />
      <BlogSection />
      <div className="relative bg-[url(/footer-bg.jpg)] bg-left bg-cover w-full min-h-screen">
        <div className="bg-black/50 absolute inset-0 z-0"></div>
        <div className="z-10 pb-5 relative">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Services;
