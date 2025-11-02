"use client";
import React, { ReactNode, useEffect } from "react";
import Header from "@/widgets/header/ui";
import Hero from "@/widgets/hero/ui";
import Footer from "@/widgets/footer/ui";
import FillialHero from "@/widgets/fillialHero/ui";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pathname = usePathname()

  return (
    <>
      <div className="relative bg-[url(/hero-bg.jpg)] bg-center bg-cover w-full min-h-screen">
        <div className="bg-black/50 absolute inset-0 z-0"></div>
        <div className="relative  z-10 pb-5 ">
          <Header />
          {pathname !== "/" ? <FillialHero /> :
            <Hero />}
        </div>
      </div>
      <main>{children}</main>
      <div className="relative bg-[url(/footer-bg.jpg)] bg-left bg-cover w-full min-h-screen -z-10">
        <div className="bg-black/50 absolute inset-0 z-0"></div>
        <div className="z-10 pb-5 relative">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
