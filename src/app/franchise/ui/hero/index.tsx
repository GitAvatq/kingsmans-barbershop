import Image from 'next/image';
import React from 'react';
import beboss from "@public/Biboss1.svg"
import beboss2 from "@public/Biboss2.svg"
import top from "@public/top1logo.png"

const Hero = () => {
    return (
        <div className='pt-24'>
            <div className='max-w-[1240px] px-5 mx-auto'>
                <div className='text-white relative'>
                    <h1 className='font-base text-6xl leading-20 max-w-[500px] max-sm:text-3xl max-sm:leading-10'>Become a <span className='text-gold'>KINGSMAN</span> barbershop <br /> owner</h1>
                    <p className='text-xl mt-5 text-gray-400 font-abril max-sm:text-base max-sm:pt-2.5'>Earn from 30,000  $/month</p>
                    <Image className='absolute right-50 top-10 max-lg:hidden' src={top} width={300} height={200} alt='top logo' />
                    <div className='absolute flex gap-2.5 right-40 bottom-2.5 max-md:right-10 max-sm:bottom-8'>
                        <div className="flex gap-4">
                            <div className="w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] max-sm:w-[50px] max-sm:h-[50px]">
                                <Image src={beboss} alt="be boss logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] max-sm:w-[50px] max-sm:h-[50px]">
                                <Image src={beboss2} alt="be boss logo" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;