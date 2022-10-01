import React from "react";
import { AnimationType, AnimationElement } from "./types";

import {
  Colors,
  ArrayElement,
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
  let TIMEOUT_MS = 5 * (200 / visualizationArray.length);
  let SORTING_TIME = 0;

  let animations: AnimationElement[] = [];
  let heightArray: number[] = [];
  for (const el of visualizationArray) {
    heightArray.push(el.height);
  }

  if (currentAlgorithm === CurrentAlgorithmEnum.bubble) {
    animations = BubbleSort(heightArray);
  } else if (currentAlgorithm === CurrentAlgorithmEnum.merge) {
    animations = MergeSort(heightArray);
  }

  let i = 0;
  let assuredPlaces = [];
  let heights = [];

  for (; i < animations.length; i++) {
    let animation = animations[i];
    const { type, firstIndex, secondIndex, color, newHeight } = animation;
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
    } else if (type === AnimationType.setHeight) {
      heights.push({
        index: firstIndex,
        height: newHeight,
      });
    } else {
      assuredPlaces.push(firstIndex);
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
