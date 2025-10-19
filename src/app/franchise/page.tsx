"use client"
import { motion } from "framer-motion";
import Header from '@/widgets/header/ui';
import React from 'react';
import Hero from './ui/hero';
import InNumbers from './ui/inNumbers';
import FranchiseCTA from '@/widgets/franchiseCTA/ui';
import FranchiseMap from '@/widgets/franchise/ui';
import WhyUs from './ui/whyUs';
import Profit from './ui/profit';
import FranchiseForm from './ui/CTA';
import Footer from '@/widgets/footer/ui';

const FranchisePage = () => {
    return (
        <>
            <div className="relative bg-[url(/franchise-bg.jpg)] bg-center bg-cover w-full min-h-screen">
                <motion.div
                    className="bg-black/50 absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <div className="relative  z-10 pb-5 ">
                    <Header />
                    <Hero />
                </div>
            </div>
            <InNumbers />
            <FranchiseMap />
            <FranchiseCTA />
            <WhyUs />
            <Profit />
            <FranchiseForm />
            <div className="relative bg-[url(/footer-bg.jpg)] bg-left bg-cover w-full min-h-screen">
                <div className="bg-black/50 absolute inset-0 z-0"></div>
                <div className="z-10 pb-5 relative">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default FranchisePage;