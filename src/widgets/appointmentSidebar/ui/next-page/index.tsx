import React from 'react';
import ChooseService from './chooseService';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import ChooseBarber from './chooseBarber';
import ChooseDate from './chooseDate';

const NextPage = () => {
    const servicePart = useSelector((state: RootState) => state.active.servicesPart)
    const barberPart = useSelector((state: RootState) => state.active.barbersPart)
    const datePart = useSelector((state: RootState) => state.active.datePart)
    return (
        <div className='px-10 relative'>
            {servicePart && <ChooseService />}
            {barberPart && <ChooseBarber />}
            {datePart && <ChooseDate />}
        </div>
    );
};

export default NextPage;