"use client"
import { useState } from "react"
import * as React from "react"
import { Minus, Plus } from "lucide-react"
// import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

const Fillial = () => {
    const [open, setOpen] = useState(false)
    const data = [
        {
            goal: 400,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 278,
        },
        {
            goal: 189,
        },
        {
            goal: 239,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 278,
        },
        {
            goal: 189,
        },
        {
            goal: 349,
        },
    ]
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }
    return (



        <Drawer>
          
            <DrawerContent>
                <div className="mx-auto w-full">
                    <DrawerHeader>
                        <DrawerTitle>Move Goal</DrawerTitle>
                        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                       
                        <div className="mt-3 h-[120px]">
                            {/* <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <Bar
                                        dataKey="goal"
                                        style={
                                            {
                                                fill: "hsl(var(--foreground))",
                                                opacity: 0.9,
                                            } as React.CSSProperties
                                        }
                                    />
                                </BarChart>
                            </ResponsiveContainer> */}
                        </div>
                    </div>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default Fillial