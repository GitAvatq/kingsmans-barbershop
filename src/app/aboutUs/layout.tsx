"use client"
import { motion } from "framer-motion";
import React, { ReactNode, useEffect } from 'react';
import Banner from "./ui/banner/ui";
import Header from "@/widgets/header/ui";
import Footer from "@/widgets/footer/ui";

const AboutLayout = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="relative bg-[url('/aboutHeroBg.svg')] bg-cover bg-center w-full">
                <motion.div
                    className="bg-black/50 absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <div className="relative  z-10 pb-5 ">
                    <Header />
                    <Banner />
                </div>
            </div>
            <main>{children}</main>
            <div className="relative bg-[url(/footer-bg.jpg)] bg-left bg-cover w-full min-h-screen">
                <div className="bg-black/50 absolute inset-0 z-0"></div>
                <div className="z-10 pb-5 relative">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default AboutLayout;