"use client"
import React, { useEffect } from 'react';
import Home from '../(main)/page';
import MainLayout from '../(main)/layout';
import { useParams } from 'next/navigation';
import { useGetFillialByIdQuery } from '@/entities/fillial/api';
import { useDispatch } from 'react-redux';
import { fillialActions } from '@/store/fillial';
import { Spinner } from '@/components/ui/spinner';
import { barbersActions } from '@/store/masters';

const FillialCountry = () => {
    const { countryId } = useParams()
    const fillialId = Number(countryId)
    const { data, isLoading, isError } = useGetFillialByIdQuery(fillialId)
    const dispatch = useDispatch()
    useEffect(() => {
        if (data) {
            dispatch(fillialActions.setFillial(data))
            dispatch(barbersActions.clear())
            dispatch(barbersActions.setBarbers(data.barbers))
        }
    }, [data, dispatch])
    console.log(data);

    if (isLoading) {
        return <Spinner className='text-accent' fontSize={32} />
    }


    return (
        <MainLayout>
            <Home />
        </MainLayout>
    );
};

export default FillialCountry;