import React from 'react';
import { cardData } from '../model';
import { Card } from './card';

const WhyUs = () => {
    return (
        <div className=''>
            <div className='max-w-[1240px] mx-auto px-5'>
                <div className='py-7 text-white'>
                    <h1 className='pt-10 text-6xl font-accent text-center'>Why Us</h1>
                    <p className='mt-6 pb-20 font-accent text-xl text-center'>{`We've created the perfect destination for men's style and grooming.`}</p>
                    <div className='grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                        {cardData.map((c) => (
                            <Card key={c.id} el={c} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;