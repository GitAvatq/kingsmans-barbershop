"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import label from "@public/aboutVector.svg";

const Banner = () => {
  const text = "Not a haircut. A man’s ritual.";

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/aboutHeroBg.svg')] bg-cover bg-center -z-10" />

      <div className="relative flex items-center justify-center">
        <Image src={label} alt="label" />

        <motion.h1 className="absolute text-4xl md:text-6xl font-accent text-[#D29C4E] text-center">
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
    </section>
  );
};

export default Banner;
