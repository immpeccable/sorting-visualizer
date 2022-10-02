import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { MainWrapper, VisualizationTable } from "./styled";
import { CurrentAlgorithmEnum, Colors } from "./types";

const MAX_HEIGHT = 800;
const MIN_HEIGHT = 50;
const MAX_WIDTH = 1000;
const HEIGHT_GAP = MAX_HEIGHT - MIN_HEIGHT;

export const MainComponent = () => {
  const [currentAlgorithm, setCurrentAlgorithm] =
    useState<CurrentAlgorithmEnum>(CurrentAlgorithmEnum.merge);
  const [isSorting, setIsSorting] = useState(false);
  const [size, setSize] = useState(20);
  const [generateNewArray, setGenerateNewArray] = useState(false);
  const [visualizationArray, setVisualizationArray] = useState<number[]>([]);

  useEffect(() => {
    if (isSorting) {
      let items = document.querySelectorAll<HTMLElement>(".array-bar");
      for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = Colors.blue;
      }
    }
  }, [isSorting]);
  useEffect(() => {
    let items = document.querySelectorAll<HTMLElement>(".array-bar");
    for (let i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = Colors.blue;
    }
    setVisualizationArray(
      Array.from(
        { length: size },
        () => Math.floor(Math.random() * HEIGHT_GAP) + MIN_HEIGHT
      )
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
        setGenerateNewArray={setGenerateNewArray}
        array={visualizationArray}
        setArray={setVisualizationArray}
      />
      <VisualizationTable>
        {visualizationArray.map((el, index) => (
          <div
            className="array-bar"
            key={index}
            style={{
              width: (MAX_WIDTH - (size - 1) * 2) / size + "px",
              height: el + "px",
              backgroundColor: Colors.blue,
            }}
          />
        ))}
      </VisualizationTable>
    </MainWrapper>
  );
};
