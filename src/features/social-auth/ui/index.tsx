"use client";

import { motion } from "framer-motion";
import { FaGoogle, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

export default function SocialAuth() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-start gap-4 mt-10"
        >
            <p className="text-gray-400 text-sm text-start">Or continue with</p>

            <div className="flex gap-4 max-md:grid max-md:grid-cols-2">
                <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl shadow hover:bg-gray-200 transition">
                    <FaGoogle /> Google
                </button>

                <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-xl shadow hover:bg-[#0d8ddb] transition">
                    <FaTwitter /> Twitter
                </button>

                <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition">
                    <FaGithub /> GitHub
                </button>

                <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-xl shadow hover:bg-[#0f5dc0] transition">
                    <FaFacebook /> Facebook
                </button>
            </div>
        </motion.div>
    );
}
