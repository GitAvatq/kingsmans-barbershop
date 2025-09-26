"use client"
import { RxAvatar } from "react-icons/rx";
import Hamburger from "hamburger-react"
import Link from "next/link";
import { paths } from "@/shared/routing/paths";


export const Profile = () => (
    <>
        <div className="cursor-pointer max-lg:pl-2 max-lg:ml-auto">
            <Link href={paths.register}>
                <RxAvatar size={30} color="gold" />
            </Link>
        </div>
        <button className="hidden max-lg:block border-none bg-transparent max-lg:pl-2">
            <Hamburger duration={0.8} />
        </button>
    </>
) 