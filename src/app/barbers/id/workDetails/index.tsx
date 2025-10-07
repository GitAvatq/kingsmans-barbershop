import React from 'react';
import { barberDetails } from '../model';
import { WorkCards } from './cards';

const BarberWorkDetails = () => {
    return (
        <section>
            <div className='mx-auto max-w-[1240px] px-5'>
                <div className='text-white'>
                    <h2 className='text-6xl font-base text-center py-20'>My Works</h2>
                    <div className='py-20 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2.5'>
                        {barberDetails.map((el) => (
                            <WorkCards key={el.id} card={el} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BarberWorkDetails;