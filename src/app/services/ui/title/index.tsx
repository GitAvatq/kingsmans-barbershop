"use client";
import { motion } from "framer-motion"
import React from "react";

const Title = () => {
  const text = "SERVICES"
  return (
    <div className="inset-x-0 top-0 h-[40vh] flex items-center justify-center text-white z-10">
      <motion.h1 className="text-4xl md:text-6xl font-accent text-white text-center">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default Title;
