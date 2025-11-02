import React from 'react';
import { socials } from '../model';
import { SocialCard } from './socialCard';
import Link from 'next/link';
import { paths } from '@/shared/routing/paths';

const Footer = () => {
    return (
        <footer className="relative text-white z-30">
            <div className="mx-auto max-w-[1240px] px-5 py-16 relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-14 pt-10">

                    <div className="flex-1 flex flex-col gap-5">
                        <h1 className="font-footer text-3xl md:text-4xl leading-snug">
                            {"The largest international"} <br />
                            {" chain of men's hairdressing salons"}
                        </h1>
                        <p className="font-footer text-base md:text-lg max-w-[600px]">
                            {"  KingsMans Barbershop - is much more than just a men's barbershop, it's even more than a men's club, it's the place where you can find yourself and your style."}
                        </p>
                    </div>

                    <div className="flex flex-1 flex-col md:flex-row gap-10 md:gap-14 mt-30 md:mt-0">
                        <div className="flex flex-col gap-2">
                            <p className="uppercase text-2xl">Home</p>
                            <Link href={paths.home} className="font-medium uppercase text-base">Home</Link>
                            <Link href={paths.services} className="font-medium uppercase text-base">Services</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="uppercase text-2xl">Menu</p>
                            <Link href={paths.home} className="font-medium uppercase text-base">Home</Link>
                            <Link href={paths.services} className="font-medium uppercase text-base">Services</Link>
                        </div>
                    </div>

                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {socials.map((el) => (
                        <SocialCard key={el.id} el={el} />
                    ))}
                </div>
            </div>
        </footer>

    );
};

export default Footer;