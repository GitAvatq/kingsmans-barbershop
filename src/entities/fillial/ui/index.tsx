"use client"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { useGetFillialsQuery } from "../api"
import { useEffect, useState } from "react"
import FillialCard from "./fillialCard"
import Letters from "./letters"
import { FillialCardSkeleton } from "./skeleton"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

const Fillial = () => {
    const { data, isLoading, isError } = useGetFillialsQuery()
    const letter = useSelector((state: RootState) => state.letterState.letter)
    useEffect(() => {
        console.log(data);
        console.log(isError);
    }, [data, isError])

    if (!data) {
        return (
            <div className="text-center text-gray-400 mt-10">
                No fillials found.
            </div>
        )
    }
    if (isLoading) {
        <FillialCardSkeleton />
    }

    return (

        <div className="mx-auto w-full h-screen relative">
            <Drawer>
                <DrawerHeader>
                    <DrawerTitle className="text-white font-jockey text-4xl max-sm:text-3xl">CHOOSE <span className="text-accent">YOUR BARBERSHOP</span></DrawerTitle>
                </DrawerHeader>
                <div className="p-4 pb-0">
                    <Letters />
                    <div className="mx-auto max-w-[850px] mt-10 flex items-center gap-5 max-sm:hidden overflow-x-scroll">
                        <>
                            {
                                !letter
                                    ?
                                    data.map((f) => (
                                        <FillialCard key={f.id} el={f} />
                                    ))
                                    :
                                    data.filter((el) => el.country[0].includes(letter)).map((f) => (
                                        <FillialCard key={f.id} el={f} />
                                    ))
                            }
                        </>
                        <>
                            {data.filter((el) => el.country[0].includes(letter)).some((el) => el.country[0].includes(letter)) ? null : <p className="text-gray-600 text-xl text-center mx-auto pt-10 ">{`Fillial start by ${letter} doesnt exist yet`}</p>}
                        </>
                    </div>
                </div>
                <DrawerFooter className="absolute right-10 bottom-5">
                    <DrawerClose asChild>
                        <Button variant="outline" className="cursor-pointer bg-black hover:bg-accent transition-colors text-white">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </Drawer>
        </div>
    )
}

export default Fillial