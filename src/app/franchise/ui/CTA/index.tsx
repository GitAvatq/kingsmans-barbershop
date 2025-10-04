"use client"
import { CTA } from '@/features/cta-form/ui';
import React from 'react';
import decor1 from "@public/chair-decor.svg"
import Image from 'next/image';

const FranchiseForm = () => {
    return (
        <section className='relative min-h-[140vh]'>
            <div className='max-w-[1240px] px-5 mx-auto min-h-screen flex items-center justify-start'>
                <div className='text-white flex flex-col items-center max-sm:items-center justify-center'>
                    <div className='flex flex-col  items-start text-left max-sm:items-center max-sm:text-center my-20 max-sm:my-10'>
                        <h3 className='text-4xl font-base max-sm:text-xl mb-4'>
                            Open an <span className='text-accent'>KINGSMANS</span> <br /> Barbershop in your city
                        </h3>
                        <h2 className='text-2xl font-base max-sm:text-xl'>
                            Fill out the form and our manager will contact you.
                        </h2>
                    </div>

                    <div className='mt-24 ml-12 max-sm:ml-0 max-sm:mt-10'>
                        <CTA />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 right-0 max-lg:w-[340px] max-sm:hidden max-md:w-[300px] max-md:h-[300px]'>
                <Image src={decor1} width={500} height={500} alt='decor img' />
            </div>
        </section>
    );
};

export default FranchiseForm;