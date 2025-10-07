// page.tsx (главная страница)
import React from "react";
import Masters from "@/widgets/masters/ui";
import WhyUs from "@/widgets/whyUs/ui";
import BarbersServices from "@/widgets/barbdersServices/ui";
import Franchise from "@/widgets/franchise/ui";
import FranchiseCTA from "@/widgets/franchiseCTA/ui";
import Location from "@/widgets/location";
import Fillial from "@/entities/fillial/ui";

const Home = () => {
    return (
        <>
            <WhyUs />
            <BarbersServices />
            <Masters />
            <Franchise />
            <FranchiseCTA />
            <Location />
            <Fillial />
        </>
    );
};

export default Home;
