"use client"
import Link from "next/link"
import { items } from "../config"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export const Menu = () => (
    <nav className="flex max-lg:hidden">
        <ul className="flex items-center list-none gap-5">
            {items.map((item) => (
                <Link key={item.path} href={item.path} className="hover:text-gold transition-colors">{item.text}</Link>
            ))}
            <Drawer>
                <DrawerTrigger asChild>
                    <span className="uppercase cursor-pointer hover:text-gold transition-colors">Fillials</span>
                </DrawerTrigger>

                <DrawerContent>
                    <div className="mx-auto w-full h-screen relative">
                        <DrawerHeader>
                            <DrawerTitle className="text-white font-jockey text-4xl max-sm:text-3xl">CHOOSE <span className="text-accent">YOUR BARBERSHOP</span></DrawerTitle>
                        </DrawerHeader>
                        <div className="p-4 pb-0">

                            <div className="mx-auto max-w-2xl mt-3">
                                <Input placeholder="Enter country" className="text-white font-jockey text-3xl max-sm:text-xl mb-10" />
                            </div>

                            <div className="bg-background rounded-2xl mx-auto shadow-lg max-w-[360px] max-h-[112px]">
                                <div className="flex flex-wrap justify-center gap-5">
                                    {alphabet.map((letter) => (
                                        <button
                                            key={letter}
                                            className={` font-accentcursor-pointer text-white w-1 h-1 rounded-xl font-bold text-base transition-all duration-300 transform hover:text-accent hover:scale-110 $`}
                                        >
                                            {letter}
                                        </button>
                                    ))}
                                </div>
                            </div>


                            <div className="mt-10 flex items-center gap-5 max-sm:hidden">
                                <div className="py-5 px-5 w-45 h-35 flex items-center justify-between flex-col border border-gold">
                                    <h4 className="text-gold text-2xl font-base max-sm:text-base">ARMENIA</h4>
                                    <p className="font-base text-base text-white">Maxim Gorky Street, 18</p>
                                </div>
                                <div className="py-5 px-5 w-45 h-35 flex items-center justify-between flex-col border border-gold">
                                    <h4 className="text-gold text-2xl font-base max-sm:text-base">AUSTRALIA</h4>
                                    <p className="font-base text-base text-white">Maxim Gorky Street, 18</p>
                                </div>
                                <div className="py-5 px-5 w-45 h-35 flex items-center justify-between flex-col border border-gold">
                                    <h4 className="text-gold text-2xl font-base max-sm:text-base">AMERICA</h4>
                                    <p className="font-base text-base text-white">Maxim Gorky Street, 18</p>
                                </div>
                            </div>
                        </div>
                        <DrawerFooter className="absolute right-10 bottom-5">
                            <DrawerClose asChild>
                                <Button variant="default" className="cursor-pointer hover:bg-accent transition-colors">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </ul>
    </nav>
)