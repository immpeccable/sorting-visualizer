import React from "react";
import {
  AnimationType,
  Colors,
  AnimationElement,
  ArrayElement,
} from "../../MainComponent/types";

export const BubbleSort = (array: ArrayElement[]) => {
  let animations: AnimationElement[] = [];
  let tempArray = [];
  for (const el of array) {
    tempArray.push(el.height);
  }
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
            type: AnimationType.swap,
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
      if (j === array.length - i - 2) {
        animations.push({
          type: AnimationType.assurePlace,
          firstIndex: j + 1,
          secondIndex: -1,
          color: Colors.purple,
        });
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
