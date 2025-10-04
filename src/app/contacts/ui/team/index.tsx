import React from 'react';
import { MemberCard } from '../memberCard';
import { members } from '../../model';

const Team = () => {
    return (
        <section className='bg-[url(/servicesBg.svg)] min-h-screen bg-center bg-cover bg-no-repeat py-20'>
            <h2>The KINGSMANS Team</h2>
            <div className='max-w-[1240px] mx-auto px-5 max-lg:flex max-lg:justify-center max-lg:items-center gap-3.5'>
                <div className='flex items-center justify-between max-lg:grid max-lg:grid-cols-2 max-lg:justify-center max-lg:gap-3.5 max-sm:grid-cols-1'>
                    {members.map((el) => (
                        <MemberCard key={el.id} el={el} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;