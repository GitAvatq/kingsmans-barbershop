"use client";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section className="bg-[url('/whoWeAreBg.svg')] bg-cover h-[90vh] flex justify-center text-white text-center px-4">
      <div className="flex flex-col gap-5 py-28">
        <motion.h1
          className="text-4xl md:text-6xl font-accent text-[#D29C4E] text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Who we are?
        </motion.h1>

        <motion.p
          className="mt-4 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We are barbers for whom men’s style is not just a craft, but an honor.
          Our chairs have witnessed thousands of stories, and each haircut is
          more than just a service – it’s a ritual. Here men come to pause the
          noise of the outside world, to sit back, and to be reminded of who
          they truly are. Within these walls, conversations flow straight,
          laughter comes easy, and respect is always mutual. It’s a place where
          old traditions meet modern trends, where precision matters as much as
          character, and where every detail is sharpened to perfection. For us,
          style is not vanity – it’s confidence, discipline, and a way of
          carrying oneself with dignity. Every line we cut, every beard we
          shape, every touch of the blade is done with one goal: to make sure
          that when a man leaves our shop, he feels stronger, sharper, and ready
          to face the world. Our philosophy is simple: men’s style demands
          respect, precision, and character. That’s not a slogan – it’s a
          promise. And we deliver it, every single time.
        </motion.p>
      </div>
    </section>
  );
};

export default OurStory;
