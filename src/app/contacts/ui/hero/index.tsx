"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import React from 'react';
import welcomeImg from "@public/contact-welcome-img.png"
import { text } from "../../model";

const Welcome = () => {
    console.log(text.length);

    return (
        <div>
            <div className='max-w-[1240px] mx-auto px-5'>
                <div className='min-h-screen flex items-center justify-center text-white'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 100 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.3
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className='relative'>
                            <Image src={welcomeImg} width={500} height={200} alt='welcome img' />
                            <motion.h1 className="absolute top-2 left-43 max-sm:left-33 leading-16  text-5xl md:text-3xl font-base text-center max-w-[100px] max-md:text-3xl max-sm:text-2xl">
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
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Welcome;