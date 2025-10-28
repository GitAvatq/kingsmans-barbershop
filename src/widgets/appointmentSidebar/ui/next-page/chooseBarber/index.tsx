"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import React, { useState } from "react";
import Notification from "../../notification";
import { useGetBarbersQuery } from "@/app/barbers/api";
import { appointmentActions } from "@/store/appointment";
import { useDispatch } from "react-redux";

const ChooseBarber = () => {
    const { data, isLoading, isError } = useGetBarbersQuery()
    const [selectedBarber, setSelectedBarber] = useState<number | null>(null)
    const dispatch = useDispatch()
    if (isLoading) return <Spinner fontSize={32} className="text-accent mt-44 mx-auto top-1/2" />
    if (isError) return <p>Error loading services</p>;
    if (!data) return null;
    console.log(selectedBarber);
    const handleSelect = (id: number) => {
        setSelectedBarber(id)
        dispatch(appointmentActions.setBarber(id))
    }
    return (
        <div className="flex flex-col gap-6 relative">
            <span>Barber</span>
            {data.map((b) => (
                <div key={b.id} className="flex items-center gap-3">
                    <Checkbox
                        id={`barber-${b.id}`}
                        checked={selectedBarber === b.id}
                        onCheckedChange={() => handleSelect(b.id)}
                    />
                    <Label htmlFor={`barber-${b.id}`}>
                        {b.name} - {b.status}$
                    </Label>
                </div>
            ))}
            {selectedBarber && <Notification firstStep={false} secondStep nextChoose="Choose the date" />}
        </div>
    );
};

export default ChooseBarber;