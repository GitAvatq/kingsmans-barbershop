"use client"
import React from 'react';
import {
    SheetClose,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import AppointmentForm from '@/widgets/appointmentForm/ui';
const StartPage = () => {

    const payload = useSelector((state: RootState) => state.user.user);
    if (!payload) return null;

    interface IAppointment {
        date: string
        servicesId: number
        barberId: number
    }

    const { name, email, appointment } = payload;
    return (
        <div className="px-6">
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-base" >Profile</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="flex flex-col gap-6 px-4 py-2">
                            <div className="grid gap-1">
                                <p className="text-lg font-semibold">{name}</p>
                                <p className="text-gray-400 text-sm">{email}</p>
                            </div>
                            <div className="grid gap-1">
                                <p className="font-medium">My Appointments:</p>
                                {appointment && appointment.length > 0 ? (
                                    appointment.map((a: IAppointment, index: number) => (
                                        <p key={index} className="text-gray-300 text-sm">
                                            {a.date}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-sm">No appointments yet</p>
                                )}
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <AppointmentForm />
        </div>
    );
};

export default StartPage;