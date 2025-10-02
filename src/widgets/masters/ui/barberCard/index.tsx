'use client'
import { Button } from "@/components/ui/button";
import { MasterCardProps } from "../../types/interface.master";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const BarberCard = ({ barber }: MasterCardProps) => (
    <div className="relative min-w-60 min-h-96 rounded-2xl flex flex-col items-start  justify-end">
        <Image src={barber.barberImg} alt="barber img" fill
            className="object-cover rounded-lg -z-10" />
        <div className="flex flex-col gap-2.5 items-start w-full px-3.5 py-2.5 bg-black/50 shadow-2xl rounded-2xl rounded-b-none">
            <h2>{barber.name}</h2>
            <p>{barber.address}</p>
            <Button className="cursor-pointer hover:bg-white hover:text-gold transition-colors">Sign Up</Button>
        </div>
        <Badge style={{ color: `${barber.status === "Top Barber" ? "#63c5da" : barber.status === "Premium Barber" ? "violet" : barber.status === "Kingsman Barber" ? "#d29c4e" : "gray"}` }} className={`absolute top-2.5 right-1.5 py-2 px-4`}>{barber.status}

        </Badge>
    </div>
)