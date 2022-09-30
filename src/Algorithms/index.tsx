import React from "react";
import {
  AnimationElement,
  ArrayElement,
  AnimationType,
  Colors,
  CurrentAlgorithmEnum,
} from "../MainComponent/types";
import { BubbleSort } from "./BubbleSort";
import { MergeSort } from "./MergeSort";

export const Animation = (
  visualizationArray: ArrayElement[],
  setVisualizationArray: React.Dispatch<React.SetStateAction<ArrayElement[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  currentAlgorithm: string
) => {
  let TIMEOUT_MS = 100; //2 * (100 / visualizationArray.length);
  let SORTING_TIME = visualizationArray.length * 40;

  let animations: AnimationElement[] = [];

  if (currentAlgorithm === CurrentAlgorithmEnum.bubble) {
    animations = BubbleSort(visualizationArray);
  } else if (currentAlgorithm === CurrentAlgorithmEnum.merge) {
    let arr: number[] = [];
    for (const el of visualizationArray) {
      arr.push(el.height);
    }
    animations = MergeSort(arr);
    console.log("animations: ", animations);
  }

  let i = 0;
  let assuredPlaces = [];
  let heights = [];
  for (; i < animations.length; i++) {
    let animation = animations[i];
    const { type, firstIndex, secondIndex, color } = animation;
    let items = [...visualizationArray];

    for (const p of assuredPlaces) {
      items[p] = { ...items[p], color: Colors.purple };
    }
    for (const h of heights) {
      items[h.index] = { ...items[h.index], height: h.height };
    }
    let el1 = { ...items[firstIndex] };
    let el2 = { ...items[secondIndex] };
    if (type === AnimationType.colorChange) {
      el1 = { ...el1, color: color };
      el2 = { ...el2, color: color };
      items[firstIndex] = el1;
      items[secondIndex] = el2;
      setTimeout(() => {
        setVisualizationArray(items);
      }, i * TIMEOUT_MS + SORTING_TIME);
    } else if (type === AnimationType.swap) {
      heights.push(
        {
          index: firstIndex,
          height: el2.height,
        },
        {
          index: secondIndex,
          height: el1.height,
        }
      );
      let tmp = el1.height;
      el1 = { ...el1, color: color, height: el2.height };
      el2 = { ...el2, color: color, height: tmp };
      items[firstIndex] = el1;
      items[secondIndex] = el2;
      setTimeout(() => {
        setVisualizationArray(items);
      }, i * TIMEOUT_MS + SORTING_TIME);
    } else {
      assuredPlaces.push(firstIndex);
      el1 = { ...el1, color: color };
      items[firstIndex] = el1;
      setTimeout(() => {
        setVisualizationArray(items);
      }, i * TIMEOUT_MS + SORTING_TIME);
    }
  }

  setTimeout(() => {
    let items = [...visualizationArray];
    for (const h of heights) {
      items[h.index] = { ...items[h.index], height: h.height };
    }
    for (let i = 0; i < items.length; i++) {
      items[i] = { ...items[i], color: Colors.green };
    }
    setVisualizationArray(items);
  }, i * TIMEOUT_MS + SORTING_TIME);
  setTimeout(() => {
    let items = [...visualizationArray];
    for (let i = 0; i < items.length; i++) {
      items[i] = { ...items[i], color: Colors.blue };
    }
    for (const h of heights) {
      items[h.index] = { ...items[h.index], height: h.height };
    }
    setVisualizationArray(items);
    setIsSorting(false);
  }, i * TIMEOUT_MS + 1000 + SORTING_TIME);
};
