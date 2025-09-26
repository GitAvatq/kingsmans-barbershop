import Image from 'next/image';
import React from 'react';
import hero from "@public/welcome-hero.png"
import icon from "@public/iconmustache.svg"

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-10 z-40'>
            <div className='max-w-[1240px] mx-auto flex flex-col items-center gap-3'>
                <div className='flex flex-col items-center justify-center relative'>
                    <Image src={hero} width={300} height={500} alt='hero image' />
                    <h1 className='absolute top-40 text-center text-white font-accent  text-4xl max-sm:text-2xl'>KINGSMAN <br /> BARBERS</h1>
                    <Image className='absolute top-70' src={icon} width={120} height={120} alt='icon' />
                </div>
                <button className='cursor-pointer active:text-accent active:bg-white hover:bg-white hover:text-accent transition-colors bg-accent px-10 w-44 py-3 max-sm:w-36 max-sm:px-5 rounded-2xl uppercase font-accent'>Sign Up</button>
            </div>
        </div>
    );
};

export default Hero;