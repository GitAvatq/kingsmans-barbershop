"use client"
import { motion } from "framer-motion";
import React from "react";
import ListBanners from "./ui/listBarbers";
import InfoBranches from "./ui/infoBranches";
import Footer from "@/widgets/footer/ui";
import BannerBarbers from "./ui/barbersBanner";
import Header from "@/widgets/header/ui";
import { useEffect } from 'react';

const Barbers = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="relative bg-[url(/barbers-bg.svg)] bg-cover bg-center max-lg:h-[80vh] max-md:h-[60vh] max-sm:h-[40vh] w-full">
        <motion.div
          className="bg-black/50 absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative  z-10 pb-5 ">
          <Header />
          <BannerBarbers />
        </div>
      </div>
      <main>
        <ListBanners />
        <InfoBranches />
      </main>
      <div className="relative bg-[url(/footer-bg.jpg)] bg-left bg-cover w-full">
        <div className="bg-black/50 absolute inset-0 z-0"></div>
        <div className="z-10 pb-5 relative">
          <Footer />
        </div>
      </div>

    </>
  );
};

export default Barbers;
