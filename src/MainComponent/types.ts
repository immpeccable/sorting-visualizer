import React from "react";

export enum CurrentAlgorithmEnum {
    merge = 'Merge Sort',
    quick = 'Quick Sort',
    heap = 'Heap Sort',
    bubble = 'Bubble Sort'
}

export enum Colors {
    blue = 'var(--blue)',
    green = 'var(--green)',
    red='var(--red)',
    purple= 'var(--purple)',
    yellow= 'var(--yellow)',
}

export type ArrayElement = {
    color: Colors,
    height: number,
    width: number
}

export type TableElementProps = {
    height: string;
    width: string;
    color: string;
}