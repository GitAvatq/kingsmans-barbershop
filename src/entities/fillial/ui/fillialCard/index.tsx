"use client"
import React from 'react';
import { IFillialProps } from '../../types/fillial.types';
import Link from 'next/link';
const FillialCard = ({ el }: IFillialProps) => {
    return (
        <div className="shrink-0 py-5 px-5 w-45 max-w-45 h-35 flex items-center justify-between flex-col border border-gold">
            <Link href={`${el.id}`}>
                <h4
                    className="relative
                    text-gold text-2xl font-base uppercase
                    max-sm:text-base
                    after:content-['']
                    after:absolute after:left-0 after:bottom-[-4px]
                    after:w-0 after:h-[2px] after:bg-gold
                    after:transition-all after:duration-300
                    hover:after:w-full"
                >
                    {el.country}
                </h4>
            </Link>
            <p className="font-base text-base text-white">{el.address}</p>
        </div>
    );
};

export default FillialCard;