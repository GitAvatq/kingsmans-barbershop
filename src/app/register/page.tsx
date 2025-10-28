"use client"
import React from 'react';
import banner from "@public/register-login-bg.jpg"
import Image from 'next/image';
import AuthForm from '@/features/auth/ui';
import { motion } from "framer-motion";
import Link from 'next/link';
import SocialAuth from '@/features/social-auth/ui';

const Register = () => {
    return (
        <div className='min-h-screen flex items-center justify-center py-8 relative overflow-hidden'>
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 text-white space-y-8 z-10"
                >
                    <h4 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
                        Get Start It with <span className="text-gold">Kingsmans</span>
                    </h4>
                    <AuthForm register />
                    <div className="text-lg sm:text-xl font-base max-w-[220px]">
                        Have an account?{" "}
                        <Link href="/login" className="text-gold cursor-pointer">
                            Sign In
                        </Link>
                    </div>


                    <div className="block lg:hidden mt-8">
                        <SocialAuth />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-lg:hidden flex w-1/2 absolute right-0 top-12 -z-0"
                >
                    <div className="flex justify-center absolute right-0 top-12">
                        <Image
                            className="min-h-[100vh] w-auto object-cover "
                            src={banner}
                            width={600}
                            height={800}
                            alt="banner img"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
            <div className="hidden lg:block absolute bottom-5 left-8">
                <SocialAuth />
            </div>
        </div>
    );
};

export default Register;