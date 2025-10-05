"use client";

import { motion } from "framer-motion";
import React from "react";

const BlogBanner = () => {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] lg:h-[100vh] text-white flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-[1240px] mx-auto px-3 sm:px-5 text-center">
        <div className="flex flex-col gap-5">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-accent text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            KINGSMAN-BARBERS
          </motion.h1>

          <motion.h4
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-accent text-[#D29C4E] max-w-[90%] sm:max-w-[640px] mx-auto"
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
