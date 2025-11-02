"use client"
import { Button } from '@/components/ui/button';
import { activeActions } from '@/store/activeBar/indext';
import { appointmentActions } from '@/store/appointment';
import React from 'react';
import { useDispatch } from 'react-redux';

const Notification = ({ nextChoose, firstStep, secondStep, thirdStep, date }: { nextChoose: string, firstStep?: boolean, secondStep?: boolean, thirdStep?: boolean, date?: string }) => {
    const dispatch = useDispatch()
    const onNavigate = () => {
        if (firstStep) {
            dispatch(activeActions.setServicesPart(false))
            dispatch(activeActions.setBarbersPart(true))
        } else if (secondStep) {
            dispatch(activeActions.setBarbersPart(false))
            dispatch(activeActions.setDatePart(true))
        } else if (thirdStep) {
            dispatch(appointmentActions.setDate(date))
            dispatch(activeActions.setDatePart(false))
            dispatch(activeActions.setNextPart(false))
        }
    }

    return (
        <div className='px-4 w-full flex flex-col absolute -bottom-14 left-0'>
            <Button onClick={onNavigate} className='cursor-pointer bg-accent hover:bg-gold'>
                <h3 className=' text-black font-base text-base'>{nextChoose}</h3>
            </Button>
        </div>
    );
};

export default Notification;