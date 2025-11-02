"use client"
import { Spinner } from '@/components/ui/spinner';
import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

const FillialHero = () => {
    const fillialDetails = useSelector((state: RootState) => state.fillialById)
    if (!fillialDetails) {
        return <Spinner fontSize={32} className='text-accent fixed top-1/2 mx-auto' />
    }
    return (
        <div className='mx-auto max-w-[1240px]'>
            <div className='w-full flex justify-between items-start py-20 px-12'>
                <div className='text-gray-500 scroll-m-20 border-b pb-2 tracking-tight first:mt-0'><h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Our number has grown and we now <br />
                    have branches in <span className='text-gold'>{fillialDetails.country}!</span>
                </h2>
                    <p className='text-gray-200'><span className='text-gold text-xl'>Country</span> : {fillialDetails.country}</p>
                    <p className='text-gray-200'><span className='text-gold text-xl'>Address</span> : {fillialDetails.address}</p></div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default FillialHero;