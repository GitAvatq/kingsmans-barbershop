"use client";
import { motion } from "framer-motion";

const Banner = () => {
  const text = "Not a haircut. A man’s ritual.";

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/aboutHeroBg.svg')] bg-cover bg-center -z-10" />

      <div className="max-w-[1240px] mx-auto-5 px-5">
        <div className=" flex items-center justify-center">
          <motion.h1 className="text-4xl md:text-6xl font-accent text-[#D29C4E] text-center">
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
      </div>
    </section>
  );
};

export default Banner;
