import Header from "@/widgets/header/ui";
import React from "react";
import BannerBarbers from "./ui/barbersBanner";
import ListBanners from "./ui/listBarbers";
import InfoBranches from "./ui/infoBranches";
import BarbersDetails from "./id/page";
import Footer from "@/widgets/footer/ui";

const Barbers = () => {
  return (
    <section>
      <div className="relative bg-[url(/barbers-bg.svg)] bg-cover bg-center max-lg:h-[80vh] max-md:h-[60vh] max-sm:h-[40vh] w-full">
        <div className="bg-black/50 absolute inset-0 z-0"></div>
        <div className="relative  z-10 pb-5 ">
          <Header />
          <BannerBarbers />

        </div>
      </div>
      <ListBanners />
      <InfoBranches />
      <BarbersDetails />
      <div className="relative bg-[url(/footer-bg.jpg)] bg-left bg-cover w-full">
        <div className="bg-black/50 absolute inset-0 z-0"></div>
        <div className="z-10 pb-5 relative">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Barbers;
