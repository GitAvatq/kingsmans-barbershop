import React, { ReactNode } from "react";
import Header from "@/widgets/header/ui";
import Hero from "@/widgets/hero/ui";


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
        </>
    );
};

export default MainLayout;
