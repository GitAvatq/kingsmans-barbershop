import Header from '@/widgets/header/ui';
import React from 'react';
import Welcome from './ui/hero';
import OurContacts from './ui/ourContacts';
import Team from './ui/team';
import Slogan from './ui/sloganBlock';
import Footer from '@/widgets/footer/ui';

const ContactUs = () => {
    return (
        <>
            <div className="relative bg-[url(/aboutHeroBg.svg)] bg-center bg-cover w-full min-h-screen">
                <div className="bg-black/50 absolute inset-0 z-0"></div>
                <div className="relative  z-10 pb-5 ">
                    <Header />
                    <Welcome />
                </div>
            </div>
            <OurContacts />
            <Team />
            <Slogan />
            <div className="relative bg-[url(/footer-bg.jpg)] bg-left bg-cover w-full min-h-screen">
                <div className="bg-black/50 absolute inset-0 z-0"></div>
                <div className="z-10 pb-5 relative">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default ContactUs;