import { AnimationType, AnimationElement } from "../types";

import { Colors } from "../../MainComponent/types";
function merge(
  mainArray,
  l,
  m,
  r,
  auxilaryArray: number[],
  animations: AnimationElement[]
) {
  let firstIndex = l;

  let secondIndex = m + 1;

  var mergedIndex = l;

  let isLast = l === 0 && r === mainArray.length - 1;

  while (firstIndex <= m && secondIndex <= r) {
    if (auxilaryArray[firstIndex] <= auxilaryArray[secondIndex]) {
      mainArray[mergedIndex++] = auxilaryArray[firstIndex++];
      animations.push(
        {
          type: AnimationType.setHeight,
          firstIndex: mergedIndex - 1,
          newHeight: auxilaryArray[firstIndex - 1],
          secondIndex: -1,
          color: Colors.green,
        },
        {
          type: AnimationType.colorChange,
          color: Colors.green,
          firstIndex: mergedIndex - 1,
          secondIndex: secondIndex - 1,
        },
        {
          type: AnimationType.colorChange,
          color: Colors.blue,
          firstIndex: mergedIndex - 1,
          secondIndex: secondIndex - 1,
        }
      );
    } else {
      mainArray[mergedIndex++] = auxilaryArray[secondIndex++];
      animations.push(
        {
          type: AnimationType.setHeight,
          firstIndex: mergedIndex - 1,
          newHeight: auxilaryArray[secondIndex - 1],
          secondIndex: -1,
          color: Colors.green,
        },
        {
          type: AnimationType.colorChange,
          color: Colors.red,
          firstIndex: mergedIndex - 1,
          secondIndex: secondIndex - 1,
        },
        {
          type: AnimationType.colorChange,
          color: Colors.blue,
          firstIndex: mergedIndex - 1,
          secondIndex: secondIndex - 1,
        }
      );
    }
    if (isLast) {
      animations.push({
        type: AnimationType.colorChange,
        firstIndex: mergedIndex - 1,
        secondIndex: -1,
        color: Colors.purple,
      });
    }
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (firstIndex <= m) {
    mainArray[mergedIndex++] = auxilaryArray[firstIndex++];
    animations.push({
      type: AnimationType.setHeight,
      firstIndex: mergedIndex - 1,
      newHeight: auxilaryArray[firstIndex - 1],
      secondIndex: -1,
      color: Colors.green,
    });
    if (isLast) {
      animations.push({
        type: AnimationType.colorChange,
        firstIndex: mergedIndex - 1,
        secondIndex: -1,
        color: Colors.purple,
      });
    }
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (secondIndex <= r) {
    mainArray[mergedIndex++] = auxilaryArray[secondIndex++];
    animations.push({
      type: AnimationType.setHeight,
      firstIndex: mergedIndex - 1,
      newHeight: auxilaryArray[secondIndex - 1],
      secondIndex: -1,
      color: Colors.green,
    });
    if (isLast) {
      animations.push({
        type: AnimationType.colorChange,
        firstIndex: mergedIndex - 1,
        secondIndex: -1,
        color: Colors.purple,
      });
    }
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
export const MergeSortHelper = (
  mainArray: number[],
  l: number,
  r: number,
  auxilaryArray: number[],
  animations: AnimationElement[]
) => {
  if (l >= r) {
    return; //returns recursively
  }
  let m: number = l + Math.floor((r - l) / 2);
  MergeSortHelper(auxilaryArray, l, m, mainArray, animations);
  MergeSortHelper(auxilaryArray, m + 1, r, mainArray, animations);
  merge(mainArray, l, m, r, auxilaryArray, animations);

  return animations;
};

export const MergeSort = (arr: number[]) => {
  let animations: AnimationElement[] = [];
  let auxilaryArray = arr.slice();
  MergeSortHelper(arr, 0, arr.length - 1, auxilaryArray, animations);
  return animations;
};
