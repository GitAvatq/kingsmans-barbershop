"use client"
import { letterActions } from '@/store/letter/letter.slice';
import React from 'react';
import { useDispatch } from 'react-redux';

const Letters = () => {
    const dispatch = useDispatch();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const handleLetter = (letter: string) => {
        return dispatch(letterActions.setLetter(letter))
    }
    return (
        <div className="bg-background rounded-2xl mx-auto shadow-lg max-w-[360px] max-h-[112px]">
            <div className="flex flex-wrap justify-center gap-5">
                {alphabet.map((letter) => (
                    <button
                        onClick={() => handleLetter(letter)}
                        key={letter}
                        className={`cursor-pointer  font-accentcursor-pointer text-white w-1 h-1 rounded-xl font-bold text-base transition-all duration-300 transform hover:text-accent hover:scale-110 $`}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Letters;