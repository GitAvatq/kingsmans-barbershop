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
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import AppointmentForm from '@/widgets/appointmentForm/ui';
import { useGetAppointmentsQuery } from '../../api';
import { Spinner } from '@/components/ui/spinner';
const StartPage = () => {
    const appointmentData = useSelector((state: RootState) => state.appointment.appointment)
    console.log(appointmentData);
    const { data: appointment, isLoading, isError } = useGetAppointmentsQuery()
    const payload = useSelector((state: RootState) => state.user.user);
    if (!payload) return null;
    if (!appointment) return null
    if (isLoading) return <Spinner fontSize={32} className="text-accent mt-44 mx-auto top-1/2" />
    interface IAppointment {
        date: string
        servicesId: number
        barberId: number
    }

    const { name, email } = payload;
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
                                    appointment.map((a: IAppointment, index: number) => {
                                        const date = new Date(a.date);
                                        const formatted = date.toLocaleString("en-GB", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        });

                                        return (
                                            <p key={index} className="text-gray-300 text-sm">
                                                {formatted}
                                            </p>
                                        );
                                    })
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