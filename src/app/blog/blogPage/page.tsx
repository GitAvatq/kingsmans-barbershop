import Header from '@/widgets/header/ui';
import React from 'react';
import img from "@public/blog-ceaser.jpg"
import Image from 'next/image';
import Footer from '@/widgets/footer/ui';

const BlogPage = () => {
    return (
        <>
            <div className="relative bg-[url(/hero-bg.jpg)] bg-center bg-cover w-full min-h-screen">
                <div className="bg-black/50 absolute inset-0 z-0"></div>
                <div className="relative  z-10 pb-5 ">
                    <Header />
                    <div className='flex flex-col items-center justify-center gap-33 mt-30'>
                        <h2 className='font-base text-white text-5xl max-md:text-3xl max-sm:text-xl'>{"Welcome To Blog Page!"}</h2>
                        <p className='text-gold max-w-[520px] text-base font-accent'>{"We re going to talk about something that you want to know or great feeling news for you"}</p>
                    </div>
                </div>
            </div>
            <main>
                <section>
                    <div className='mx-auto max-w-[1240px] px-5 text-white'>
                        <div className='pt-20 flex flex-col items-start justify-center mx-auto max-w-[700px]'>
                            <div>
                                <p>
                                    {`
                        Hairstyle is one of the most important aspects of a person's appearance that people notice when meeting them. A well-chosen haircut and clean, well-groomed hair can make someone like you, and vice versa. After all, it's hard to argue with the statement that most of us are visual people these days.
                        Many of us use Instagram, follow fashion, and consume information through images. This makes the role of a haircut even more important in the life of a business person.`

                                    }
                                </p>
                                <br /><br />
                                {`To look like a gentleman, it's best to choose classic hairstyles. They stand the test of time and suit most men, regardless of age. We'll tell you about five popular haircuts that remain relevant and are unlikely to ever go out of style.`} <br /><br />
                                <div>CAESAR</div>
                                <br />
                                <p>
                                    {`The haircut is believed to have originated with the Roman Emperor Gaius Julius Caesar. However, judging by surviving images, the hairstyle worn by the great commander and the modern version share only the presence of bangs. Moreover, in the latter case, the bangs are short and sharply defined.`}
                                </p>
                                <Image className='py-8' src={img} width={700} height={300} alt='ceaser img' />
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <div className="relative bg-[url(/footer-bg.jpg)] bg-left bg-cover w-full min-h-screen">
                <div className="bg-black/50 absolute inset-0 z-0"></div>
                <div className="z-10 pb-5 relative">
                    <Footer />
                </div>
            </div>
        </>

    );
};

export default BlogPage;