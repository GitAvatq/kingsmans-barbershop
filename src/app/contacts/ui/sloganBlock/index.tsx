"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import welcomeImg from "@public/contact-welcome-img.png"
import { text } from "../../model";

const Slogan = () => {
    return (
        <section className='overflow-hidden bg-[url(/bg-map.png)] bg-white'>
            <div className='max-w-[1240px] mx-auto px-5'>
                <div>
                    <div className='max-w-[1240px] mx-auto px-5'>
                        <div className='min-h-screen flex items-center justify-center text-black'>
                            <motion.div

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
            </div>
        </section>
    );
};

export default Slogan;