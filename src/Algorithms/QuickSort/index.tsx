import { AnimationType, AnimationElement } from "../types";

import { Colors } from "../../MainComponent/types";

function swap(arr, i, j) {
  if (!arr[i] || !arr[j]) {
    console.log("i: ", i, " j: ", j);
  }
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high, animations: AnimationElement[]) {
  // pivot
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller
    // than the pivot
    if (arr[j] < pivot) {
      // Increment index of
      // smaller element
      i++;
      swap(arr, i, j);
      animations.push(
        {
          type: AnimationType.colorChange,
          firstIndex: i,
          secondIndex: j,
          color: Colors.red,
        },
        {
          type: AnimationType.setHeight,
          firstIndex: i,
          secondIndex: -1,
          color: Colors.red,
          newHeight: arr[i],
        },
        {
          type: AnimationType.setHeight,
          firstIndex: j,
          secondIndex: -1,
          color: Colors.red,
          newHeight: arr[j],
        },
        {
          type: AnimationType.colorChange,
          firstIndex: i,
          secondIndex: j,
          color: Colors.green,
        },
        {
          type: AnimationType.colorChange,
          firstIndex: i,
          secondIndex: j,
          color: Colors.blue,
        }
      );
    } else {
      animations.push(
        {
          type: AnimationType.colorChange,
          firstIndex: i,
          secondIndex: j,
          color: Colors.green,
        },
        {
          type: AnimationType.colorChange,
          firstIndex: i,
          secondIndex: j,
          color: Colors.blue,
        }
      );
    }
  }
  swap(arr, i + 1, high);

  animations.push(
    {
      type: AnimationType.colorChange,
      firstIndex: i + 1,
      secondIndex: high,
      color: Colors.red,
    },
    {
      type: AnimationType.setHeight,
      firstIndex: i + 1,
      secondIndex: -1,
      color: Colors.red,
      newHeight: arr[i + 1],
    },
    {
      type: AnimationType.setHeight,
      firstIndex: high,
      secondIndex: -1,
      color: Colors.red,
      newHeight: arr[high],
    },
    {
      type: AnimationType.colorChange,
      firstIndex: i + 1,
      secondIndex: high,
      color: Colors.green,
    },
    {
      type: AnimationType.colorChange,
      firstIndex: i + 1,
      secondIndex: high,
      color: Colors.blue,
    }
  );
  return i + 1;
}

export const quickSortHelper = (
  arr,
  low,
  high,
  animations: AnimationElement[]
) => {
  if (low <= high) {
    // pi is partitioning index, arr[p]
    // is now at right place
    let pi = partition(arr, low, high, animations);
    animations.push({
      type: AnimationType.colorChange,
      firstIndex: pi,
      secondIndex: -1,
      color: Colors.purple,
    });

    // Separately sort elements before
    // partition and after partition
    quickSortHelper(arr, low, pi - 1, animations);
    quickSortHelper(arr, pi + 1, high, animations);

    return animations;
  } else {
    animations.push({
      type: AnimationType.colorChange,
      firstIndex: low,
      secondIndex: high,
      color: Colors.purple,
    });
  }
};

export const QuickSort = (arr: number[]) => {
  let animations: AnimationElement[] = [];
  animations = quickSortHelper(arr, 0, arr.length - 1, animations);
  return animations;
};
