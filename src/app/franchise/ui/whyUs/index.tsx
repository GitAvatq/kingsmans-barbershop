import React from 'react';
import { whyUsData } from './model';
import { Card } from './card';

const WhyUs = () => {
    return (
        <section className='py-30'>
            <div className='max-w-[1240px] px-5 mx-auto'>
                <div>
                    <h3 className='text-5xl text-white font-accent mb-24 max-sm:text-3xl'>Why should you trust us?</h3>

                    <div className='flex gap-4 max-md:flex-col justify-between'>
                        {whyUsData.map((el) => (
                            <Card key={el.id} el={el} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;