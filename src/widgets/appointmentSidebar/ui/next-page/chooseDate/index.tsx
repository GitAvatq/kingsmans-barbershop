"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Notification from "../../notification";
import { ChevronDownIcon } from "lucide-react";

export const ChooseDate = () => {
    const [open, setOpen] = React.useState(false);
    const [dateTime, setDateTime] = React.useState<Date | null>(null);
    console.log(dateTime);
    const isoDate = dateTime?.toISOString()
    return (
        <>
            <div className="flex gap-4 text-white">
                <div className="flex flex-col gap-3">
                    <Label>Date</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button className="w-32 justify-between font-normal bg-black hover:bg-gray-800">
                                {dateTime ? dateTime.toLocaleDateString() : "Select date"}
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                className="text-white"
                                selected={dateTime || undefined}
                                onSelect={(date) => {
                                    if (!date) return;
                                    const newDate = dateTime
                                        ? new Date(date.setHours(dateTime.getHours(), dateTime.getMinutes()))
                                        : date;
                                    setDateTime(newDate);
                                    setOpen(false);
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="flex flex-col gap-3">
                    <Label>Time</Label>
                    <Input
                        className="bg-black hover:bg-gray-800"
                        type="time"
                        value={
                            dateTime
                                ? `${dateTime.getHours().toString().padStart(2, "0")}:${dateTime
                                    .getMinutes()
                                    .toString()
                                    .padStart(2, "0")}`
                                : "10:30"
                        }
                        onChange={(e) => {
                            if (!dateTime) return;
                            const [hours, minutes] = e.target.value.split(":").map(Number);
                            const newDate = new Date(dateTime);
                            newDate.setHours(hours, minutes);
                            setDateTime(newDate);
                        }}
                    />
                </div>
            </div>

            {dateTime && <Notification date={isoDate} firstStep={false} secondStep={false} thirdStep nextChoose="Ready" />}
        </>
    );
};

export default ChooseDate;
