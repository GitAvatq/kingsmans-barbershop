"use client"
import { RxAvatar } from "react-icons/rx";
import Hamburger from "hamburger-react"


export const Profile = () => (
    <>
        <div className="cursor-pointer max-lg:pl-2 max-lg:ml-auto group">
            <RxAvatar size={32} className="hover:scale-110 duration-300 hover:text-gold text-white" />
        </div>
        <span className="hidden max-lg:block border-none bg-transparent max-lg:pl-2">
            <Hamburger duration={0.8} />
        </span>
    </>
)