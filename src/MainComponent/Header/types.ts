import { CurrentAlgorithmEnum } from './../types';
import React from 'react';

export type StyledProps = {
    isActive?: Boolean,
    isSorting?: Boolean
}

export type HeaderProps = {
    currentAlgorithm: string,
    setCurrentAlgorithm : React.Dispatch<React.SetStateAction<CurrentAlgorithmEnum>>,
    isSorting: Boolean | undefined,
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
    setSize: React.Dispatch<React.SetStateAction<number>>,
    setGenerateNewArray: React.Dispatch<React.SetStateAction<boolean>>,
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>
} 