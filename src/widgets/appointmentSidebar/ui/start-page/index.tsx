"use client"
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import AppointmentForm from '@/widgets/appointmentForm/ui'
import { useGetAppointmentsQuery } from '../../api'
import { Spinner } from '@/components/ui/spinner'
import { useGetBarbersQuery } from '@/app/barbers/api'
import { useRemoveAppointmentMutation } from './api'

const StartPage = () => {
    const payload = useSelector((state: RootState) => state.user.user)

    const { data: appointment, isLoading, isError } = useGetAppointmentsQuery()
    const [removeAppointment, { isLoading: isDeleting }] = useRemoveAppointmentMutation()
    const { data: barbers } = useGetBarbersQuery()

    if (!payload) return null
    if (isLoading) return <Spinner fontSize={32} className="text-accent mt-44 mx-auto top-1/2" />
    if (isError) return <p className="text-red-500 text-center mt-8">Failed to load appointments</p>
    if (!appointment || !barbers) return <p className="text-gray-500 text-center mt-8">No data available</p>

    const { name, email } = payload
    const handleRemove = (id: number) => {
        removeAppointment(id)
    }
    return (
        <div className="px-6">
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-base">Profile</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="flex flex-col gap-6 px-4 py-2">
                            <div className="grid gap-1">
                                <p className="text-lg font-semibold">{name}</p>
                                <p className="text-gray-400 text-sm">{email}</p>
                            </div>

                            <div className="grid gap-1">
                                {appointment.length > 0 ? (
                                    <div className="grid gap-1">
                                        <p className="font-medium pb-7">My Appointments:</p>
                                        {appointment.length > 0 ? (
                                            <div className="">
                                                <div className="max-h-87 overflow-y-auto border border-gray-700 rounded">
                                                    <table className="w-full text-left">
                                                        <thead className="sticky top-0 bg-background">
                                                            <tr className="border-b border-gray-700">
                                                                <th className="px-2 py-1">Date & Time</th>
                                                                <th className="px-2 py-1">Barber</th>
                                                                <th className="px-2 py-1">Service</th>
                                                                {/* <th className="px-2 py-1">Actions</th> */}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {appointment.map((a: any, index: number) => {
                                                                const date = new Date(a.date)
                                                                const formatted = date.toLocaleString("en-GB", {
                                                                    day: "2-digit",
                                                                    month: "2-digit",
                                                                    year: "numeric",
                                                                    hour: "2-digit",
                                                                    minute: "2-digit",
                                                                })

                                                                const barberName = barbers[a.barberId]?.name ?? "Unknown barber"
                                                                const serviceName = a.service?.name ?? "Unknown service"

                                                                return (
                                                                    <tr key={index} className="border-b border-gray-700">
                                                                        <td className="px-2 py-1 text-xs text-gray-300">{formatted}</td>
                                                                        <td className="px-2 py-1 text-gray-300">{barberName}</td>
                                                                        <td className="px-2 py-1 text-gray-300">{serviceName}</td>
                                                                        <td className="px-2 py-1">
                                                                            {/* <button
                                                                                onClick={() => handleRemove(a.id)}
                                                                                className="bg-accent-foreground text-white px-2 py-1 rounded hover:bg-accent disabled:opacity-50"
                                                                            >
                                                                                {isDeleting ? "Cancelling..." : "Cancel"}
                                                                            </button> */}
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-gray-500 text-sm">No appointments yet</p>
                                        )}
                                    </div>
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
    )
}

export default StartPage
