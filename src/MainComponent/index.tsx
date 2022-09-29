import React, {useEffect, useState} from 'react';
import { ArrayVisualization } from './ArrayVisualization';
import { Header } from './Header';
import { MainWrapper, TableElement, VisualizationTable } from './styled';
import { CurrentAlgorithmEnum, Colors, ArrayElement } from './types';

const MAX_HEIGHT = 800;
const MIN_HEIGHT = 50;
const MAX_WIDTH = 1000;
const HEIGHT_GAP = MAX_HEIGHT - MIN_HEIGHT;
const MAX_ELEMENT_WIDTH = 100;
const ELEMENT_GAP = 5;

export const MainComponent = () => {

    

    const [currentAlgorithm, setCurrentAlgorithm] = useState<CurrentAlgorithmEnum>(CurrentAlgorithmEnum.merge);
    const [isSorting, setIsSorting] = useState(false);
    const [size, setSize] = useState(20);
    const [speed, setSpeed] = useState(50);
    const [generateNewArray, setGenerateNewArray] = useState(false);
    const [visualizationArray, setVisualizationArray] = useState<ArrayElement[]>([]);



    useEffect(() => {
        let newArray = [];
        let increaseUnit = HEIGHT_GAP / size;
        let elementWidth = (MAX_WIDTH - (size - 1)*5) / size;

        for(let i = 0; i < size; i++){
            let randomNumber = Math.floor(Math.random() * size);
            let height = randomNumber * increaseUnit + MIN_HEIGHT;
            newArray.push({color: Colors.blue, height: height, width: elementWidth});
        }
        
        setVisualizationArray(newArray);
    }, [size, generateNewArray])


    return <MainWrapper>
        <Header isSorting={isSorting} setIsSorting={setIsSorting} currentAlgorithm={currentAlgorithm} setCurrentAlgorithm={setCurrentAlgorithm} setSize={setSize} setSpeed={setSpeed} setGenerateNewArray={setGenerateNewArray} />
        <VisualizationTable>
        {visualizationArray.map((el) => 
            <TableElement width={el.width + 'px'} height={el.height + 'px'} color={el.color}/>
        )}
        </VisualizationTable>
    </MainWrapper>
}