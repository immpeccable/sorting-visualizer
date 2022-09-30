import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { MainWrapper, VisualizationTable } from "./styled";
import { CurrentAlgorithmEnum, Colors, ArrayElement } from "./types";

const MAX_HEIGHT = 800;
const MIN_HEIGHT = 50;
const MAX_WIDTH = 1000;
const HEIGHT_GAP = MAX_HEIGHT - MIN_HEIGHT;

export const MainComponent = () => {
  const [currentAlgorithm, setCurrentAlgorithm] =
    useState<CurrentAlgorithmEnum>(CurrentAlgorithmEnum.merge);
  const [isSorting, setIsSorting] = useState(false);
  const [size, setSize] = useState(20);
  const [speed, setSpeed] = useState(50);
  const [generateNewArray, setGenerateNewArray] = useState(false);
  const [visualizationArray, setVisualizationArray] = useState<ArrayElement[]>(
    []
  );

  useEffect(() => {
    if (isSorting) {
      let items = [...visualizationArray];
      for (let i = 0; i < items.length; i++) {
        let el = { ...items[i] };
        el = { ...el, color: Colors.blue };
        items[i] = el;
      }
      setVisualizationArray(items);
    }
  }, [isSorting]);
  useEffect(() => {
    let elementWidth = (MAX_WIDTH - (size - 1) * 5) / size;
    setVisualizationArray(
      Array.from({ length: size }, () => ({
        color: Colors.blue,
        width: elementWidth,
        height: Math.floor(Math.random() * HEIGHT_GAP) + MIN_HEIGHT,
      }))
    );
  }, [size, generateNewArray]);

  return (
    <MainWrapper>
      <Header
        isSorting={isSorting}
        setIsSorting={setIsSorting}
        currentAlgorithm={currentAlgorithm}
        setCurrentAlgorithm={setCurrentAlgorithm}
        setSize={setSize}
        setSpeed={setSpeed}
        setGenerateNewArray={setGenerateNewArray}
        array={visualizationArray}
        setArray={setVisualizationArray}
      />
      <VisualizationTable>
        {visualizationArray.map((el) => (
          <div
            style={{
              width: el.width + "px",
              height: el.height + "px",
              backgroundColor: el.color,
            }}
          />
        ))}
      </VisualizationTable>
    </MainWrapper>
  );
};
