import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";

import React from 'react';
import { ChevronsRight } from 'lucide-react';


const AppointmentForm = () => {
    return (
        <div>
            <div>
                <Avatar className="w-14 h-14">
                    <AvatarImage src="http://localhost:3000/_next/static/media/logo.7166a899.svg" alt="@shadcn" />
                    <AvatarFallback>KB</AvatarFallback>
                </Avatar>
                <p className="uppercase text-2xl font-black font-base mt-3"><span className="text-gold mb-10">Kingsman</span> barbershop</p>
                <Button className="mt-10 bg-gold flex items-center justify-center cursor-pointer hover:bg-accent duration-300">Start Booking   <ChevronsRight /></Button>
            </div>
        </div>
    );
};


export default AppointmentForm