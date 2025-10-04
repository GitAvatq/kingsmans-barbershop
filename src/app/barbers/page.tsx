import Header from "@/widgets/header/ui";
import React from "react";
import BannerBarbers from "./ui/barbersBanner";
import ListBanners from "./ui/listBarbers";
import InfoBranches from "./ui/infoBranches";

const Barbers = () => {
  return (
    <section>
      <Header />
      <BannerBarbers />
      <ListBanners />
      <InfoBranches />
    </section>
  );
};

export default Barbers;
