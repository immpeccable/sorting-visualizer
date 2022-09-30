import React from "react";

export enum CurrentAlgorithmEnum {
    merge = 'MergeSort',
    quick = 'QuickSort',
    heap = 'HeapSort',
    bubble = 'BubbleSort'
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

export enum AnimationType {
    swap= 'swap',
    colorChange='colorChange',
    assurePlace= 'assurePlace',
}

export type AnimationElement = {
    type: AnimationType,
    color: Colors,
    firstIndex: number,
    secondIndex: number,
}