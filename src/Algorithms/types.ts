import React from 'react';
import { Colors } from '../MainComponent/types';

export enum AnimationType {
    setHeight= 'setHeight',
    colorChange='colorChange',
    assurePlace= 'assurePlace',
}

export type AnimationElement = {
    type: AnimationType,
    color: Colors,
    firstIndex: number,
    secondIndex: number,
    newHeight?: number,
}