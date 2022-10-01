import React from "react";
import { AnimationType, AnimationElement } from "../types";

import { Colors, ArrayElement } from "../../MainComponent/types";
export const BubbleSort = (tempArray: number[]) => {
  let animations: AnimationElement[] = [];

  for (var i = 0; i < tempArray.length; i++) {
    for (var j = 0; j < tempArray.length - i - 1; j++) {
      if (tempArray[j] > tempArray[j + 1]) {
        let tmpHeight: number = tempArray[j];
        tempArray[j] = tempArray[j + 1];
        tempArray[j + 1] = tmpHeight;
        animations.push(
          {
            type: AnimationType.colorChange,
            firstIndex: j,
            secondIndex: j + 1,
            color: Colors.red,
          },
          {
            type: AnimationType.setHeight,
            firstIndex: j,
            secondIndex: j + 1,
            color: Colors.red,
            newHeight: tempArray[j],
          },
          {
            type: AnimationType.setHeight,
            firstIndex: j + 1,
            secondIndex: j + 1,
            color: Colors.red,
            newHeight: tempArray[j + 1],
          },
          {
            type: AnimationType.colorChange,
            firstIndex: j,
            secondIndex: j + 1,
            color: Colors.red,
          },
          {
            type: AnimationType.colorChange,
            firstIndex: j,
            secondIndex: j + 1,
            color: Colors.green,
          }
        );
      } else {
        animations.push({
          type: AnimationType.colorChange,
          firstIndex: j,
          secondIndex: j + 1,
          color: Colors.green,
        });
      }
      if (j === tempArray.length - i - 2) {
        animations.push(
          {
            type: AnimationType.colorChange,
            firstIndex: j + 1,
            secondIndex: -1,
            color: Colors.purple,
          },
          {
            type: AnimationType.assurePlace,
            firstIndex: j + 1,
            secondIndex: -1,
            color: Colors.purple,
          }
        );
      }
    }
  }
  animations.push({
    type: AnimationType.assurePlace,
    firstIndex: 0,
    secondIndex: -1,
    color: Colors.purple,
  });

  return animations;
};
