"use client";
import { useGetServicesQuery } from "@/app/services/api";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import React, { useState } from "react";
import Notification from "../../notification";
import { useDispatch } from "react-redux";
import { appointmentActions } from "@/store/appointment";

const ChooseService = () => {
    const { data, isLoading: ServiceLoading, isError } = useGetServicesQuery();
    const [selectedService, setSelectedService] = useState<number | null>(null);
    const dispatch = useDispatch()
    if (ServiceLoading) return <Spinner fontSize={32} className="text-accent mt-44 mx-auto top-1/2" />
    if (isError) return <p>Error loading services</p>;
    if (!data) return null;
    const handleSelect = (id: number) => {
        setSelectedService(id)
        dispatch(appointmentActions.setService(id))

    }
    console.log(selectedService);

    return (
        <div className="flex flex-col gap-6">
            <span>Service</span>
            {data.map((s) => (
                <div key={s.id} className="flex items-center gap-3">
                    <Checkbox
                        id={`service-${s.id}`}
                        checked={selectedService === s.id}
                        onCheckedChange={() => handleSelect(s.id)}
                    />
                    <Label htmlFor={`service-${s.id}`}>
                        {s.name} - {s.price}$
                    </Label>
                </div>
            ))}

            {selectedService !== null && (
                <Notification firstStep secondStep={false} nextChoose="Choose the barber" />
            )}
        </div>
    );
};

export default ChooseService;
