"use client"
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { paths } from "@/shared/routing/paths";
import Link from "next/link";
import React from 'react';
import { IModalProps } from "../types/modal.types";


const Modal = ({ show, setShow }: IModalProps) => {
    return (
        <>
            <div className='flex items-start h-52 w-52 py-12 absolute top-1/2 mx-auto'>
                <Dialog open={show}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader hidden>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Modal window
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <span className='text-red-400 text-base font-footer'>You have not registered, please register.</span>
                            </div>
                        </div>
                        <DialogFooter className="flex items-cetner w-full justify-between">
                            <Link href={paths.register}>
                                <Button className="cursor-pointer hover:bg-accent duration-300 text-white" variant={"outline"}>Register?</Button>
                            </Link>
                            <DialogClose asChild>
                                <Button onClick={() => setShow(false)} className="cursor-pointer hover:bg-accent duration-300 text-white" variant={"outline"}>Cancel</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default Modal;