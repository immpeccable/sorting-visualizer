import React from "react";
import { AdjustElement, AdjustInputRange, AdjustLabel, AdjustmentSection, BlackDivider, HeaderButton, HeaderWrapper, SortButton, SortingSection } from "./styled";
import { HeaderProps } from "./types";
import { CurrentAlgorithmEnum } from "../types";

export const Header = ({currentAlgorithm, setCurrentAlgorithm, isSorting, setIsSorting, setSize, setSpeed, setGenerateNewArray}: HeaderProps) => {

    return <HeaderWrapper>
        <HeaderButton onClick={() => {!isSorting && setGenerateNewArray(prev => !prev)}} isSorting={isSorting}>
            Generate New Array
        </HeaderButton>
        <BlackDivider/>
        <AdjustmentSection>
            <AdjustElement>
                <AdjustLabel isSorting={isSorting}>
                    Change Array Size
                </AdjustLabel>
                <AdjustInputRange onChange={(e) => setSize(parseInt(e.target.value))} disabled={isSorting === true ? true : false} id = 'size' type="range" defaultValue={20} min="4" max="100"/>
            </AdjustElement>
            <AdjustElement>
                <AdjustLabel isSorting={isSorting}>
                    Change Sorting Speed
                </AdjustLabel>
                <AdjustInputRange onChange={(e) => setSpeed(parseInt(e.target.value))} disabled={isSorting === true ? true : false} id = 'speed' type="range" defaultValue={50} min="0" max="100"/>
            </AdjustElement>
        </AdjustmentSection>
        <BlackDivider/>
        <SortingSection>
            <HeaderButton onClick={() => {!isSorting && setCurrentAlgorithm(CurrentAlgorithmEnum.merge)}} isActive={currentAlgorithm === CurrentAlgorithmEnum.merge} isSorting={isSorting}>
                Merge Sort
            </HeaderButton>
            <HeaderButton onClick={() => {!isSorting && setCurrentAlgorithm(CurrentAlgorithmEnum.quick)}} isActive={currentAlgorithm === CurrentAlgorithmEnum.quick} isSorting={isSorting}>
               Quick Sort
            </HeaderButton>
            <HeaderButton onClick={() => {!isSorting && setCurrentAlgorithm(CurrentAlgorithmEnum.heap)}} isActive={currentAlgorithm === CurrentAlgorithmEnum.heap} isSorting={isSorting}>
                Heap Sort
            </HeaderButton>
            <HeaderButton onClick={() => {!isSorting && setCurrentAlgorithm(CurrentAlgorithmEnum.bubble)}} isActive={currentAlgorithm === CurrentAlgorithmEnum.bubble} isSorting={isSorting}>
                Bubble Sort
            </HeaderButton>
        </SortingSection>
        <BlackDivider/>
        <SortButton onClick={() => {!isSorting &&  setIsSorting(true)}} isSorting={isSorting}>
            SORT!
        </SortButton>

    </HeaderWrapper>
}