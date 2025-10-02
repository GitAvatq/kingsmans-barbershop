// page.tsx (главная страница)
import React from "react";
import Masters from "@/widgets/masters/ui";
import WhyUs from "@/widgets/whyUs/ui";
import BarbersServices from "@/widgets/barbdersServices/ui";
import Franchise from "@/widgets/franchise/ui";

const Home = () => {
    return (
        <>
            <WhyUs />
            <BarbersServices />
            <Masters />
            <Franchise />
        </>
    );
};

export default Home;
