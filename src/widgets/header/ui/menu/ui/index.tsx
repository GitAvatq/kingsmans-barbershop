"use client"
import Link from "next/link"
import { items } from "../config"
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger, } from "@/components/ui/drawer"
import Fillial from "@/entities/fillial/ui"

export const Menu = () => (
    <nav className="flex max-lg:hidden">
        <ul className="flex items-center list-none gap-5">
            {items.map((item) => (
                <Link key={item.path} href={item.path} className="hover:text-gold transition-colors">{item.text}</Link>
            ))}
            <Drawer>
                <DrawerTitle hidden>fillal</DrawerTitle>
                <DrawerTrigger asChild>
                    <span className="uppercase cursor-pointer hover:text-gold transition-colors">Fillials</span>
                </DrawerTrigger>
                <DrawerContent>
                    <Fillial />
                </DrawerContent>
            </Drawer>
        </ul>
    </nav>
)