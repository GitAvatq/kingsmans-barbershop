"use client";
import React from "react";
import { motion } from "framer-motion";
import { barbersBannerData } from "./model";

const BannerBarbers = () => {
  return (
    <motion.div
      className="h-[100vh] relative bg-[url(/barbers-bg.svg)] bg-cover bg-center max-lg:h-[80vh] max-md:h-[60vh] max-sm:h-[40vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div
        className="relative max-w-[1240px] mx-auto px-5 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="text-[#FFF] pt-36 flex flex-col gap-8 max-lg:pt-18 max-lg:gap-4 max-md:pt-18 max-md:gap-5 max-sm:gap-2 max-sm:pt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-[64px] font-bold max-md:text-4xl max-sm:text-2xl">
            BARBERS OF <span className="text-[#E9C664]">KINGSMAN</span>
          </h1>
          <p className="text-6xl font-light leading-tight max-md:text-4xl max-sm:text-2xl">
            Professionals <br />
            with impeccable taste
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-3 gap-6 text-white max-lg:mt-10 max-lg:gap-2 max-md:gap-0 max-sm:mt-2">
          {barbersBannerData.map((i, index) => (
            <motion.div
              key={i.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <span className="text-5xl font-bold text-[#E9C664] max-md:text-3xl max-sm:text-[22px]">
                {i.number}+
              </span>
              <p className="text-lg max-md:text-[14px] max-sm:text-center max-sm:text-[12px]">
                {i.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BannerBarbers;
