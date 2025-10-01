import React from 'react';
import { masterData } from '../model';
import { BarberCard } from './barberCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Masters = () => {
    return (
        <section className='pb-11 bg-[url(/bg.jpg)] bg-center bg-cover w-full min-h-screen'>
            <div className='max-w-[1240px] mx-auto px-5 text-white'>
                <div className='py-7'>
                    <h1 className='text-6xl max-md:text-4xl py-10 font-accent text-center'>
                        Our Masters
                    </h1>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-4xl gap-3.5 mx-auto"
                >
                    <CarouselContent>
                        {masterData.map((el, index) => (
                            <CarouselItem key={index} className="w-full md:w-2xs basis-1/3 max-sm:basis-3/3 max-md:basis-1/2 max-lg:basis-1/3">
                                <BarberCard barber={el} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <span className='max-lg:hidden'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </span>
                </Carousel>
            </div>
        </section>
    );
};

export default Masters;
