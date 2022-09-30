import React from "react";

import {
  AnimationType,
  Colors,
  AnimationElement,
  ArrayElement,
} from "../../MainComponent/types";

function merge(
  mainArray,
  l,
  m,
  r,
  auxilaryArray: number[],
  animations: AnimationElement[]
) {
  let firstArrayLength = m - l + 1;
  var secondArrayLength = r - m;

  // Create temp arrays

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  let firstIndex = l;

  // Initial index of second subarray
  let secondIndex = m + 1;

  // Initial index of merged subarray
  var mergedIndex = l;

  while (firstIndex <= m && secondIndex <= r) {
    if (auxilaryArray[firstIndex] <= auxilaryArray[secondIndex]) {
      mainArray[mergedIndex++] = auxilaryArray[firstIndex++];

      animations.push({
        type: AnimationType.colorChange,
        color: Colors.green,
        firstIndex: firstIndex,
        secondIndex: secondIndex,
      });
    } else {
      mainArray[mergedIndex++] = auxilaryArray[secondIndex++];
      animations.push({
        type: AnimationType.colorChange,
        color: Colors.red,
        firstIndex: firstIndex,
        secondIndex: secondIndex,
      });
    }
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (firstIndex <= m) {
    mainArray[mergedIndex++] = auxilaryArray[firstIndex++];
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (secondIndex <= r) {
    mainArray[mergedIndex++] = auxilaryArray[secondIndex++];
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
