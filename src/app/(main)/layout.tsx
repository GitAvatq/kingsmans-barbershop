import React, { ReactNode } from "react";
import Header from "@/widgets/header/ui";
import Hero from "@/widgets/hero/ui";
import Footer from "@/widgets/footer/ui";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (

        <>
            <div className="relative bg-[url(/hero-bg.jpg)] bg-center bg-cover w-full min-h-screen">
                <div className="bg-black/50 absolute inset-0 z-0"></div>
                <div className="relative  z-10 pb-5 ">
                    <Header />
                    <Hero />
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

export default MainLayout;
