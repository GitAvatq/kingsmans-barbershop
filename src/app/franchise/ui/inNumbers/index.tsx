"use client"
import React from 'react';
import CountUp from 'react-countup';

const InNumbers = () => {
    return (
        <section className='bg-background'>
            <div className='max-w-[1240px] px-5 mx-auto'>
                <div className='flex items-baseline max-sm:flex-col max-sm:gap-14 justify-evenly py-30'>
                    <div className='text-white w-52 max-sm:w-full flex-col gap-2.5 text-center flex items-center justify-center'>
                        <CountUp className='text-accent font-abril text-5xl' start={100} end={404} />
                        <p className='text-xl font-base'>Open branches all over the world</p>
                    </div>
                    <div className='text-white w-52 max-sm:w-full flex-col gap-2.5 text-center flex items-center justify-center'>
                        <CountUp className='text-accent font-abril text-5xl' start={5} end={20} />
                        <p className='text-xl font-base'>Countries in which our branches operate</p>
                    </div>
                    <div className='text-white w-52 max-sm:w-full flex-col gap-2.5 text-center flex items-center justify-center'>
                        <CountUp className='text-accent font-abril text-5xl' start={100} end={390} />
                        <p className='text-xl font-base'>branches that received the highest recognition</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InNumbers;