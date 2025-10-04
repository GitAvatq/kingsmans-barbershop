import Image from 'next/image';
import React from 'react';
import decorBorder from "@public/border-decor.svg"

const OurContacts = () => {
    return (
        <section className='bg-background py-30'>
            <div className='max-w-[1240px] mx-auto px-5'>
                <h3 className='text-4xl text-white text-start ml-30 mb-10 uppercase font-base max-sm:ml-3.5 max-sm:text-3xl'>Contacts</h3>
                <div className='flex flex-col justify-between'>
                    <div className='relative flex justify-center max-sm:static'>
                        <Image className='max-sm:hidden' src={decorBorder} width={800} height={300} alt="decor img" />
                        <div className='w-[700px] absolute max-sm:static grid grid-cols-2 max-sm:grid-cols-1 gap-0 justify-between px-10 py-10 max-md:px-20 max-sm:px-10'>
                            <div className='flex flex-col gap-7 max-sm:mb-10'>
                                <div>
                                    <h4 className='text-3xl max-md:text-2xl text-gold font-base'>Address:</h4>
                                    <p className='text-base font-base text-white'>KYRGYZSTAN <br />
                                        Maxim Gorky Street, 18</p>
                                </div>
                                <div>
                                    <h4 className='text-3xl max-md:text-2xl text-gold font-base'>WebSite:</h4>
                                    <p className='text-base font-base text-white'>WWW.KINGSMANBARBERS</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-7'>
                                <div>
                                    <h4 className='text-3xl max-md:text-2xl text-gold font-base'>E-mail:</h4>
                                    <p className='text-base font-base text-white'>INFO@KINGSMANBARBERSHOP.COM</p>
                                </div>
                                <div>
                                    <h4 className='text-3xl max-md:text-2xl text-gold font-base'>Phone:</h4>
                                    <p className='text-base font-base text-white'>996508100165</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurContacts;