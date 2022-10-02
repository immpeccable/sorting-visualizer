import React from "react";
import { AnimationType, AnimationElement } from "./types";

import { Colors, CurrentAlgorithmEnum } from "../MainComponent/types";
import { BubbleSort } from "./BubbleSort";
import { MergeSort } from "./MergeSort";

export const Animation = (
  visualizationArray: number[],
  setVisualizationArray: React.Dispatch<React.SetStateAction<number[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  currentAlgorithm: string
) => {
  let TIMEOUT_MS =
    currentAlgorithm === CurrentAlgorithmEnum.bubble
      ? 10000 / (visualizationArray.length * visualizationArray.length)
      : 10000 /
        (visualizationArray.length * Math.log(visualizationArray.length));

  let animations: AnimationElement[] = [];
  let arr = [...visualizationArray];

  if (currentAlgorithm === CurrentAlgorithmEnum.bubble) {
    animations = BubbleSort(arr);
  } else if (currentAlgorithm === CurrentAlgorithmEnum.merge) {
    animations = MergeSort(arr);
  }

  let i = 0;

  for (; i < animations.length; i++) {
    const { type, firstIndex, secondIndex, color, newHeight } = animations[i];

    const arrayBars = document.querySelectorAll<HTMLElement>(".array-bar");

    let firstItem = arrayBars[firstIndex];
    let secondItem = arrayBars[secondIndex];

    if (type === AnimationType.colorChange) {
      setTimeout(() => {
        firstItem.style.backgroundColor = color;
        secondItem.style.backgroundColor = color;
      }, i * TIMEOUT_MS);
    } else {
      setTimeout(() => {
        firstItem.style.height = newHeight + "px";
      }, i * TIMEOUT_MS);
    }
  }

  setTimeout(() => {
    const arrayBars = document.querySelectorAll<HTMLElement>(".array-bar");
    for (const el of Array.from(arrayBars.values())) {
      el.style.backgroundColor = Colors.green;
    }
  }, i * TIMEOUT_MS);
  setTimeout(() => {
    const arrayBars = document.querySelectorAll<HTMLElement>(".array-bar");
    let newHeights: number[] = [];
    for (const el of Array.from(arrayBars.values())) {
      let heightAsString = "";
      let heightString = el.style.height;
      let i = 0;
      while (heightString[i] !== "p") {
        heightAsString += heightString[i];
        i++;
      }
      let height: number = parseInt(heightAsString);
      newHeights.push(height);
      el.style.backgroundColor = Colors.purple;
    }
    setVisualizationArray(newHeights);
    setIsSorting(false);
  }, i * TIMEOUT_MS + 1000);
};
