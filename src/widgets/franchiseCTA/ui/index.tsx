import { Button } from '@/components/ui/button';
import { section } from 'motion/react-client';
import React from 'react';

const FranchiseCTA = () => {
    return (
        <section className='bg-accent w-full'>
            <div className='mx-auto max-w-[1240px] px-5'>
                <div className='flex flex-col items-start justify-center gap-3 h-52'>
                    <h3 className='text-6xl font-medium font-abril max-md:text-4xl max-sm:text-3xl'>Learn about the franchise</h3>
                    <p className='text-2xl uppercase max-sm:text-base'>KINGSMAN BARBERSHOP</p>
                    <Button className='uppercase hover:text-gold hover:bg-white cursor-pointer '>Book Now</Button>
                </div>
            </div>
        </section>
    );
};

export default FranchiseCTA;
