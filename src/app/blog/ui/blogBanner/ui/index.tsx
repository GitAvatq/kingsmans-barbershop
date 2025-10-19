"use client";

import { motion } from "framer-motion";
import React from "react";

const BlogBanner = () => {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] lg:h-[100vh] text-white flex items-center justify-center overflow-hidden">
      

      <div className="max-w-[1240px] mx-auto px-3 sm:px-5 text-center">
        <div className="flex flex-col gap-5">
          <motion.h1
            className="font-base text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            KINGSMAN-BARBERS
          </motion.h1>

          <motion.h4
            className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-base text-[#D29C4E] max-w-[90%] sm:max-w-[640px] mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            The latest news and information from the world of men`s haircuts and
            true style.
          </motion.h4>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
