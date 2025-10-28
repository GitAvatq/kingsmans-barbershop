"use client"
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import NextPage from "./ui/next-page";
import StartPage from "./ui/start-page";
import { useInitializeAppointmentMutation } from "./api";
import { useEffect } from "react";

export default function AppointmentSidebar() {
    const doesNext = useSelector((state: RootState) => state.active.nextPart)
    const data = useSelector((state: RootState) => state.appointment.appointment)
    const [processAppointment, { isLoading, isError, data: ServerData }] = useInitializeAppointmentMutation()
    useEffect(() => {
        if (data) {
            processAppointment(data)

        }
    }, [data, processAppointment])

    console.log(ServerData);


    return (
        <>
            {doesNext ? <NextPage /> : <StartPage />}
        </>
    );
}
